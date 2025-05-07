import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import RichTextEditor from './RichTextEditor';
import { PortfolioItem } from '@/types/portfolio';
import { getServiceCategories } from '@/services/portfolioService';
import { supabase } from '@/integrations/supabase/client';
import { v4 as uuidv4 } from 'uuid';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  client: z.string().min(2, 'Client name must be at least 2 characters'),
  portfolio_category: z.string().min(1, 'Category is required'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  challenge: z.string().min(20, 'Challenge section must be at least 20 characters'),
  solution: z.string().min(20, 'Solution section must be at least 20 characters'),
  results: z.string().min(20, 'Results section must be at least 20 characters'),
  featured: z.boolean(),
  date: z.string()
});

type FormValues = z.infer<typeof formSchema>;

interface PortfolioItemFormProps {
  item?: PortfolioItem;
  onSave: (item: PortfolioItem) => void;
  isSubmitting?: boolean;
}

const PortfolioItemForm = ({ item, onSave, isSubmitting = false }: PortfolioItemFormProps) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string>(item?.image_url || '');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [mainImageError, setMainImageError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: item ? {
      title: item.title,
      slug: item.slug,
      client: item.client,
      portfolio_category: item.portfolio_category,
      description: item.description,
      challenge: item.challenge,
      solution: item.solution,
      results: item.results,
      featured: item.featured,
      date: item.date
    } : {
      title: '',
      slug: '',
      client: '',
      portfolio_category: '',
      description: '',
      challenge: '',
      solution: '',
      results: '',
      featured: false,
      date: new Date().toISOString().split('T')[0]
    }
  });
  
  useEffect(() => {
    async function fetchCategories() {
      try {
        const cats = await getServiceCategories();
        // Map to only id and name
        setCategories(
          cats.map((cat: any) => ({ id: cat.id, name: cat.name }))
        );
      } catch (e) {
        setCategories([]);
      }
    }
    fetchCategories();
  }, []);
  
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    form.setValue('title', title);
    
    const currentSlug = form.getValues('slug');
    const previousTitle = item?.title || '';
    const previousSlug = generateSlug(previousTitle);
    
    if (!currentSlug || currentSlug === previousSlug) {
      form.setValue('slug', generateSlug(title));
    }
  };

  const handleImageUpload = async (files: FileList | null) => {
    if (!files) return;
    setUploadError(null);
    const uploaded: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage.from('portfolio').upload(fileName, file);
      if (error) {
        setUploadError(`Upload failed for ${file.name}: ${error.message}`);
        console.error('Upload error:', error, 'File:', fileName);
        continue;
      }
      if (data) {
        const { data: urlData, error: urlError } = supabase.storage.from('portfolio').getPublicUrl(fileName);
        if (urlError) {
          setUploadError(`URL error for ${file.name}: ${urlError.message}`);
          console.error('Public URL error:', urlError, 'File:', fileName);
        } else if (urlData.publicUrl) {
          uploaded.push(urlData.publicUrl);
          console.log('Uploaded file:', fileName, 'Public URL:', urlData.publicUrl);
        }
      }
    }
    setUploadedImages(prev => [...prev, ...uploaded]);
    if (!mainImage && uploaded.length > 0) setMainImage(uploaded[0]);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    await handleImageUpload(e.dataTransfer.files);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };
  
  const onSubmit = (values: FormValues) => {
    setMainImageError(null);
    // Check for main image selection
    if (!mainImage) {
      setMainImageError('You must select a main image before submitting.');
      return;
    }
    
    console.log('Portfolio form submit values:', values);
    
    const filteredGallery = uploadedImages.filter(url => url !== mainImage);
    
    let portfolioItem: Partial<PortfolioItem>;
    if (item?.id) {
      portfolioItem = {
        id: item.id,
        title: values.title,
        slug: values.slug,
        client: values.client,
        portfolio_category: values.portfolio_category,
        description: values.description,
        challenge: values.challenge,
        solution: values.solution,
        results: values.results,
        image_url: mainImage,
        gallery: filteredGallery,
        featured: values.featured,
        date: values.date
      };
    } else {
      portfolioItem = {
        title: values.title,
        slug: values.slug,
        client: values.client,
        portfolio_category: values.portfolio_category,
        description: values.description,
        challenge: values.challenge,
        solution: values.solution,
        results: values.results,
        image_url: mainImage,
        gallery: filteredGallery,
        featured: values.featured,
        date: values.date
      };
    }
    
    console.log('Portfolio item sent to onSave:', portfolioItem);
    
    onSave(portfolioItem as PortfolioItem);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter project title" 
                  {...field} 
                  onChange={handleTitleChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter project slug" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="client"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter client name" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="portfolio_category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter a brief overview of the project" 
                  {...field} 
                  rows={3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="challenge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Challenge</FormLabel>
              <FormControl>
                <RichTextEditor 
                  value={field.value} 
                  onChange={field.onChange} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="solution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Solution</FormLabel>
              <FormControl>
                <RichTextEditor 
                  value={field.value} 
                  onChange={field.onChange} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="results"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Results</FormLabel>
              <FormControl>
                <RichTextEditor 
                  value={field.value} 
                  onChange={field.onChange} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <FormLabel>Project Images</FormLabel>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition mb-4 relative"
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            onClick={handleBrowseClick}
          >
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={e => handleImageUpload(e.target.files)}
            />
            <span className="text-gray-500 text-sm mb-2">Drag & drop images here, or <span className="text-blue-600 underline">browse</span></span>
            <span className="text-xs text-gray-400">(You can upload multiple images. Click an image below to set as main.)</span>
          </div>
          {uploadError && (
            <div className="text-red-600 text-sm mt-2">{uploadError}</div>
          )}
          {mainImageError && (
            <div className="text-red-600 text-sm mt-2">{mainImageError}</div>
          )}
          {uploadedImages.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-2">
              {uploadedImages.map((url, idx) => (
                <div key={url} className="relative group">
                  <img
                    src={url}
                    alt={`Uploaded ${idx}`}
                    className={`w-28 h-28 object-cover rounded-lg border-2 transition cursor-pointer ${mainImage === url ? 'border-blue-600 shadow-lg scale-105' : 'border-gray-300 group-hover:border-blue-400'}`}
                    onClick={() => setMainImage(url)}
                  />
                  {mainImage === url && (
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded shadow">Main</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Completion Date</FormLabel>
                <FormControl>
                  <Input 
                    type="date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Featured Project</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex justify-end gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/dashboard/portfolio')}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {item ? 'Updating...' : 'Creating...'}
              </>
            ) : (
              <>{item ? 'Update' : 'Create'} Project</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PortfolioItemForm;
