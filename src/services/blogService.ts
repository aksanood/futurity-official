
import { supabase } from '@/integrations/supabase/client';
import { BlogPost, Category, Tag, Author } from '@/types/blog';
import { Json } from '@/integrations/supabase/types';

// Helper function to parse author's social data
const parseSocialData = (socialData: any): Author['social'] => {
  if (!socialData) return undefined;
  
  // If it's already an object with the right structure, return it
  if (typeof socialData === 'object' && !Array.isArray(socialData)) {
    return {
      twitter: socialData.twitter as string | undefined,
      linkedin: socialData.linkedin as string | undefined,
      github: socialData.github as string | undefined
    };
  }
  
  // If it's a JSON string, try to parse it
  if (typeof socialData === 'string') {
    try {
      const parsed = JSON.parse(socialData);
      return {
        twitter: parsed.twitter,
        linkedin: parsed.linkedin,
        github: parsed.github
      };
    } catch (e) {
      console.error('Error parsing social data:', e);
      return undefined;
    }
  }
  
  return undefined;
};

// Helper function to convert database author to application Author type
const convertDbAuthorToAppAuthor = (dbAuthor: any): Author => {
  return {
    id: dbAuthor.id,
    name: dbAuthor.name,
    avatar: dbAuthor.avatar || '',
    bio: dbAuthor.bio || '',
    role: dbAuthor.role || '',
    social: parseSocialData(dbAuthor.social)
  };
};

// Helper function to clean UUID fields
function cleanPostUUIDFields(post: any) {
  const cleaned = { ...post };
  // Set to null if not a non-empty string matching UUID format
  const isValidUUID = (v: any) =>
    typeof v === 'string' && /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(v);

  if (!isValidUUID(cleaned.author_id)) cleaned.author_id = null;
  if (!isValidUUID(cleaned.category_id)) cleaned.category_id = null;
  return cleaned;
}

// Blog Posts
export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:author_id(id, name, avatar, bio, role, social),
      category:category_id(id, name, slug)
    `)
    .order('published_date', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }

  // Process authors correctly and get tags for each post
  const postsWithTags = await Promise.all(
    (data || []).map(async (post) => {
      const tags = await getTagsByPostId(post.id);
      
      // Convert author data to match our application's Author type
      const processedAuthor = post.author ? convertDbAuthorToAppAuthor(post.author) : undefined;
      
      return { 
        ...post, 
        tags,
        author: processedAuthor
      } as BlogPost;
    })
  );

  return postsWithTags;
}

export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:author_id(id, name, avatar, bio, role, social),
      category:category_id(id, name, slug)
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }

  // Get tags for the post and process author data
  if (data) {
    const tags = await getTagsByPostId(data.id);
    
    // Convert author data to match our application's Author type
    const processedAuthor = data.author ? convertDbAuthorToAppAuthor(data.author) : undefined;
    
    return { 
      ...data, 
      tags,
      author: processedAuthor
    } as BlogPost;
  }

  return null;
}

export async function getBlogPostById(id: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:author_id(id, name, avatar, bio, role, social),
      category:category_id(id, name, slug)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching blog post by id:', error);
    return null;
  }

  // Get tags for the post and process author data
  if (data) {
    const tags = await getTagsByPostId(data.id);
    
    // Convert author data to match our application's Author type
    const processedAuthor = data.author ? convertDbAuthorToAppAuthor(data.author) : undefined;
    
    return { 
      ...data, 
      tags,
      author: processedAuthor
    } as BlogPost;
  }

  return null;
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>, tagIds: string[]) {
  // Remove 'tags' property if present
  const { tags, ...postData } = post;
  // Clean UUID fields
  const cleanedPostData = cleanPostUUIDFields(postData);
  console.log('createBlogPost cleanedPostData:', cleanedPostData); // debug
  // Start a transaction
  const { data, error } = await supabase
    .from('blog_posts')
    .insert(cleanedPostData)
    .select();

  if (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }

  const postId = data[0].id;

  // Add tags
  if (tagIds.length > 0) {
    const tagRelations = tagIds.map(tagId => ({ post_id: postId, tag_id: tagId }));
    const { error: tagsError } = await supabase
      .from('blog_posts_tags')
      .insert(tagRelations);

    if (tagsError) {
      console.error('Error adding tags to post:', tagsError);
      throw tagsError;
    }
  }

  return data[0];
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>, tagIds: string[]) {
  // Remove 'tags' property if present
  const { tags, ...postData } = post;
  // Clean UUID fields
  const cleanedPostData = cleanPostUUIDFields(postData);
  // Update post
  const { data, error } = await supabase
    .from('blog_posts')
    .update(cleanedPostData)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }

  // Delete existing tag relations (do NOT use .select())
  const { error: deleteError } = await supabase
    .from('blog_posts_tags')
    .delete()
    .eq('post_id', id);

  if (deleteError) {
    console.error('Error deleting existing tags:', deleteError);
    throw deleteError;
  }

  // Remove duplicate tagIds
  const uniqueTagIds = Array.from(new Set(tagIds));

  // Add new tag relations
  if (uniqueTagIds.length > 0) {
    const tagRelations = uniqueTagIds.map(tagId => ({ post_id: id, tag_id: tagId }));
    
    // Fix for array insertion
    const { error: tagsError } = await supabase
      .from('blog_posts_tags')
      .insert(tagRelations);

    if (tagsError) {
      console.error('Error adding tags to post:', tagsError);
      throw tagsError;
    }
  }

  return data[0];
}

export async function deleteBlogPost(id: string) {
  // No need to delete from blog_posts_tags due to CASCADE constraint
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }

  return true;
}

// Authors
export async function getAuthors() {
  const { data, error } = await supabase
    .from('blog_authors')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }

  // Convert all authors to match our application's Author type
  const processedAuthors = (data || []).map(author => convertDbAuthorToAppAuthor(author));
  
  return processedAuthors;
}

export async function getAuthorById(id: string) {
  const { data, error } = await supabase
    .from('blog_authors')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching author:', error);
    return null;
  }

  return data ? convertDbAuthorToAppAuthor(data) : null;
}

export async function createAuthor(author: Omit<Author, 'id' | 'created_at' | 'updated_at'>) {
  // Fix the insertion by explicitly setting the fields
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
  const { data, error } = await supabase
    .from('blog_authors')
    .update(author)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating author:', error);
    throw error;
  }

  return data[0];
}

// Categories
export async function getCategories() {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }

  return data || [];
}

export async function createCategory(category: Omit<Category, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('blog_categories')
    .insert(category)
    .select();

  if (error) {
    console.error('Error creating category:', error);
    throw error;
  }

  return data[0];
}

// Tags
export async function getTags() {
  const { data, error } = await supabase
    .from('blog_tags')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }

  return data || [];
}

export async function getTagsByPostId(postId: string) {
  const { data, error } = await supabase
    .from('blog_posts_tags')
    .select('tag_id, blog_tags!inner(id, name, slug)')
    .eq('post_id', postId);

  if (error) {
    console.error('Error fetching tags for post:', error);
    return [];
  }

  return data.map(item => item.blog_tags);
}

export async function createTag(tag: Omit<Tag, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('blog_tags')
    .insert(tag)
    .select();

  if (error) {
    console.error('Error creating tag:', error);
    throw error;
  }

  return data[0];
}
