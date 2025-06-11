
import { Author } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface BlogAuthorProps {
  author: Author;
}

const BlogAuthor = ({ author }: BlogAuthorProps) => {
  return (
    <Card className="mt-12 mb-8">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-gray-200">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div>
            <h3 className="text-lg font-bold mb-2">About the Author</h3>
            <h4 className="text-futurity-orange font-medium mb-2">{author.name}</h4>
            <p className="text-gray-600">{author.bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogAuthor;
