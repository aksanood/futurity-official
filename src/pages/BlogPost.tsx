
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogAuthor from '@/components/blog/BlogAuthor';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { getPostBySlug, getRecentPosts, getAllCategories, getAllTags } from '@/data/blogData';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = getPostBySlug(slug || '');
  const recentPosts = getRecentPosts(3).filter(recentPost => recentPost.slug !== slug);
  const categories = getAllCategories();
  const tags = getAllTags();
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate, slug]);
  
  if (!post) {
    return null;
  }
  
  return (
    <Layout>
      <div className="container-wide py-8 md:py-12">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-futurity-orange mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to all posts
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8">
              <BlogPostHeader post={post} />
              
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              
              <BlogAuthor author={post.author} />
              
              {/* Share Buttons */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-medium">Share this post:</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline">
                      Twitter
                    </Button>
                    <Button size="sm" variant="outline">
                      Facebook
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar 
              categories={categories} 
              tags={tags} 
              recentPosts={recentPosts}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
