
import { 
  getPosts, 
  getBlogPostBySlug as getPostBySlugService, 
  getAuthors, 
  getCategories,
  getTags,
  getAuthorById
} from '@/services/blogService';
import { BlogPost, Author, Category, Tag } from '@/types/blog';
import { slugify } from '@/lib/utils';

// Helper function to ensure Author object has correct social format
const ensureCorrectAuthorFormat = (author: any): Author => {
  let social = author.social;
  
  // Handle potential JSON string format for social
  if (typeof author.social === 'string') {
    try {
      social = JSON.parse(author.social);
    } catch (e) {
      social = {};
      console.error('Error parsing author social data:', e);
    }
  } else if (author.social === null || typeof author.social !== 'object') {
    social = {};
  }
  
  return {
    id: author.id,
    name: author.name,
    avatar: author.avatar || '',
    bio: author.bio || '',
    role: author.role || '',
    social: social as { twitter?: string; linkedin?: string; github?: string }
  };
};

// Mock data for initial page load and fallback
const mockAuthors: Author[] = [
  {
    id: 'author-1',
    name: 'Alex Morgan',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    bio: 'Digital marketing specialist with over a decade of experience in driving growth through content and SEO strategies.',
    role: 'Marketing Director',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'author-2',
    name: 'Jordan Lee',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    bio: 'Full-stack developer passionate about web technologies and building accessible applications.',
    role: 'Lead Developer',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  }
];

const mockCategories: Category[] = [
  { id: 'cat-1', name: 'Marketing', slug: 'marketing' },
  { id: 'cat-2', name: 'Design', slug: 'design' },
  { id: 'cat-3', name: 'Development', slug: 'development' },
  { id: 'cat-4', name: 'Business', slug: 'business' }
];

const mockTags: Tag[] = [
  { id: 'tag-1', name: 'SEO', slug: 'seo' },
  { id: 'tag-2', name: 'UX', slug: 'ux' },
  { id: 'tag-3', name: 'React', slug: 'react' },
  { id: 'tag-4', name: 'Strategy', slug: 'strategy' },
  { id: 'tag-5', name: 'Trends', slug: 'trends' }
];

const mockBlogPosts: BlogPost[] = [
  // ... your mock blog posts here with structure matching the above types
  {
    id: 'post-1',
    title: 'The Future of Web Development',
    slug: 'the-future-of-web-development',
    excerpt: 'Exploring upcoming trends and technologies shaping the future of web development.',
    content: '## The Future is Now\n\nWeb development is constantly evolving...',
    featured_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
    author_id: 'author-2',
    category_id: 'cat-3',
    published_date: '2023-05-15T12:00:00Z',
    read_time: 8,
    author: mockAuthors[1],
    category: mockCategories[2],
    tags: [mockTags[2], mockTags[4]]
  },
  // Add more mock posts if needed
];

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const posts = await getPosts();
    
    // Ensure each post has correctly formatted author social data
    const formattedPosts = posts.map(post => {
      if (post.author) {
        return {
          ...post,
          author: ensureCorrectAuthorFormat(post.author)
        };
      }
      return post;
    });
    
    return formattedPosts.length > 0 ? formattedPosts : mockBlogPosts;
  } catch (error) {
    console.error('Error fetching blog posts, using mock data:', error);
    return mockBlogPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const post = await getPostBySlugService(slug);
    if (post) {
      // Ensure author has correctly formatted social data
      if (post.author) {
        post.author = ensureCorrectAuthorFormat(post.author);
      }
      return post;
    }
    
    return mockBlogPosts.find(post => post.slug === slug);
  } catch (error) {
    console.error('Error fetching blog post, using mock data:', error);
    return mockBlogPosts.find(post => post.slug === slug);
  }
}

export async function getRecentPosts(limit = 5): Promise<BlogPost[]> {
  try {
    const posts = await getPosts();
    const formattedPosts = posts.map(post => {
      if (post.author) {
        return {
          ...post,
          author: ensureCorrectAuthorFormat(post.author)
        };
      }
      return post;
    });
    
    if (formattedPosts.length > 0) {
      return formattedPosts.slice(0, limit);
    }
    
    return mockBlogPosts.slice(0, limit);
  } catch (error) {
    console.error('Error fetching recent posts, using mock data:', error);
    return mockBlogPosts.slice(0, limit);
  }
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    const posts = await getPosts();
    const formattedPosts = posts.map(post => {
      if (post.author) {
        return {
          ...post,
          author: ensureCorrectAuthorFormat(post.author)
        };
      }
      return post;
    });
    
    if (formattedPosts.length > 0) {
      return formattedPosts.filter(post => post.category?.slug === categorySlug);
    }
    
    return mockBlogPosts.filter(post => post.category?.slug === categorySlug);
  } catch (error) {
    console.error('Error fetching posts by category, using mock data:', error);
    return mockBlogPosts.filter(post => post.category?.slug === categorySlug);
  }
}

export async function getPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  try {
    const posts = await getPosts();
    const formattedPosts = posts.map(post => {
      if (post.author) {
        return {
          ...post,
          author: ensureCorrectAuthorFormat(post.author)
        };
      }
      return post;
    });
    
    if (formattedPosts.length > 0) {
      return formattedPosts.filter(post => post.tags?.some(tag => tag.slug === tagSlug));
    }
    
    return mockBlogPosts.filter(post => post.tags?.some(tag => tag.slug === tagSlug));
  } catch (error) {
    console.error('Error fetching posts by tag, using mock data:', error);
    return mockBlogPosts.filter(post => post.tags?.some(tag => tag.slug === tagSlug));
  }
}

export async function getPostsByAuthor(authorId: string): Promise<BlogPost[]> {
  try {
    const posts = await getPosts();
    const formattedPosts = posts.map(post => {
      if (post.author) {
        return {
          ...post,
          author: ensureCorrectAuthorFormat(post.author)
        };
      }
      return post;
    });
    
    if (formattedPosts.length > 0) {
      return formattedPosts.filter(post => post.author_id === authorId);
    }
    
    return mockBlogPosts.filter(post => post.author_id === authorId);
  } catch (error) {
    console.error('Error fetching posts by author, using mock data:', error);
    return mockBlogPosts.filter(post => post.author_id === authorId);
  }
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const categories = await getCategories();
    return categories.length > 0 ? categories : mockCategories;
  } catch (error) {
    console.error('Error fetching categories, using mock data:', error);
    return mockCategories;
  }
}

export async function getAllTags(): Promise<Tag[]> {
  try {
    const tags = await getTags();
    return tags.length > 0 ? tags : mockTags;
  } catch (error) {
    console.error('Error fetching tags, using mock data:', error);
    return mockTags;
  }
}

export async function getAllAuthors(): Promise<Author[]> {
  try {
    const authors = await getAuthors();
    // Make sure all authors have the correct social format
    const formattedAuthors = authors.map(ensureCorrectAuthorFormat);
    return formattedAuthors.length > 0 ? formattedAuthors : mockAuthors;
  } catch (error) {
    console.error('Error fetching authors, using mock data:', error);
    return mockAuthors;
  }
}

export async function getAuthorByIdAsync(id: string): Promise<Author | undefined> {
  try {
    const author = await getAuthorById(id);
    if (author) return ensureCorrectAuthorFormat(author);
    
    return mockAuthors.find(author => author.id === id);
  } catch (error) {
    console.error('Error fetching author, using mock data:', error);
    return mockAuthors.find(author => author.id === id);
  }
}

// Utility function to calculate read time
export function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
