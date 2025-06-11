
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import BlogPostForm from '@/components/dashboard/BlogPostForm';
import { BlogPost } from '@/types/blog';
import { createBlogPost, updateBlogPost } from '@/services/blogService';

const BlogPostFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Function to handle saving the post (create or update)
  const handleSave = async (postData: BlogPost) => {
    setIsSubmitting(true);
    try {
      if (id) {
        // Update existing post
        const updatedPost = await updateBlogPost(id, postData);
        if (updatedPost) {
          toast({
            title: "Post updated",
            description: "Your blog post has been successfully updated.",
          });
          navigate('/dashboard/posts');
        } else {
          throw new Error('Failed to update post');
        }
      } else {
        // Create new post
        const newPost = await createBlogPost(postData);
        if (newPost) {
          toast({
            title: "Post created",
            description: "Your blog post has been successfully created.",
          });
          navigate('/dashboard/posts');
        } else {
          throw new Error('Failed to create post');
        }
      }
    } catch (error) {
      console.error('Error saving blog post:', error);
      toast({
        title: "Error",
        description: `Failed to ${id ? 'update' : 'create'} blog post. Please try again.`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout
      title={id ? "Edit Blog Post" : "Create Blog Post"}
      subtitle={id ? "Update your blog content" : "Create new blog content"}
    >
      <div className="max-w-5xl mx-auto">
        <BlogPostForm
          post={post}
          onSave={handleSave}
          isSubmitting={isSubmitting}
        />
      </div>
    </DashboardLayout>
  );
};

export default BlogPostFormPage;
