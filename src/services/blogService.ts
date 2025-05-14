import { supabase } from '@/integrations/supabase/client';
import { BlogPost, Category, Tag, Author } from '@/types/blog';

// Helper function to parse author's social data
const parseSocialData = (socialData: any): Author['social'] => {
  if (!socialData) return {};
  
  try {
    if (typeof socialData === 'string') {
      return JSON.parse(socialData);
    }
    return socialData;
  } catch (e) {
    console.error('Error parsing social data:', e);
    return {};
  }
};

// Helper function to convert database author to application Author type
const convertDbAuthorToAppAuthor = (dbAuthor: any): Author => {
  return {
    id: dbAuthor.id,
    name: dbAuthor.name,
    avatar: dbAuthor.avatar || '',
    bio: dbAuthor.bio || '',
    role: dbAuthor.role || '',
    social: parseSocialData(dbAuthor.social),
    created_at: dbAuthor.created_at,
    updated_at: dbAuthor.updated_at
  };
};

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        author:author_id (
          id,
          name,
          avatar,
          bio,
          role,
          social,
          created_at,
          updated_at
        ),
        category:category_id (
          id,
          name,
          slug
        )
      `)
      .order('published_date', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }

    // Convert authors to the correct type
    const posts: BlogPost[] = data.map((post: any) => ({
      ...post,
      author: post.author ? convertDbAuthorToAppAuthor(post.author) : null,
      tags: [] // You might need to fetch tags separately
    }));

    return posts;
  } catch (error) {
    console.error('Error in getPosts:', error);
    throw error;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        author:author_id (
          id,
          name,
          avatar,
          bio,
          role,
          social,
          created_at,
          updated_at
        ),
        category:category_id (
          id,
          name,
          slug
        ),
        blog_posts_tags (
          tag_id
        ),
        blog_tags (
          id,
          name,
          slug
        )
      `)
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching blog post by slug:', error);
      return null;
    }

    if (!data) {
      return null;
    }

   // Convert authors to the correct type
    const post: BlogPost = {
      ...data,
      author: data.author ? convertDbAuthorToAppAuthor(data.author) : null,
      tags: data.blog_tags || []
    };

    return post;
  } catch (error) {
    console.error('Error in getPostBySlug:', error);
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*');

    if (error) {
      console.error('Error fetching blog categories:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getCategories:', error);
    return [];
  }
}

export async function getTags(): Promise<Tag[]> {
  try {
    const { data, error } = await supabase
      .from('blog_tags')
      .select('*');

    if (error) {
      console.error('Error fetching blog tags:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getTags:', error);
    return [];
  }
}

export async function createPost(post: BlogPost): Promise<void> {
  try {
    // Extract tags for separate handling
    const tags = post.tags || [];
    
    // Create the blog post
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        featured_image: post.featured_image,
        author_id: post.author_id,
        category_id: post.category_id,
        published_date: post.published_date,
        read_time: post.read_time
      })
      .select()
      .single();
    
    if (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }
    
    // Handle tags if there are any
    if (tags.length > 0) {
      // Create associations between post and tags
      const postTagAssociations = tags.map(tag => ({
        post_id: data.id,
        tag_id: tag.id
      }));
      
      const { error: tagsError } = await supabase
        .from('blog_posts_tags')
        .insert(postTagAssociations);
      
      if (tagsError) {
        console.error('Error associating tags with post:', tagsError);
        // Consider whether to throw here or just log
      }
    }
  } catch (error) {
    console.error('Error in createPost:', error);
    throw error;
  }
}

