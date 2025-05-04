
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import BlogPostForm from '@/components/dashboard/BlogPostForm';
import { BlogPost } from '@/types/blog';
import { getBlogPostById, createBlogPost, updateBlogPost } from '@/services/blogService';
import { useToast } from '@/components/ui/use-toast';
import { calculateReadTime } from '@/data/blogData';

const DashboardBlogPostForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(!!id);
  
  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const data = await getBlogPostById(id);
          if (data) {
            setPost(data);
          } else {
            toast({
              title: 'Error',
              description: 'Blog post not found',
              variant: 'destructive',
            });
            navigate('/dashboard/posts');
          }
        } catch (error) {
          console.error('Error fetching blog post:', error);
          toast({
            title: 'Error',
            description: 'Failed to load blog post',
            variant: 'destructive',
          });
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPost();
  }, [id, navigate, toast]);
  
  const handleSave = async (postData: BlogPost) => {
    setIsSubmitting(true);
    
    try {
      // Extract tag IDs
      const tagIds = postData.tags?.map(tag => tag.id) || [];
      
      // Calculate read time if not provided
      if (!postData.read_time) {
        postData.read_time = calculateReadTime(postData.content);
      }
      
      if (id) {
        // Update existing post
        await updateBlogPost(id, postData, tagIds);
        
        toast({
          title: "Post updated",
          description: "The blog post has been updated successfully.",
        });
      } else {
        // Create new post
        await createBlogPost(postData, tagIds);
        
        toast({
          title: "Post created",
          description: "The blog post has been created successfully.",
        });
      }
      
      navigate('/dashboard/posts');
    } catch (error) {
      console.error('Error saving blog post:', error);
      toast({
        title: 'Error',
        description: 'Failed to save blog post. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const title = post ? 'Edit Blog Post' : 'Create Blog Post';
  const subtitle = post 
    ? `Editing "${post.title}"` 
    : 'Create a new blog post with rich content';
  
  if (loading) {
    return (
      <DashboardLayout title="Loading..." subtitle="Please wait">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p>Loading post data...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout title={title} subtitle={subtitle}>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <BlogPostForm 
          post={post} 
          onSave={handleSave}
          isSubmitting={isSubmitting}
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardBlogPostForm;
