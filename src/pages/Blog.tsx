
import { useState, useEffect } from 'react';
import { Search, Grid, List } from 'lucide-react';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BlogPost } from '@/types/blog';
import { getAllPosts, getRecentPosts, getAllCategories, getAllTags } from '@/data/blogData';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const allPosts = getAllPosts();
  const recentPosts = getRecentPosts(4);
  const categories = getAllCategories();
  const tags = getAllTags();
  
  useEffect(() => {
    setPosts(allPosts);
  }, []);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      setPosts(allPosts);
      return;
    }
    
    const filteredPosts = allPosts.filter(post => {
      const searchContent = `${post.title} ${post.excerpt} ${post.content} ${post.category.name} ${post.tags.map(tag => tag.name).join(' ')}`.toLowerCase();
      return searchContent.includes(term.toLowerCase());
    });
    
    setPosts(filteredPosts);
  };
  
  return (
    <BlogLayout>
      {/* Featured Post */}
      {allPosts.length > 0 && (
        <div className="mb-12">
          <BlogCard post={allPosts[0]} variant="featured" />
        </div>
      )}
      
      {/* Search and View Toggle (Mobile) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 lg:hidden">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search blog..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm" 
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="lg:col-span-2">
          {/* View Toggle (Desktop) */}
          <div className="hidden lg:flex justify-end mb-6">
            <div className="flex space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm" 
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4 mr-2" /> Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4 mr-2" /> List
              </Button>
            </div>
          </div>
          
          {searchTerm && (
            <div className="mb-6">
              <p className="text-gray-600">
                {posts.length === 0 
                  ? `No results found for "${searchTerm}"` 
                  : `Showing ${posts.length} ${posts.length === 1 ? 'result' : 'results'} for "${searchTerm}"`
                }
              </p>
            </div>
          )}
          
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1'}`}>
            {posts.length > 0 ? (
              posts.map(post => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <h3 className="text-xl font-bold mb-2">No posts found</h3>
                <p className="text-gray-600">Try adjusting your search term or browse all categories.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <BlogSidebar 
            categories={categories} 
            tags={tags} 
            recentPosts={recentPosts}
            onSearch={handleSearch}
          />
        </div>
      </div>
    </BlogLayout>
  );
};

export default Blog;
