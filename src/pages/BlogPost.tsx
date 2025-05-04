
import { useEffect, useState } from 'react';
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
import { BlogPost as BlogPostType, Category, Tag } from '@/types/blog';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPostType[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        if (slug) {
          const postData = await getPostBySlug(slug);
          if (!postData) {
            navigate('/blog');
            return;
          }
          
          setPost(postData);
          
          const [recentPostsData, categoriesData, tagsData] = await Promise.all([
            getRecentPosts(3),
            getAllCategories(),
            getAllTags()
          ]);
          
          setRecentPosts(recentPostsData.filter(recentPost => recentPost.slug !== slug));
          setCategories(categoriesData);
          setTags(tagsData);
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    window.scrollTo(0, 0);
  }, [slug, navigate]);
  
  if (loading) {
    return (
      <Layout>
        <div className="container-wide py-12">
          <div className="text-center py-12">
            <p>Loading post...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!post) {
    return null;
  }
  
  return (
    <Layout>
      <div className="hero-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Blog</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">Insights, guides & news from our team</p>
          </div>
        </div>
        
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" fill="white">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      <div className="container-wide py-8 md:py-12">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-futurity-orange mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to all posts
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8">
              <BlogPostHeader post={post} />
              
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-8">
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
          
          <div className="lg:col-span-1">
            {post.author && (
              <Card className="p-6 mb-6 bg-futurity-gray-light border-0">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-full overflow-hidden mb-4">
                    {post.author.avatar ? (
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-futurity-blue text-white flex items-center justify-center text-3xl font-bold">
                        {post.author.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-futurity-blue mb-1">{post.author.name}</h3>
                  <p className="text-gray-600 mb-4">{post.author.role || 'Content Writer'}</p>
                  <p className="text-gray-700 mb-6">
                    {post.author.bio || `${post.author.name} is a seasoned writer with expertise in digital marketing, web design, and technology trends.`}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-futurity-blue text-futurity-blue hover:bg-futurity-blue hover:text-white"
                    asChild
                  >
                    <Link to={`/author/${post.author.id}`}>View Profile</Link>
                  </Button>
                </div>
              </Card>
            )}
            
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
