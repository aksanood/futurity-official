
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { slugify, calculateReadTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DatePicker } from "@/components/ui/date-picker";
import { BlogPost, Author, Tag, Category } from '@/types/blog';
import { getAuthors, getCategories, getTags, createTag } from '@/services/blogService';
import RichTextEditor from './RichTextEditor';

// Define a type for the JsonValue that can be returned from the database
type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

// Create a helper function to convert database author to our type
const convertDatabaseAuthor = (dbAuthor: any): Author => {
  let social: Author['social'] = {};
  
  try {
    if (dbAuthor.social && typeof dbAuthor.social === 'object') {
      social = dbAuthor.social as Author['social'];
    } else if (typeof dbAuthor.social === 'string' && dbAuthor.social.trim() !== '') {
      social = JSON.parse(dbAuthor.social);
    }
  } catch (e) {
    console.error('Error parsing author social data:', e);
  }
  
  return {
    id: dbAuthor.id,
    name: dbAuthor.name,
    avatar: dbAuthor.avatar || '',
    bio: dbAuthor.bio || '',
    role: dbAuthor.role || '',
    social
  };
};

const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(1, 'Content is required'),
  featured_image: z.string().min(1, 'Featured image is required'),
  author_id: z.string().min(1, 'Author is required'),
  category_id: z.string().min(1, 'Category is required'),
  published_date: z.date(),
  read_time: z.number().optional(),
});

type FormValues = z.infer<typeof blogPostSchema>;

interface BlogPostFormProps {
  post: BlogPost | null;
  onSave: (postData: BlogPost) => void;
  isSubmitting?: boolean;
}

const BlogPostForm = ({ post, onSave, isSubmitting = false }: BlogPostFormProps) => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isNewTagDialogOpen, setIsNewTagDialogOpen] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [loading, setLoading] = useState(true);

  const form = useForm<FormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: post ? {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image,
      author_id: post.author_id,
      category_id: post.category_id,
      published_date: new Date(post.published_date),
      read_time: post.read_time,
    } : {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featured_image: '',
      author_id: '',
      category_id: '',
      published_date: new Date(),
      read_time: 0,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [authorsData, categoriesData, tagsData] = await Promise.all([
          getAuthors(),
          getCategories(),
          getTags(),
        ]);
        
        // Convert authors to the proper format
        const formattedAuthors = authorsData.map(convertDatabaseAuthor);
        setAuthors(formattedAuthors);
        setCategories(categoriesData);
        setAllTags(tagsData);
        
        if (post?.tags) {
          setSelectedTags(post.tags);
        }
      } catch (error) {
        console.error('Error fetching form data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [post]);

  const generateSlug = (title: string) => {
    return slugify(title);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    form.setValue('title', title);
    
    // Only auto-generate slug if it's empty or matches the previous auto-generated slug
    const currentSlug = form.getValues('slug');
    const previousTitle = post?.title || '';
    const previousSlug = generateSlug(previousTitle);
    
    if (!currentSlug || currentSlug === previousSlug) {
      form.setValue('slug', generateSlug(title));
    }
  };

  const handleTagSelection = (tag: Tag) => {
    setSelectedTags(prev => {
      if (prev.find(t => t.id === tag.id)) {
        return prev.filter(t => t.id !== tag.id);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleCreateNewTag = async () => {
    if (!newTagName.trim()) return;
    
    try {
      const newTag = await createTag(newTagName.trim());
      
      setAllTags(prev => [...prev, newTag]);
      setSelectedTags(prev => [...prev, newTag]);
      setNewTagName('');
      setIsNewTagDialogOpen(false);
    } catch (error) {
      console.error('Error creating new tag:', error);
    }
  };

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        form.setValue('featured_image', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values: FormValues) => {
    // Calculate read time
    const readTime = values.read_time || calculateReadTime(values.content);
    
    // Prepare post data - ensure id is always a string
    const postData: BlogPost = {
      id: post?.id || '', // Always provide an id (empty string if new post)
      title: values.title,
      slug: values.slug,
      excerpt: values.excerpt,
      content: values.content,
      featured_image: values.featured_image,
      author_id: values.author_id,
      category_id: values.category_id,
      published_date: values.published_date.toISOString(),
      read_time: readTime,
      tags: selectedTags,
    };
    
    onSave(postData);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter post title" 
                    {...field} 
                    onChange={handleTitleChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter post slug" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Excerpt</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter a brief excerpt of the post" 
                    {...field} 
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <RichTextEditor
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="author_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an author" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {authors.map(author => (
                        <SelectItem key={author.id} value={author.id}>{author.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="published_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Publish Date</FormLabel>
                <DatePicker 
                  date={field.value} 
                  setDate={(date) => field.onChange(date)} 
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="featured_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Featured Image</FormLabel>
                <div className="space-y-4">
                  {field.value && (
                    <div className="w-full h-48 overflow-hidden rounded-md">
                      <img 
                        src={field.value} 
                        alt="Featured" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )}
                  <div className="flex flex-col space-y-2">
                    <Input
                      type="text"
                      placeholder="Image URL"
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <span className="text-sm text-gray-500">Or upload an image:</span>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleFeaturedImageChange}
                    />
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tags Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Tags</h3>
              <Dialog open={isNewTagDialogOpen} onOpenChange={setIsNewTagDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" type="button">
                    Create New Tag
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Tag</DialogTitle>
                    <DialogDescription>
                      Add a new tag to categorize your blog post.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <FormLabel className="text-right">Name</FormLabel>
                      <Input
                        id="tagName"
                        value={newTagName}
                        onChange={(e) => setNewTagName(e.target.value)}
                        className="col-span-3"
                        placeholder="Enter tag name"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" type="button">Cancel</Button>
                    </DialogClose>
                    <Button type="button" onClick={handleCreateNewTag}>Create</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {allTags.map((tag) => (
                <div key={tag.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`tag-${tag.id}`}
                    checked={!!selectedTags.find(t => t.id === tag.id)}
                    onCheckedChange={() => handleTagSelection(tag)}
                  />
                  <label
                    htmlFor={`tag-${tag.id}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {tag.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/dashboard/posts')}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {post ? 'Updating...' : 'Creating...'}
              </>
            ) : (
              <>{post ? 'Update' : 'Create'} Post</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BlogPostForm;
