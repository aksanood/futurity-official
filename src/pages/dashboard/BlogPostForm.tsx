
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import BlogPostForm from '@/components/dashboard/BlogPostForm';
import { BlogPost } from '@/types/blog';
import { blogPosts } from '@/data/blogData';
import { useToast } from '@/components/ui/use-toast';

const DashboardBlogPostForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Find the post if we're editing
  const post = id ? blogPosts.find(p => p.id === id) : null;
  
  const handleSave = (postData: BlogPost) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      if (id) {
        // Update existing post
        const index = blogPosts.findIndex(p => p.id === id);
        if (index !== -1) {
          blogPosts[index] = postData;
        }
        
        toast({
          title: "Post updated",
          description: "The blog post has been updated successfully.",
        });
      } else {
        // Add new post
        blogPosts.unshift(postData);
        
        toast({
          title: "Post created",
          description: "The blog post has been created successfully.",
        });
      }
      
      setIsSubmitting(false);
      navigate('/dashboard/posts');
    }, 800);
  };
  
  const title = post ? 'Edit Blog Post' : 'Create Blog Post';
  const subtitle = post 
    ? `Editing "${post.title}"` 
    : 'Create a new blog post with rich content';
  
  return (
    <DashboardLayout title={title} subtitle={subtitle}>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <BlogPostForm 
          post={post} 
          onSave={handleSave} 
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardBlogPostForm;
