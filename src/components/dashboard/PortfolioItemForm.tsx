import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import RichTextEditor from '@/components/dashboard/RichTextEditor';
import { X, Loader2, FileUp } from 'lucide-react';
import { getPortfolioItemById, createPortfolioItem, updatePortfolioItem } from '@/services/portfolioService';
import { PortfolioItem } from '@/types/portfolio';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { getServiceCategories } from '@/data/portfolioData';

interface PortfolioItemFormProps {
  item?: PortfolioItem; // Make item optional
  isEditMode?: boolean;
}

const PortfolioItemForm: React.FC<PortfolioItemFormProps> = ({ item, isEditMode = false }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [client, setClient] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [challenge, setChallenge] = useState('');
  const [solution, setSolution] = useState('');
  const [results, setResults] = useState('');
  // Keep a form field for a rich text editor, but we'll map it to description
  const [richText, setRichText] = useState('');
  const [featured, setFeatured] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [portfolioItem, setPortfolioItem] = useState<PortfolioItem | null>(null);
  const [categories, setCategories] = useState<Array<{id: string, name: string}>>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const data = await getServiceCategories();
        setCategories(data);
      } catch (error) {
        setCategories([]);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (isEditMode && id) {
      const fetchPortfolioItem = async () => {
        const fetchedItem = await getPortfolioItemById(id);
        if (fetchedItem) {
          setPortfolioItem(fetchedItem);
          setTitle(fetchedItem.title);
          setSlug(fetchedItem.slug);
          setClient(fetchedItem.client);
          setDate(fetchedItem.date);
          setCategory(fetchedItem.portfolio_category);
          setDescription(fetchedItem.description);
          setChallenge(fetchedItem.challenge);
          setSolution(fetchedItem.solution);
          setResults(fetchedItem.results);
          // Use description for the rich text editor initially
          setRichText(fetchedItem.description);
          setFeatured(fetchedItem.featured);
          setImageUrl(fetchedItem.image_url);
        } else {
          toast({
            title: 'Error',
            description: 'Failed to load portfolio item.',
            variant: 'destructive',
          });
        }
      };
      fetchPortfolioItem();
    } else if (item) {
      // If item is passed as prop, use it to populate form
      setTitle(item.title);
      setSlug(item.slug);
      setClient(item.client);
      setDate(item.date);
      setCategory(item.portfolio_category);
      setDescription(item.description);
      setChallenge(item.challenge);
      setSolution(item.solution);
      setResults(item.results);
      // Use description for the rich text editor initially
      setRichText(item.description);
      setFeatured(item.featured);
      setImageUrl(item.image_url);
    }
  }, [isEditMode, id, toast, item]);

  const uploadImage = async (file: File) => {
    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `portfolio/${fileName}`;

      const { data, error } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (error) {
        console.error('Error uploading image:', error);
        toast({
          title: 'Error',
          description: 'Failed to upload image.',
          variant: 'destructive',
        });
        return null;
      }

      const publicUrl = supabase.storage
        .from('images')
        .getPublicUrl(data.path).data.publicUrl;
      return publicUrl;
    } catch (error) {
      console.error('Unexpected error uploading image:', error);
      toast({
        title: 'Error',
        description: 'Unexpected error uploading image.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const uploadedUrl = await uploadImage(file);
    if (uploadedUrl) {
      setImageUrl(uploadedUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const itemData = {
      title,
      slug,
      client,
      date,
      portfolio_category: category,
      description,
      challenge,
      solution,
      results,
      featured,
      image_url: imageUrl,
      gallery: [] as string[], // Empty gallery array to match type
    };

    try {
      if (isEditMode && portfolioItem) {
        await updatePortfolioItem(portfolioItem.id, itemData);
        toast({
          title: 'Project updated',
          description: 'The portfolio project has been updated successfully.',
        });
      } else {
        await createPortfolioItem(itemData);
        toast({
          title: 'Project created',
          description: 'The portfolio project has been created successfully.',
        });
      }
      navigate('/dashboard/portfolio');
    } catch (error) {
      console.error('Error saving portfolio item:', error);
      toast({
        title: 'Error',
        description: 'Failed to save portfolio item. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="slug">Slug</Label>
        <Input
          type="text"
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="client">Client</Label>
        <Input
          type="text"
          id="client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="challenge">Challenge</Label>
        <Textarea
          id="challenge"
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="solution">Solution</Label>
        <Textarea
          id="solution"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="results">Results</Label>
        <Textarea
          id="results"
          value={results}
          onChange={(e) => setResults(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="richText">Content (Rich Text)</Label>
        <RichTextEditor value={richText} onChange={setRichText} />
      </div>
      <div>
        <Label>Featured Image</Label>
        <div className="flex items-center space-x-4">
          <AspectRatio ratio={16 / 9} className="w-64 h-36 rounded-md overflow-hidden border shadow">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Featured"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
                No Image
              </div>
            )}
          </AspectRatio>
          <div>
            <Input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Label htmlFor="image" className="bg-secondary hover:bg-secondary-foreground text-secondary-foreground hover:text-primary-foreground rounded-md px-4 py-2 cursor-pointer">
              {uploading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Uploading...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <FileUp className="mr-2 h-4 w-4" />
                  <span>Upload</span>
                </div>
              )}
            </Label>
            {imageUrl && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setImageUrl('');
                  setImageFile(null);
                }}
                className="mt-2"
              >
                <X className="mr-2 h-4 w-4" />
                Remove
              </Button>
            )}
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="featured">Featured</Label>
        <Switch
          id="featured"
          checked={featured}
          onCheckedChange={(checked) => setFeatured(checked)}
        />
      </div>
      <Button type="submit">{isEditMode ? 'Update Project' : 'Create Project'}</Button>
    </form>
  );
};

export default PortfolioItemForm;
