
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import RichTextEditor from './RichTextEditor';
import { getAllCategories, getAllTags } from '@/data/blogData';
import { BlogPost, Author, Category, Tag } from '@/types/blog';

const authors = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Sarah is our Senior Digital Strategist with over 10 years of experience in digital marketing and SEO optimization."
  },
  {
    id: "2",
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "David leads our web development team, specializing in modern JavaScript frameworks and serverless architectures."
  },
  {
    id: "3",
    name: "Michelle Rodriguez",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Michelle is our Head of Design with expertise in UI/UX principles and brand identity development."
  }
];

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().min(5, 'Slug must be at least 5 characters'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  featuredImage: z.string().url('Must be a valid URL'),
  categoryId: z.string(),
  tagIds: z.array(z.string()).min(1, 'Select at least one tag'),
  authorId: z.string(),
  publishedDate: z.string(),
  readTime: z.number().min(1).max(60)
});

type FormValues = z.infer<typeof formSchema>;

interface BlogPostFormProps {
  post?: BlogPost;
  onSave: (post: BlogPost) => void;
}

const BlogPostForm = ({ post, onSave }: BlogPostFormProps) => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const categories = getAllCategories();
  const tags = getAllTags();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: post ? {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featuredImage: post.featuredImage,
      categoryId: post.category.id,
      tagIds: post.tags.map(tag => tag.id),
      authorId: post.author.id,
      publishedDate: post.publishedDate,
      readTime: post.readTime
    } : {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      categoryId: '',
      tagIds: [],
      authorId: '',
      publishedDate: new Date().toISOString().split('T')[0],
      readTime: 5
    }
  });

  useEffect(() => {
    if (post) {
      setSelectedTags(post.tags.map(tag => tag.id));
    }
  }, [post]);
  
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
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
  
  const handleTagToggle = (tagId: string) => {
    setSelectedTags(prev => {
      const newTags = prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId];
      
      form.setValue('tagIds', newTags);
      return newTags;
    });
  };
  
  const onSubmit = (values: FormValues) => {
    const selectedCategory = categories.find(c => c.id === values.categoryId);
    const selectedAuthor = authors.find(a => a.id === values.authorId);
    const selectedTagsData = tags.filter(tag => values.tagIds.includes(tag.id));
    
    if (!selectedCategory || !selectedAuthor) return;
    
    const postData: BlogPost = {
      id: post?.id || String(Date.now()),
      title: values.title,
      slug: values.slug,
      excerpt: values.excerpt,
      content: values.content,
      featuredImage: values.featuredImage,
      category: selectedCategory,
      author: selectedAuthor,
      tags: selectedTagsData,
      publishedDate: values.publishedDate,
      readTime: values.readTime
    };
    
    onSave(postData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  placeholder="Enter a short summary of the post" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="featuredImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Featured Image URL</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter the URL of the featured image" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select 
                value={field.value} 
                onValueChange={field.onChange}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="authorId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <Select 
                value={field.value} 
                onValueChange={field.onChange}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an author" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {authors.map(author => (
                    <SelectItem key={author.id} value={author.id}>
                      {author.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="tagIds"
          render={() => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Button
                    key={tag.id}
                    type="button"
                    variant={selectedTags.includes(tag.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTagToggle(tag.id)}
                  >
                    {tag.name}
                  </Button>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="publishedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Publication Date</FormLabel>
                <FormControl>
                  <Input 
                    type="date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="readTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Read Time (minutes)</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    min="1"
                    max="60"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
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
                  className="min-h-[400px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/dashboard/posts')}
          >
            Cancel
          </Button>
          <Button type="submit">
            {post ? 'Update' : 'Create'} Post
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BlogPostForm;
