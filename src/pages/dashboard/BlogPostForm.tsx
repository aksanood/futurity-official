
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import BlogPostForm from '@/components/dashboard/BlogPostForm';
import { 
  getBlogPostById,
  createBlogPost, 
  updateBlogPost 
} from '@/services/blogService';
import { BlogPost } from '@/types/blog';

const BlogPostFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const isEditMode = !!id;
  
  // Fetch post data if in edit mode
  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const postData = await getBlogPostById(id);
        if (postData) {
          // Ensure proper social data format
          if (postData.author && typeof postData.author.social === 'object') {
            postData.author.social = postData.author.social as {
              twitter?: string;
              linkedin?: string;
              github?: string;
            };
          } else if (postData.author) {
            postData.author.social = {};
          }
          
          setPost(postData);
        } else {
          toast({
            title: "Error",
            description: "Post not found",
            variant: "destructive"
          });
          navigate('/dashboard/posts');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        toast({
          title: "Error",
          description: "Failed to load post. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [id, navigate, toast]);
  
  const handleSave = async (formData: BlogPost) => {
    setSubmitting(true);
    try {
      const tagIds = formData.tags ? formData.tags.map(tag => tag.id) : [];
      
      if (isEditMode && id) {
        // Update existing post
        await updateBlogPost(id, formData, tagIds);
        toast({
          title: "Success",
          description: "Blog post updated successfully."
        });
      } else {
        // Create new post
        await createBlogPost(formData, tagIds);
        toast({
          title: "Success",
          description: "Blog post created successfully."
        });
      }
      
      navigate('/dashboard/posts');
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: isEditMode 
          ? "Failed to update blog post. Please try again." 
          : "Failed to create blog post. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <DashboardLayout 
      title={isEditMode ? "Edit Blog Post" : "New Blog Post"} 
      subtitle={isEditMode ? "Update your blog post content" : "Create a new blog post"}
    >
      {isEditMode && loading ? (
        <div className="flex items-center justify-center py-10">
          <p>Loading post data...</p>
        </div>
      ) : (
        <BlogPostForm 
          post={post || null}
          onSave={handleSave}
          isSubmitting={submitting}
        />
      )}
    </DashboardLayout>
  );
};

export default BlogPostFormPage;
