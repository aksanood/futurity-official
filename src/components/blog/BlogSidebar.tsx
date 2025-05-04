
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BlogPost, Category, Tag } from '@/types/blog';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

interface BlogSidebarProps {
  categories: Category[];
  tags: Tag[];
  recentPosts: BlogPost[];
  onSearch?: (term: string) => void;
}

const BlogSidebar = ({ categories, tags, recentPosts, onSearch }: BlogSidebarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search blog..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" className="mt-2 w-full">Search</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {/* Categories */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map(category => (
              <li key={category.id}>
                <Link 
                  to={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between text-gray-700 hover:text-futurity-orange transition-colors"
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-gray-500">
                    {/* This would ideally show the count of posts in each category */}
                    {Math.floor(Math.random() * 10) + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      {/* Recent Posts */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {recentPosts.map(post => (
              <div key={post.id} className="flex items-start space-x-3">
                <Link to={`/blog/${post.slug}`} className="flex-shrink-0 w-16 h-16 overflow-hidden rounded">
                  <img 
                    src={post.featured_image} 
                    alt={post.title} 
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div>
                  <Link to={`/blog/${post.slug}`} className="font-medium hover:text-futurity-orange transition-colors line-clamp-2">
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">{formatDate(post.published_date)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Tags */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-bold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Link 
                key={tag.id}
                to={`/blog/tag/${tag.slug}`}
                className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-futurity-orange hover:text-white transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Newsletter (Optional) */}
      <Card className="bg-futurity-blue text-white">
        <CardContent className="pt-6">
          <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
          <p className="text-gray-300 text-sm mb-4">Get the latest articles and resources straight to your inbox.</p>
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 mb-2" 
          />
          <Button variant="outline" className="w-full bg-white text-futurity-blue hover:bg-futurity-orange hover:text-white border-white">
            Subscribe
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
