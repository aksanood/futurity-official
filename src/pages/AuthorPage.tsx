
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { BlogPost as BlogPostType, Author } from '@/types/blog';
import BlogCard from '@/components/blog/BlogCard';
import { getPostsByAuthor } from '@/data/blogData';
import { Card } from '@/components/ui/card';
import { Twitter, Linkedin, Github } from 'lucide-react';

const AuthorPage = () => {
  const { id } = useParams();
  const authorPosts = getPostsByAuthor(id || '');
  const author = authorPosts[0]?.author;

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <Layout>
      <div className="hero-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">{author.name}</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">{author.role}</p>
          </div>
        </div>
        
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" fill="white">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Articles by {author.name}</h2>
            <div className="grid gap-8">
              {authorPosts.map((post: BlogPostType) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src={author.avatar} 
                    alt={author.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                <p className="text-futurity-orange mb-4">{author.role}</p>
                <p className="text-gray-600 mb-6">{author.bio}</p>
                
                {author.social && (
                  <div className="flex gap-4">
                    {author.social.twitter && (
                      <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" 
                         className="text-gray-600 hover:text-futurity-blue">
                        <Twitter size={20} />
                      </a>
                    )}
                    {author.social.linkedin && (
                      <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-futurity-blue">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {author.social.github && (
                      <a href={author.social.github} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-futurity-blue">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorPage;
