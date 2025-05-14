
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import BlogPostForm from '@/components/dashboard/BlogPostForm';
import { 
  getPostById,
  createPost, 
  updatePost 
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
        const postData = await getPostById(id);
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
      if (isEditMode && id) {
        // Convert BlogPost to UpdatePostParams
        const { id: postId, ...postData } = formData;
        
        // Update existing post with ID and form data
        await updatePost(id, postData);
        toast({
          title: "Success",
          description: "Blog post updated successfully."
        });
      } else {
        // Create new post with form data
        // Ensure featured_image field is set correctly for the API
        const postData = {
          ...formData,
          featured_image: formData.featured_image
        };
        await createPost(postData);
        toast({
          title: "Success",
          description: "Blog post created successfully."
        });
      }
      
      navigate('/dashboard/posts');
    } catch (error: any) {
      if (error.code === '23505' && error.message?.includes('blog_posts_slug_key')) {
        toast({
          title: "Duplicate Slug",
          description: "A blog post with this slug already exists. Please choose a different slug.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: isEditMode 
            ? "Failed to update blog post. Please try again." 
            : "Failed to create blog post. Please try again.",
          variant: "destructive"
        });
      }
      console.error('Error saving post:', error);
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
        <div className="bg-white shadow-sm rounded-lg p-6">
          <BlogPostForm 
            post={post}
            onSave={handleSave}
            isSubmitting={submitting}
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export default BlogPostFormPage;
