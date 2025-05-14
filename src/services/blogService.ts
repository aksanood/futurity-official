
import { supabase } from '@/integrations/supabase/client';
import { BlogPost, Author, Category, Tag } from '@/types/blog';
import { v4 as uuidv4 } from 'uuid';
import { slugify, calculateReadTime } from '@/lib/utils';

// Function to get all posts
export async function getPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories (
          id,
          name,
          slug
        ),
        tags:blog_posts_tags (
          tag:blog_tags (
            id,
            name,
            slug
          )
        ),
        author:blog_authors (
          id,
          name,
          avatar,
          role
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    // Transform the data to match the BlogPost type
    const posts: BlogPost[] = data.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image,
      author_id: post.author_id,
      category_id: post.category_id,
      published_date: post.published_date || post.created_at,
      read_time: post.read_time || calculateReadTime(post.content),
      created_at: post.created_at,
      updated_at: post.updated_at,
      category: post.category ? {
        id: post.category.id,
        name: post.category.name,
        slug: post.category.slug
      } : undefined,
      tags: post.tags ? post.tags.map((post_tag: any) => ({
        id: post_tag.tag.id,
        name: post_tag.tag.name,
        slug: post_tag.tag.slug
      })) : [],
      author: post.author ? {
        id: post.author.id,
        name: post.author.name,
        avatar: post.author.avatar,
        bio: post.author.bio || '',
        role: post.author.role || '',
        social: {} // Default empty object for social
      } : undefined
    }));

    return posts;
  } catch (error) {
    console.error("Unexpected error fetching posts:", error);
    return [];
  }
}

