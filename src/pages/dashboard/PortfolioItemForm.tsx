
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PortfolioItemForm from '@/components/dashboard/PortfolioItemForm';
import { useToast } from '@/components/ui/use-toast';
import { PortfolioItem } from '@/types/portfolio';
import { getPortfolioItemById, createPortfolioItem, updatePortfolioItem } from '@/services/portfolioService';

const DashboardPortfolioItemForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(!!id);
  
  useEffect(() => {
    const fetchItem = async () => {
      if (id) {
        try {
          setLoading(true);
          const data = await getPortfolioItemById(id);
          if (data) {
            setItem(data);
          } else {
            toast({
              title: 'Error',
              description: 'Portfolio item not found',
              variant: 'destructive',
            });
            navigate('/dashboard/portfolio');
          }
        } catch (error) {
          console.error('Error fetching portfolio item:', error);
          toast({
            title: 'Error',
            description: 'Failed to load portfolio item',
            variant: 'destructive',
          });
        } finally {
          setLoading(false);
        }
      }
    };

    fetchItem();
  }, [id, navigate, toast]);
  
  const handleSave = async (itemData: Omit<PortfolioItem, 'id' | 'created_at' | 'updated_at'>) => {
    setIsSubmitting(true);
    
    try {
      if (id) {
        // Update existing portfolio item
        await updatePortfolioItem(id, itemData);
        
        toast({
          title: "Project updated",
          description: "The portfolio project has been updated successfully.",
        });
      } else {
        // Create new portfolio item
        await createPortfolioItem(itemData);
        
        toast({
          title: "Project created",
          description: "The portfolio project has been created successfully.",
        });
      }
      
      navigate('/dashboard/portfolio');
    } catch (error) {
      console.error('Error saving portfolio item:', error);
      toast({
        title: 'Error',
        description: 'Failed to save portfolio item. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const title = id ? 'Edit Portfolio Project' : 'Create Portfolio Project';
  const subtitle = id && item 
    ? `Editing "${item.title}"` 
    : 'Create a new portfolio project to showcase your work';
  
  if (loading) {
    return (
      <DashboardLayout title="Loading..." subtitle="Please wait">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p>Loading project data...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout title={title} subtitle={subtitle}>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <PortfolioItemForm 
          item={item} 
          onSave={handleSave}
          isSubmitting={isSubmitting}
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPortfolioItemForm;
