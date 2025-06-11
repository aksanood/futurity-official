
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

const BlogCard = ({ post, variant = 'default' }: BlogCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <div className={`group overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md ${
      isFeatured ? 'h-full flex flex-col md:flex-row' : 'flex flex-col'
    }`}>
      <Link 
        to={`/blog/${post.slug}`}
        className={`block overflow-hidden ${
          isFeatured ? 'md:w-1/2' : 'w-full aspect-video'
        }`}
      >
        <img 
          src={post.featured_image} 
          alt={post.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      <div className={`flex flex-col p-5 ${isFeatured ? 'md:w-1/2' : ''}`}>
        <div className="mb-3 flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author?.avatar} alt={post.author?.name} />
            <AvatarFallback>{post.author?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <span className="font-medium text-futurity-blue">{post.author?.name}</span>
          </div>
        </div>

        <div className="mb-2 flex items-center space-x-2 text-sm text-gray-500">
          <span className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {formatDate(post.published_date)}
          </span>
          <span>•</span>
          <span>{post.read_time} min read</span>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-2 transition-colors hover:text-futurity-orange`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {post.category && (
            <Link to={`/blog/category/${post.category.slug}`}>
              <Badge variant="outline" className="bg-futurity-gray-light text-futurity-blue hover:bg-futurity-gray">
                {post.category.name}
              </Badge>
            </Link>
          )}
          
          {post.tags && post.tags.length > 0 && 
            post.tags.slice(0, 2).map(tag => tag && (
              <Link key={tag.id} to={`/blog/tag/${tag.slug}`}>
                <Badge variant="outline" className="hover:bg-futurity-gray">
                  {tag.name}
                </Badge>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
