
import { useState, useEffect } from 'react';
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
import { getServiceCategories } from '@/data/portfolioData';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  client: z.string().min(2, 'Client name must be at least 2 characters'),
  category: z.string().min(2, 'Category must be at least 2 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  challenge: z.string().min(20, 'Challenge section must be at least 20 characters'),
  solution: z.string().min(20, 'Solution section must be at least 20 characters'),
  results: z.string().min(20, 'Results section must be at least 20 characters'),
  image_url: z.string().url('Must be a valid URL'),
  gallery: z.array(z.string().url('Must be a valid URL')),
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
  const [galleryUrls, setGalleryUrls] = useState<string[]>(item?.gallery || ['']);
  const [categories, setCategories] = useState<Array<{id: string, name: string}>>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: item ? {
      title: item.title,
      slug: item.slug,
      client: item.client,
      category: item.category,
      description: item.description,
      challenge: item.challenge,
      solution: item.solution,
      results: item.results,
      image_url: item.image_url,
      gallery: item.gallery,
      featured: item.featured,
      date: item.date
    } : {
      title: '',
      slug: '',
      client: '',
      category: '',
      description: '',
      challenge: '',
      solution: '',
      results: '',
      image_url: '',
      gallery: [''],
      featured: false,
      date: new Date().toISOString().split('T')[0]
    }
  });
  
  // Fetch categories when component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoadingCategories(true);
        const serviceCategories = await getServiceCategories();
        setCategories(serviceCategories);
      } catch (error) {
        console.error('Error fetching service categories:', error);
      } finally {
        setIsLoadingCategories(false);
      }
    };
    
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
    
    // Only auto-generate slug if it's empty or matches the previous auto-generated slug
    const currentSlug = form.getValues('slug');
    const previousTitle = item?.title || '';
    const previousSlug = generateSlug(previousTitle);
    
    if (!currentSlug || currentSlug === previousSlug) {
      form.setValue('slug', generateSlug(title));
    }
  };
  
  const handleAddGalleryImage = () => {
    setGalleryUrls(prev => [...prev, '']);
    form.setValue('gallery', [...galleryUrls, '']);
  };
  
  const handleRemoveGalleryImage = (index: number) => {
    setGalleryUrls(prev => prev.filter((_, i) => i !== index));
    form.setValue(
      'gallery', 
      galleryUrls.filter((_, i) => i !== index)
    );
  };
  
  const handleGalleryImageChange = (index: number, value: string) => {
    const newGallery = [...galleryUrls];
    newGallery[index] = value;
    setGalleryUrls(newGallery);
    form.setValue('gallery', newGallery);
  };
  
  const onSubmit = (values: FormValues) => {
    // Filter out empty gallery URLs
    const filteredGallery = values.gallery.filter(url => url.trim() !== '');
    
    const portfolioItem: PortfolioItem = {
      id: item?.id || String(Date.now()),
      title: values.title,
      slug: values.slug,
      client: values.client,
      category: values.category,
      description: values.description,
      challenge: values.challenge,
      solution: values.solution,
      results: values.results,
      image_url: values.image_url,
      gallery: filteredGallery,
      featured: values.featured,
      date: values.date
    };
    
    onSave(portfolioItem);
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
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  {isLoadingCategories ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Loading categories...</span>
                    </div>
                  ) : categories.length > 0 ? (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.name}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input 
                      placeholder="e.g., Web Design, Mobile App" 
                      {...field} 
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main Image URL</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter the URL of the main image" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
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
        
        <FormField
          control={form.control}
          name="gallery"
          render={() => (
            <FormItem>
              <FormLabel>Gallery Images</FormLabel>
              <div className="space-y-2">
                {galleryUrls.map((url, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      placeholder="Image URL"
                      value={url}
                      onChange={(e) => handleGalleryImageChange(index, e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleRemoveGalleryImage(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleAddGalleryImage}
                >
                  Add Image
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
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
