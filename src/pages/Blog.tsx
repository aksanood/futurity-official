import { useState, useEffect } from 'react';
import { Search, Grid, List } from 'lucide-react';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { BlogPost, Category, Tag } from '@/types/blog';
import { getAllPosts, getRecentPosts, getAllCategories, getAllTags } from '@/data/blogData';
import PageHero from '@/components/ui/page-hero';
import { Link } from 'react-router-dom';

const POSTS_PER_PAGE = 8;

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [recentPostsList, setRecentPostsList] = useState<BlogPost[]>([]);
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [tagsList, setTagsList] = useState<Tag[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const allPostsData = await getAllPosts();
        const recentPostsData = await getRecentPosts(4);
        const categoriesData = await getAllCategories();
        const tagsData = await getAllTags();
        
        setPosts(allPostsData);
        setRecentPostsList(recentPostsData);
        setCategoriesList(categoriesData);
        setTagsList(tagsData);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
    
    if (!term.trim()) {
      getAllPosts().then(setPosts);
      return;
    }
    
    getAllPosts().then(allPosts => {
      const filteredPosts = allPosts.filter(post => {
        const searchContent = `${post.title} ${post.excerpt} ${post.content} ${post.category?.name || ''} ${post.tags?.map(tag => tag?.name).join(' ') || ''}`.toLowerCase();
        return searchContent.includes(term.toLowerCase());
      });
      
      setPosts(filteredPosts);
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <BlogLayout>
      {/* Hero Section */}
      <PageHero
        title="Blog & Insights"
        subtitle="Expert insights, industry trends, and actionable advice to help your business thrive in the digital world."
      />
      
      {/* Featured Post */}
      {posts.length > 0 && (
        <div className="container-wide py-12">
          <div className="mb-12">
            <BlogCard post={posts[0]} variant="featured" />
          </div>
        </div>
      )}
      
      <div className="container-wide py-12">
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
            
            {loading ? (
              <div className="text-center py-12">
                <div className="h-12 w-12 border-4 border-futurity-orange/30 border-t-futurity-orange rounded-full animate-spin mx-auto mb-4"></div>
                <p>Loading posts...</p>
              </div>
            ) : (
              <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1'}`}>
                {currentPosts.length > 0 ? (
                  currentPosts.map(post => (
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
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          onClick={() => handlePageChange(i + 1)}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
            
            <div className="text-center mt-12">
              <Button asChild className="mt-8 bg-futurity-blue hover:bg-futurity-blue/90 text-white rounded-full px-8">
                <Link to="/about-futurity">Who is Futurity?</Link>
              </Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar 
              categories={categoriesList} 
              tags={tagsList} 
              recentPosts={recentPostsList}
              onSearch={handleSearch}
              className="sticky top-24"
            />
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Blog;
