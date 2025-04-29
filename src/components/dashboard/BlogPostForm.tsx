import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { generateId, slugify, calculateReadTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogPost } from '@/types/blog';
import { getAllAuthors, getAllCategories, getAllTags } from '@/data/blogData';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { PopoverClose } from '@radix-ui/react-popover';
import { Checkbox } from "@/components/ui/checkbox";

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface BlogPostFormProps {
  post?: BlogPost | null;
  onSave: (postData: BlogPost) => void;
}

const blogPostSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  excerpt: Yup.string().required('Excerpt is required'),
  content: Yup.string().required('Content is required'),
  authorId: Yup.string().required('Author is required'),
  categoryId: Yup.string().required('Category is required'),
});

const BlogPostForm: React.FC<BlogPostFormProps> = ({ post, onSave }) => {
  const [featured, setFeatured] = useState('');
  const [isNewTagDialogOpen, setIsNewTagDialogOpen] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [allTags, setAllTags] = useState(getAllTags());
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    if (post) {
      formik.setValues({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        authorId: post.author.id,
        categoryId: post.category.id,
      });
      setFeatured(post.featuredImage);
      setSelectedTags(post.tags);
      setDate(new Date(post.publishedDate));
    }
  }, [post]);

  const formik = useFormik({
    initialValues: {
      title: '',
      excerpt: '',
      content: '',
      authorId: '',
      categoryId: '',
    },
    validationSchema: blogPostSchema,
    onSubmit: async (values) => {
      const { title, excerpt, content, authorId, categoryId } = values;
      const author = getAllAuthors().find((author) => author.id === authorId);
      const category = getAllCategories().find((category) => category.id === categoryId);

      if (!author || !category) {
        alert('Author or Category not found');
        return;
      }

      const newPost: BlogPost = {
        id: post?.id || generateId(),
        title,
        slug: slugify(title),
        excerpt,
        content,
        featuredImage: featured || 'https://via.placeholder.com/1200x630',
        author: {
          id: author.id,
          name: author.name,
          avatar: author.avatar || 'https://via.placeholder.com/100',
          bio: author.bio || '',
          role: author.role || 'Writer',
        },
        category: {
          id: category.id,
          name: category.name,
          slug: slugify(category.name),
        },
        tags: selectedTags,
        publishedDate: date?.toISOString() || new Date().toISOString(),
        readTime: calculateReadTime(content),
      };

      try {
        onSave(newPost);
      } catch (error) {
        console.error('Error saving post:', error);
        alert('Failed to save post');
      }
    },
  });

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeatured(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateNewTag = () => {
    if (newTagName.trim() !== '') {
      const newTag = { 
        id: generateId(), 
        name: newTagName.trim(),
        slug: slugify(newTagName.trim()) 
      };
      setAllTags([...allTags, newTag]);
      setSelectedTags([...selectedTags, newTag]);
      setNewTagName('');
      setIsNewTagDialogOpen(false);
    }
  };

  const handleTagSelection = (tag: Tag) => {
    if (selectedTags.find((selectedTag) => selectedTag.id === tag.id)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag.id !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...formik.getFieldProps('title')} />
            {formik.touched.title && formik.errors.title ? (
              <div className="text-red-500">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea id="excerpt" {...formik.getFieldProps('excerpt')} />
            {formik.touched.excerpt && formik.errors.excerpt ? (
              <div className="text-red-500">{formik.errors.excerpt}</div>
            ) : null}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Editor
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              textareaName="content"
              onEditorChange={(content) => formik.setFieldValue('content', content)}
              initialValue={formik.values.content}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help'
              }}
            />
            {formik.touched.content && formik.errors.content ? (
              <div className="text-red-500">{formik.errors.content}</div>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Category & Author</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="categoryId">Category</Label>
              <Select onValueChange={value => formik.setFieldValue('categoryId', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" defaultValue={post?.category.id} />
                </SelectTrigger>
                <SelectContent>
                  {getAllCategories().map((category) => (
                    <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formik.touched.categoryId && formik.errors.categoryId ? (
                <div className="text-red-500">{formik.errors.categoryId}</div>
              ) : null}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="authorId">Author</Label>
              <Select onValueChange={value => formik.setFieldValue('authorId', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an author" defaultValue={post?.author.id} />
                </SelectTrigger>
                <SelectContent>
                  {getAllAuthors().map((author) => (
                    <SelectItem key={author.id} value={author.id}>{author.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formik.touched.authorId && formik.errors.authorId ? (
                <div className="text-red-500">{formik.errors.authorId}</div>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Featured Image</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {featured && (
            <div className="mb-4">
              <img src={featured} alt="Featured" className="max-h-48 rounded-md object-cover" />
            </div>
          )}
          <Input type="file" accept="image/*" onChange={handleFeaturedImageChange} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <div key={tag.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`tag-${tag.id}`}
                  checked={!!selectedTags.find((selectedTag) => selectedTag.id === tag.id)}
                  onCheckedChange={() => handleTagSelection(tag)}
                />
                <Label htmlFor={`tag-${tag.id}`}>{tag.name}</Label>
              </div>
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Create New Tag</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Tag</DialogTitle>
                <DialogDescription>
                  Add a new tag to the list.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value={newTagName} onChange={(e) => setNewTagName(e.target.value)} className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">Cancel</Button>
                </DialogClose>
                <Button type="button" onClick={handleCreateNewTag}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Publish Date</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <DatePicker date={date} setDate={setDate} />
        </CardContent>
      </Card>

      <Button type="submit">{post ? 'Update Post' : 'Create Post'}</Button>
    </form>
  );
};

export default BlogPostForm;