// Function to get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories (
          id,
          name,
          slug
        ),
        tags:blog_posts_tags (
          tag:blog_tags (
            id,
            name,
            slug
          )
        ),
        author:blog_authors (
          id,
          name,
          avatar,
          role,
          bio
        )
      `)
      .eq('slug', slug)
      .single();

    if (error) {
      console.error("Error fetching post by slug:", error);
      return null;
    }

    // Transform the data to match the BlogPost type
    const post: BlogPost = {
      id: data.id,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      featured_image: data.featured_image,
      author_id: data.author_id,
      category_id: data.category_id,
      published_date: data.published_date || data.created_at,
      read_time: data.read_time || calculateReadTime(data.content),
      created_at: data.created_at,
      updated_at: data.updated_at,
      category: data.category ? {
        id: data.category.id,
        name: data.category.name,
        slug: data.category.slug
      } : undefined,
      tags: data.tags ? data.tags.map((post_tag: any) => ({
        id: post_tag.tag.id,
        name: post_tag.tag.name,
        slug: post_tag.tag.slug
      })) : [],
      author: data.author ? {
        id: data.author.id,
        name: data.author.name,
        avatar: data.author.avatar,
        bio: data.author.bio || '',
        role: data.author.role || '',
        social: {} // Default empty object for social
      } : undefined
    };

    return post;
  } catch (error) {
    console.error("Unexpected error fetching post by slug:", error);
    return null;
  }
}

// Function to get a single post by ID
export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories (
          id,
          name,
          slug
        ),
        tags:blog_posts_tags (
          tag:blog_tags (
            id,
            name,
            slug
          )
        ),
        author:blog_authors (
          id,
          name,
          avatar,
          role,
          bio
        )
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error("Error fetching post by id:", error);
      return null;
    }

    // Transform the data to match the BlogPost type
    const post: BlogPost = {
      id: data.id,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      featured_image: data.featured_image,
      author_id: data.author_id,
      category_id: data.category_id,
      published_date: data.published_date || data.created_at,
      read_time: data.read_time || calculateReadTime(data.content),
      created_at: data.created_at,
      updated_at: data.updated_at,
      category: data.category ? {
        id: data.category.id,
        name: data.category.name,
        slug: data.category.slug
      } : undefined,
      tags: data.tags ? data.tags.map((post_tag: any) => ({
        id: post_tag.tag.id,
        name: post_tag.tag.name,
        slug: post_tag.tag.slug
      })) : [],
      author: data.author ? {
        id: data.author.id,
        name: data.author.name,
        avatar: data.author.avatar,
        bio: data.author.bio || '',
        role: data.author.role || '',
        social: {} // Default empty object for social
      } : undefined
    };

    return post;
  } catch (error) {
    console.error("Unexpected error fetching post by id:", error);
    return null;
  }
}

interface CreatePostParams {
  title: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author_id: string;
  category_id?: string | null;
  tag_ids?: string[];
  published_date?: string;
  read_time?: number;
}

// Function to create a new post
export async function createPost(post: CreatePostParams): Promise<BlogPost | null> {
  try {
    const newPostId = uuidv4();
    const slug = slugify(post.title);

    const { data: postData, error: postError } = await supabase
      .from('blog_posts')
      .insert([
        {
          id: newPostId,
          created_at: new Date().toISOString(),
          title: post.title,
          slug: slug,
          excerpt: post.excerpt,
          content: post.content,
          featured_image: post.featured_image,
          category_id: post.category_id || null,
          author_id: post.author_id,
          published_date: post.published_date || new Date().toISOString(),
          read_time: post.read_time || calculateReadTime(post.content)
        }
      ])
      .select('*')
      .single();

    if (postError) {
      console.error("Error creating post:", postError);
      return null;
    }

    // Create post_tag entries for each tag
    if (post.tag_ids && post.tag_ids.length > 0) {
      const postTags = post.tag_ids.map(tag_id => ({
        post_id: newPostId,
        tag_id: tag_id
      }));

      const { error: postTagsError } = await supabase
        .from('blog_posts_tags')
        .insert(postTags);

      if (postTagsError) {
        console.error("Error creating post_tags:", postTagsError);
        return null;
      }
    }

    // Fetch the created post with all details
    return getPostById(newPostId);
  } catch (error) {
    console.error("Unexpected error creating post:", error);
    return null;
  }
}

interface UpdatePostParams {
  id: string;
  title?: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  category_id?: string | null;
  tag_ids?: string[];
  published_date?: string;
  read_time?: number;
}

// Function to update a post
export async function updatePost(id: string, post: UpdatePostParams): Promise<BlogPost | null> {
  try {
    const { title, excerpt, content, featured_image, category_id, tag_ids, published_date, read_time } = post;
    const slug = title ? slugify(title) : undefined;

    const { data: postData, error: postError } = await supabase
      .from('blog_posts')
      .update({
        title: title,
        slug: slug,
        excerpt: excerpt,
        content: content,
        featured_image: featured_image,
        category_id: category_id || null,
        published_date: published_date,
        read_time: read_time || (content ? calculateReadTime(content) : undefined)
      })
      .eq('id', id)
      .select('*')
      .single();

    if (postError) {
      console.error("Error updating post:", postError);
      return null;
    }

    // Delete existing post_tag entries for the post
    const { error: deletePostTagsError } = await supabase
      .from('blog_posts_tags')
      .delete()
      .eq('post_id', id);

    if (deletePostTagsError) {
      console.error("Error deleting existing post_tags:", deletePostTagsError);
      return null;
    }

    // Create new post_tag entries for each tag
    if (tag_ids && tag_ids.length > 0) {
      const postTags = tag_ids.map(tag_id => ({
        post_id: id,
        tag_id: tag_id
      }));

      const { error: postTagsError } = await supabase
        .from('blog_posts_tags')
        .insert(postTags);

      if (postTagsError) {
        console.error("Error creating post_tags:", postTagsError);
        return null;
      }
    }

    // Fetch the updated post with all details
    return getPostById(id);
  } catch (error) {
    console.error("Unexpected error updating post:", error);
    return null;
  }
}

// Function to delete a post
export async function deletePost(id: string): Promise<boolean> {
  try {
    // Delete existing post_tag entries for the post
    const { error: deletePostTagsError } = await supabase
      .from('blog_posts_tags')
      .delete()
      .eq('post_id', id);

    if (deletePostTagsError) {
      console.error("Error deleting existing post_tags:", deletePostTagsError);
      return false;
    }

    const { error: postError } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (postError) {
      console.error("Error deleting post:", postError);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Unexpected error deleting post:", error);
    return false;
  }
}

// Function to get all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error("Error fetching categories:", error);
      return [];
    }

    return data as Category[];
  } catch (error) {
    console.error("Unexpected error fetching categories:", error);
    return [];
  }
}

// Function to get a single category by slug
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error("Error fetching category by slug:", error);
      return null;
    }

    return data as Category;
  } catch (error) {
    console.error("Unexpected error fetching category by slug:", error);
    return null;
  }
}

// Function to get all tags
export async function getTags(): Promise<Tag[]> {
  try {
    const { data, error } = await supabase
      .from('blog_tags')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error("Error fetching tags:", error);
      return [];
    }

    return data as Tag[];
  } catch (error) {
    console.error("Unexpected error fetching tags:", error);
    return [];
  }
}

// Function to get a single tag by slug
export async function getTagBySlug(slug: string): Promise<Tag | null> {
  try {
    const { data, error } = await supabase
      .from('blog_tags')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error("Error fetching tag by slug:", error);
      return null;
    }

    return data as Tag;
  } catch (error) {
    console.error("Unexpected error fetching tag by slug:", error);
    return null;
  }
}

// Function to get all authors
export async function getAuthors() {
  try {
    const { data, error } = await supabase
      .from('blog_authors')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error("Error fetching authors:", error);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Unexpected error fetching authors:", error);
    return [];
  }
}

// Function to get author by id
export async function getAuthorById(id: string) {
  try {
    const { data, error } = await supabase
      .from('blog_authors')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error("Error fetching author:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error fetching author:", error);
    return null;
  }
}

// Helper function to create a new tag
export async function createTag(name: string): Promise<Tag> {
  try {
    const { data, error } = await supabase
      .from('blog_tags')
      .insert({ name, slug: slugify(name) })
      .select('*')
      .single();

    if (error) throw error;
    
    return data as Tag;
  } catch (error) {
    console.error('Error creating tag:', error);
    throw error;
  }
}

// Aliases for compatibility with existing code
export const getBlogPosts = getPosts;
export const getBlogPostBySlug = getPostBySlug;
export const getBlogPostById = getPostById;
export const createBlogPost = createPost;
export const updateBlogPost = updatePost;
export const deleteBlogPost = deletePost;
