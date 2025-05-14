import { supabase } from '@/lib/supabaseClient';
import { Post, Category, Tag } from '@/types/blog';
import { v4 as uuidv4 } from 'uuid';
import { slugify } from '@/lib/utils';

// Function to get all posts
export async function getPosts(): Promise<Post[]> {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        category:categories (
          name,
          slug
        ),
        tags:post_tags (
          tag:tags (
            name,
            slug
          )
        ),
        author:users (
          id,
          name,
          avatar_url
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    // Transform the data to match the Post type
    const posts: Post[] = data.map((post: any) => ({
      id: post.id,
      created_at: post.created_at,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      cover_image: post.cover_image,
      category: post.category ? {
        name: post.category.name,
        slug: post.category.slug
      } : null,
      tags: post.tags ? post.tags.map((post_tag: any) => ({
        name: post_tag.tag.name,
        slug: post_tag.tag.slug
      })) : [],
	  author: post.author ? {
		id: post.author.id,
		name: post.author.name,
		avatar_url: post.author.avatar_url
	  } : null
    }));

    return posts;
  } catch (error) {
    console.error("Unexpected error fetching posts:", error);
    return [];
  }
}

// Function to get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        category:categories (
          name,
          slug
        ),
        tags:post_tags (
          tag:tags (
            name,
            slug
          )
        ),
		author:users (
			id,
			name,
			avatar_url
		  )
      `)
      .eq('slug', slug)
      .single();

    if (error) {
      console.error("Error fetching post by slug:", error);
      return null;
    }

    // Transform the data to match the Post type
    const post: Post = {
      id: data.id,
      created_at: data.created_at,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      cover_image: data.cover_image,
      category: data.category ? {
        name: data.category.name,
        slug: data.category.slug
      } : null,
      tags: data.tags ? data.tags.map((post_tag: any) => ({
        name: post_tag.tag.name,
        slug: post_tag.tag.slug
      })) : [],
	  author: data.author ? {
		id: data.author.id,
		name: data.author.name,
		avatar_url: data.author.avatar_url
	  } : null
    };

    return post;
  } catch (error) {
    console.error("Unexpected error fetching post by slug:", error);
    return null;
  }
}

// Function to get a single post by ID
export async function getPostById(id: string): Promise<Post | null> {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        category:categories (
          name,
          slug
        ),
        tags:post_tags (
          tag:tags (
            name,
            slug
          )
        ),
		author:users (
			id,
			name,
			avatar_url
		  )
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error("Error fetching post by id:", error);
      return null;
    }

    // Transform the data to match the Post type
    const post: Post = {
      id: data.id,
      created_at: data.created_at,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      cover_image: data.cover_image,
      category: data.category ? {
        name: data.category.name,
        slug: data.category.slug
      } : null,
      tags: data.tags ? data.tags.map((post_tag: any) => ({
        name: post_tag.tag.name,
        slug: post_tag.tag.slug
      })) : [],
	  author: data.author ? {
		id: data.author.id,
		name: data.author.name,
		avatar_url: data.author.avatar_url
	  } : null
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
  cover_image: string;
  category_id?: string | null;
  tag_ids?: string[];
  author_id: string;
}

// Function to create a new post
export async function createPost(post: CreatePostParams): Promise<Post | null> {
  try {
    const newPostId = uuidv4();
    const slug = slugify(post.title);

    const { data: postData, error: postError } = await supabase
      .from('posts')
      .insert([
        {
          id: newPostId,
          created_at: new Date().toISOString(),
          title: post.title,
          slug: slug,
          excerpt: post.excerpt,
          content: post.content,
          cover_image: post.cover_image,
		  category_id: post.category_id || null,
		  author_id: post.author_id
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
        .from('post_tags')
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
  cover_image?: string;
  category_id?: string | null;
  tag_ids?: string[];
}

// Function to update a post
export async function updatePost(post: UpdatePostParams): Promise<Post | null> {
  try {
    const { id, title, excerpt, content, cover_image, category_id, tag_ids } = post;
    const slug = title ? slugify(title) : undefined;

    const { data: postData, error: postError } = await supabase
      .from('posts')
      .update({
        title: title,
        slug: slug,
        excerpt: excerpt,
        content: content,
        cover_image: cover_image,
        category_id: category_id || null
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
      .from('post_tags')
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
        .from('post_tags')
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
      .from('post_tags')
      .delete()
      .eq('post_id', id);

    if (deletePostTagsError) {
      console.error("Error deleting existing post_tags:", deletePostTagsError);
      return false;
    }

    const { error: postError } = await supabase
      .from('posts')
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
      .from('categories')
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
      .from('categories')
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
      .from('tags')
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
      .from('tags')
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

// Aliases for compatibility with existing code
export const getBlogPosts = getPosts;
export const getBlogPostBySlug = getPostBySlug;
export const getBlogPostById = getPostById;
export const createBlogPost = createPost;
export const updateBlogPost = updatePost;
export const deleteBlogPost = deletePost;
export const createTag = createNewTag;

// Helper function to create a new tag
export async function createNewTag(name: string): Promise<Tag> {
  try {
    const { data, error } = await supabase
      .from('tags')
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
