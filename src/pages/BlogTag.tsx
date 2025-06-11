
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import { getPostsByTag, getAllCategories, getAllTags, getRecentPosts } from '@/data/blogData';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { BlogPost, Category, Tag } from '@/types/blog';

const BlogTag = () => {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [tagName, setTagName] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const categoriesData = await getAllCategories();
        const tagsData = await getAllTags();
        const recentPostsData = await getRecentPosts(3);
        
        setCategories(categoriesData);
        setTags(tagsData);
        setRecentPosts(recentPostsData);
        
        if (slug) {
          const tagPosts = await getPostsByTag(slug);
          setPosts(tagPosts);
          
          const tag = tagsData.find(t => t.slug === slug);
          if (tag) {
            setTagName(tag.name);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [slug]);
  
  return (
    <BlogLayout
      title={`Tag: ${tagName}`}
      subtitle={`Browse all posts tagged with ${tagName}`}
    >
      <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-futurity-orange mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to all posts
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Posts */}
        <div className="lg:col-span-2">
          {loading ? (
            <div className="text-center py-12">
              <p>Loading posts...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No posts found</h3>
              <p className="text-gray-600">There are no posts with this tag yet.</p>
            </div>
          )}
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
    </BlogLayout>
  );
};

export default BlogTag;
