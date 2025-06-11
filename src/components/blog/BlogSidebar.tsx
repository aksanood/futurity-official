
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { BlogPost, Category, Tag } from '@/types/blog';

export interface BlogSidebarProps {
  categories: Category[];
  tags: Tag[];
  recentPosts: BlogPost[];
  onSearch?: (term: string) => void;
  className?: string; // Adding className prop
}

const BlogSidebar = ({
  categories,
  tags,
  recentPosts,
  onSearch,
  className = ''
}: BlogSidebarProps) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get('search') as string;
    if (onSearch) {
      onSearch(searchTerm);
    }
  };
  
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Search */}
      {onSearch && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Search</h3>
          <form onSubmit={handleSearch} className="flex space-x-2">
            <Input 
              name="search" 
              placeholder="Search posts..." 
              className="flex-1"
            />
            <Button type="submit">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
      
      {/* Categories */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.id}>
              <Link 
                to={`/blog/category/${category.slug}`}
                className="text-gray-700 hover:text-futurity-orange transition-colors"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Tags */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link 
              key={tag.id}
              to={`/blog/tag/${tag.slug}`}
              className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-futurity-orange hover:text-white transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map(post => (
            <div key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <Link 
                to={`/blog/${post.slug}`}
                className="font-medium hover:text-futurity-orange transition-colors"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-500 mt-1">
                {formatDate(post.published_date)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
