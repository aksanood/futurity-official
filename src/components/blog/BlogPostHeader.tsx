
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';
import { Calendar, User, Tag as TagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <div className="mb-8">
      {post.category && (
        <div className="mb-4">
          <Link 
            to={`/blog/category/${post.category.slug}`}
            className="text-futurity-orange hover:underline font-medium"
          >
            {post.category.name}
          </Link>
        </div>
      )}
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
      
      <div className="flex items-center flex-wrap gap-4 text-gray-600 mb-6">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author?.avatar} alt={post.author?.name} />
            <AvatarFallback>{post.author?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{post.author?.name}</span>
        </div>
        
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(post.published_date)}</span>
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center">
            <TagIcon className="h-4 w-4 mr-1" />
            <div className="flex flex-wrap gap-1">
              {post.tags.map(tag => tag && (
                <Link key={tag.id} to={`/blog/tag/${tag.slug}`}>
                  <Badge variant="outline" className="hover:bg-futurity-gray">
                    {tag.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="w-full aspect-[2/1] overflow-hidden rounded-lg mb-8">
        <img 
          src={post.featured_image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BlogPostHeader;
