
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import { getPostsByCategory, getAllCategories, getAllTags, getRecentPosts } from '@/data/blogData';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { BlogPost } from '@/types/blog';

const BlogCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categoryName, setCategoryName] = useState('');
  
  const categories = getAllCategories();
  const category = categories.find(cat => cat.slug === slug);
  const tags = getAllTags();
  const recentPosts = getRecentPosts(3);
  
  useEffect(() => {
    if (slug) {
      const categoryPosts = getPostsByCategory(slug);
      setPosts(categoryPosts);
      
      if (category) {
        setCategoryName(category.name);
      }
    }
  }, [slug, category]);
  
  return (
    <BlogLayout
      title={`Category: ${categoryName}`}
      subtitle={`Browse all posts in the ${categoryName} category`}
    >
      <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-futurity-orange mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to all posts
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Posts */}
        <div className="lg:col-span-2">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No posts found</h3>
              <p className="text-gray-600">There are no posts in this category yet.</p>
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

export default BlogCategory;
