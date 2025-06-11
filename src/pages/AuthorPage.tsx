
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { BlogPost, Author } from '@/types/blog';
import BlogCard from '@/components/blog/BlogCard';
import { getPostsByAuthor, getAuthorByIdAsync } from '@/data/blogData';
import { Card } from '@/components/ui/card';
import { Twitter, Linkedin, Github } from 'lucide-react';

const AuthorPage = () => {
  const { id } = useParams<{ id: string }>();
  const [authorPosts, setAuthorPosts] = useState<BlogPost[]>([]);
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (id) {
          const [posts, authorData] = await Promise.all([
            getPostsByAuthor(id),
            getAuthorByIdAsync(id)
          ]);
          
          setAuthorPosts(posts);
          setAuthor(authorData || null);
        }
      } catch (error) {
        console.error('Error fetching author data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="text-center">
            <p>Loading author profile...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!author) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Author not found</h2>
            <p>Sorry, the author you are looking for does not exist.</p>
          </div>
        </div>
      </Layout>
    );
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
            {authorPosts.length > 0 ? (
              <div className="grid gap-8">
                {authorPosts.map((post: BlogPost) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No posts found</h3>
                <p className="text-gray-600">This author hasn't published any posts yet.</p>
              </div>
            )}
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
