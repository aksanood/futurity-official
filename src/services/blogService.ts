
import { supabase } from '@/integrations/supabase/client';
import { BlogPost, Author, Category, Tag } from '@/types/blog';

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

  // Get tags for each post
  const postsWithTags = await Promise.all(
    (data || []).map(async (post) => {
      const tags = await getTagsByPostId(post.id);
      return { ...post, tags };
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

  // Get tags for the post
  if (data) {
    const tags = await getTagsByPostId(data.id);
    return { ...data, tags };
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

  // Get tags for the post
  if (data) {
    const tags = await getTagsByPostId(data.id);
    return { ...data, tags };
  }

  return null;
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>, tagIds: string[]) {
  // Start a transaction
  const { data, error } = await supabase
    .from('blog_posts')
    .insert(post)
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
  // Update post
  const { data, error } = await supabase
    .from('blog_posts')
    .update(post)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }

  // Delete existing tag relations
  const { error: deleteError } = await supabase
    .from('blog_posts_tags')
    .delete()
    .eq('post_id', id);

  if (deleteError) {
    console.error('Error deleting existing tags:', deleteError);
    throw deleteError;
  }

  // Add new tag relations
  if (tagIds.length > 0) {
    const tagRelations = tagIds.map(tagId => ({ post_id: id, tag_id: tagId }));
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

  return data || [];
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

  return data;
}

export async function createAuthor(author: Omit<Author, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('blog_authors')
    .insert(author)
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
