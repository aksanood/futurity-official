import { useLocation, useNavigate } from 'react-router-dom';
import { createPortfolioItem, getServiceCategories } from '@/services/portfolioService';
import { supabase } from '@/integrations/supabase/client';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useState, useEffect } from 'react';

const CsvPortfolioReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isValidDate = (dateStr: string) => /^\d{4}-\d{2}-\d{2}$/.test(dateStr?.trim());

  const [items, setItems] = useState(() => {
    const parsed = (location.state?.items || []);
    console.log('Review page items:', parsed); // Debug log
    return parsed.map((item: any) => ({
      ...item,
      date: (item.date || '').trim(),
      uploadedImages: [],
      mainImage: '',
      uploadError: null,
      mainImageError: null,
      isSubmitting: false,
      dateError: !isValidDate((item.date || '').trim()),
    }));
  });
  const [submittingAll, setSubmittingAll] = useState(false);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    getServiceCategories().then(setCategories);
  }, []);

  // Image upload logic (reused from PortfolioItemForm)
  const handleImageUpload = async (files: FileList | null, idx: number) => {
    if (!files) return;
    const uploaded: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage.from('portfolio').upload(fileName, file);
      if (!error && data) {
        const { data: urlData } = supabase.storage.from('portfolio').getPublicUrl(fileName);
        if (urlData.publicUrl) uploaded.push(urlData.publicUrl);
      }
    }
    setItems(prev => prev.map((item, i) => i === idx ? {
      ...item,
      uploadedImages: [...item.uploadedImages, ...uploaded],
      mainImage: item.mainImage || uploaded[0] || '',
    } : item));
  };

  const handleSetMainImage = (idx: number, url: string) => {
    setItems(prev => prev.map((item, i) => i === idx ? { ...item, mainImage: url } : item));
  };

  const handleSubmitAll = async () => {
    setSubmittingAll(true);
    let successCount = 0;
    let errorCount = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item.mainImage) {
        setItems(prev => prev.map((it, idx) => idx === i ? { ...it, mainImageError: 'Select a main image.' } : it));
        errorCount++;
        continue;
      }
      if (item.dateError) {
        errorCount++;
        continue;
      }
      // Map category name to id
      const categoryId = categories.find(cat => cat.name.trim().toLowerCase() === (item.portfolio_category || '').trim().toLowerCase())?.id;
      if (!categoryId) {
        setItems(prev => prev.map((it, idx) => idx === i ? { ...it, mainImageError: 'Category not found.' } : it));
        errorCount++;
        continue;
      }
      try {
        await createPortfolioItem({
          title: item.title,
          slug: item.slug,
          client: item.client,
          portfolio_category: categoryId,
          description: item.description,
          challenge: item.challenge,
          solution: item.solution,
          results: item.results,
          image_url: item.mainImage,
          gallery: item.uploadedImages.filter((url: string) => url !== item.mainImage),
          featured: item.featured === 'true' || item.featured === true,
          date: (item.date || '').trim()
        });
        successCount++;
      } catch (err) {
        errorCount++;
      }
    }
    toast({
      title: 'Import Complete',
      description: `${successCount} items imported, ${errorCount} errors.`,
      variant: errorCount > 0 ? 'destructive' : 'default',
    });
    setSubmittingAll(false);
    if (errorCount === 0) navigate('/dashboard/portfolio');
  };

  if (!items.length) {
    return <div className="p-8">No items to review. <Button onClick={() => navigate('/dashboard/portfolio')}>Back</Button></div>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Review & Upload Images for Portfolio Items</h1>
      <div className="space-y-8">
        {items.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="mb-4 flex justify-between items-center">
              <div>
                <div className="font-semibold text-lg">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.client} | {item.portfolio_category} | {item.date}</div>
                {item.dateError && (
                  <div className="text-red-600 text-sm mb-2">Invalid date format (YYYY-MM-DD required).</div>
                )}
              </div>
              <button
                className="text-blue-600 underline text-sm ml-4"
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              >
                {expandedIdx === idx ? 'Collapse' : 'Expand'}
              </button>
            </div>
            {expandedIdx === idx && (
              <div className="mb-4 space-y-2">
                <div><span className="font-medium">Description:</span> <span className="text-gray-700">{item.description}</span></div>
                <div><span className="font-medium">Challenge:</span> <span className="text-gray-700">{item.challenge}</span></div>
                <div><span className="font-medium">Solution:</span> <span className="text-gray-700">{item.solution}</span></div>
                <div><span className="font-medium">Results:</span> <span className="text-gray-700">{item.results}</span></div>
                <div><span className="font-medium">Featured:</span> <span className="text-gray-700">{String(item.featured)}</span></div>
              </div>
            )}
            <div>
              <label className="block font-medium mb-2">Project Images</label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition mb-2 relative"
                onClick={() => document.getElementById(`csv-img-input-${idx}`)?.click()}
              >
                <input
                  id={`csv-img-input-${idx}`}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={e => handleImageUpload(e.target.files, idx)}
                />
                <span className="text-gray-500 text-sm mb-2">Drag & drop or <span className="text-blue-600 underline">browse</span></span>
                <span className="text-xs text-gray-400">(Upload multiple images. Click an image to set as main.)</span>
              </div>
              {item.mainImageError && <div className="text-red-600 text-sm mb-2">{item.mainImageError}</div>}
              {item.uploadedImages.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-2">
                  {item.uploadedImages.map((url: string, i: number) => (
                    <div key={url} className="relative group">
                      <img
                        src={url}
                        alt={`Uploaded ${i}`}
                        className={`w-24 h-24 object-cover rounded-lg border-2 transition cursor-pointer ${item.mainImage === url ? 'border-blue-600 shadow-lg scale-105' : 'border-gray-300 group-hover:border-blue-400'}`}
                        onClick={() => handleSetMainImage(idx, url)}
                      />
                      {item.mainImage === url && (
                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded shadow">Main</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <Button onClick={handleSubmitAll} disabled={submittingAll}>
          {submittingAll ? 'Submitting...' : 'Submit All'}
        </Button>
      </div>
    </div>
  );
};

export default CsvPortfolioReview;