export async function updatePost(postId: string, post: BlogPost): Promise<void> {
  try {
    // Update the main post data
    const { error } = await supabase
      .from('blog_posts')
      .update({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        featured_image: post.featured_image,
        author_id: post.author_id,
        category_id: post.category_id,
        published_date: post.published_date,
        read_time: post.read_time,
        updated_at: new Date().toISOString()
      })
      .eq('id', postId);
    
    if (error) {
      console.error('Error updating blog post:', error);
      throw error;
    }
    
    // Handle tags - first delete existing associations
    const { error: deleteError } = await supabase
      .from('blog_posts_tags')
      .delete()
      .eq('post_id', postId);
    
    if (deleteError) {
      console.error('Error removing existing tag associations:', deleteError);
      // Consider whether to throw here or just log
    }
    
    // Re-create tag associations if there are any
    if (post.tags && post.tags.length > 0) {
      const postTagAssociations = post.tags.map(tag => ({
        post_id: postId,
        tag_id: tag.id
      }));
      
      const { error: insertError } = await supabase
        .from('blog_posts_tags')
        .insert(postTagAssociations);
      
      if (insertError) {
        console.error('Error creating new tag associations:', insertError);
        // Consider whether to throw here or just log
      }
    }
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
}

export async function deletePost(postId: string): Promise<void> {
  try {
    // Delete tag relationships first
    const { error: deleteTagsError } = await supabase
      .from('blog_posts_tags')
      .delete()
      .eq('post_id', postId);

    if (deleteTagsError) {
      console.error('Error deleting blog post tags:', deleteTagsError);
      throw deleteTagsError;
    }

    // Then delete the post
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', postId);

    if (error) {
      console.error('Error deleting blog post:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in deletePost:', error);
    throw error;
  }
}

export async function getAuthors(): Promise<Author[]> {
  try {
    const { data, error } = await supabase
      .from('blog_authors')
      .select('*');

    if (error) {
      console.error('Error fetching blog authors:', error);
      throw error;
    }

    return data.map(convertDbAuthorToAppAuthor) || [];
  } catch (error) {
    console.error('Error in getAuthors:', error);
    return [];
  }
}

export async function getAuthorById(id: string): Promise<Author | null> {
  try {
    const { data, error } = await supabase
      .from('blog_authors')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching blog author by ID:', error);
      return null;
    }

    if (!data) {
      return null;
    }

    return convertDbAuthorToAppAuthor(data);
  } catch (error) {
    console.error('Error in getAuthorById:', error);
    return null;
  }
}

export async function createAuthor(author: Omit<Author, "id" | "created_at" | "updated_at">) {
  const { data, error } = await supabase
    .from('blog_authors')
    .insert({
      name: author.name,
      avatar: author.avatar || '',
      bio: author.bio || '',
      role: author.role || '',
      social: author.social || {}
    })
    .select();

  if (error) {
    console.error('Error creating author:', error);
    throw error;
  }

  return data[0];
}

export async function updateAuthor(id: string, author: Partial<Author>) {
  const updateData: any = {};
  if (author.name !== undefined) updateData.name = author.name;
  if (author.avatar !== undefined) updateData.avatar = author.avatar;
  if (author.bio !== undefined) updateData.bio = author.bio;
  if (author.role !== undefined) updateData.role = author.role;
  if (author.social !== undefined) updateData.social = author.social;

  const { data, error } = await supabase
    .from('blog_authors')
    .update(updateData)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating author:', error);
    throw error;
  }

  return data[0];
}

export async function deleteAuthor(authorId: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('blog_authors')
      .delete()
      .eq('id', authorId);

    if (error) {
      console.error('Error deleting blog author:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in deleteAuthor:', error);
    throw error;
  }
}

// Add the missing createTag function
export async function createTag(tag: { name: string; slug: string }): Promise<Tag> {
  try {
    const { data, error } = await supabase
      .from('blog_tags')
      .insert({
        name: tag.name,
        slug: tag.slug
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating tag:', error);
      throw error;
    }

    return data as Tag;
  } catch (error) {
    console.error('Error in createTag:', error);
    throw error;
  }
}

// Add aliased functions to match the imported names in other files
export const getBlogPosts = getPosts;
export const getBlogPostBySlug = getPostBySlug;
export const getBlogPostById = getPostBySlug; // Using getPostBySlug with id parameter
export const createBlogPost = createPost;
export const updateBlogPost = updatePost;
export const deleteBlogPost = deletePost;
