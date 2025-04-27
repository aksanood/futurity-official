export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  category: Category;
  tags: Tag[];
  publishedDate: string;
  readTime: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}
