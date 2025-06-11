
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PortfolioItemForm from '@/components/dashboard/PortfolioItemForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { getPortfolioItemById } from '@/services/portfolioService';
import { PortfolioItem } from '@/types/portfolio';
import { supabase } from '@/integrations/supabase/client';

const DashboardEditPortfolioItem = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchItem = async () => {
      if (!id) {
        navigate('/dashboard/portfolio');
        return;
      }

      try {
        setLoading(true);
        const portfolioItem = await getPortfolioItemById(id);
        
        if (!portfolioItem) {
          toast({
            title: "Error",
            description: "Portfolio item not found",
            variant: "destructive",
          });
          navigate('/dashboard/portfolio');
          return;
        }
        
        setItem(portfolioItem);
      } catch (error) {
        console.error("Error fetching portfolio item:", error);
        toast({
          title: "Error",
          description: "Failed to load portfolio item",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, navigate, toast]);

  if (loading) {
    return (
      <DashboardLayout title="Edit Portfolio Item" subtitle="Loading...">
        <div className="flex justify-center items-center h-64">
          <p>Loading portfolio item...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!item) {
    return (
      <DashboardLayout title="Edit Portfolio Item" subtitle="Not found">
        <div className="flex justify-center items-center h-64">
          <p>Portfolio item not found</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Edit Portfolio Item" subtitle="Edit your portfolio project">
      <Tabs defaultValue="content" className="w-full">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          {/* <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger> */}
        </TabsList>
        <TabsContent value="content">
          <PortfolioItemForm item={item} isEditMode={true} />
        </TabsContent>
        {/* <TabsContent value="images">
          <p>Images content</p>
        </TabsContent>
        <TabsContent value="settings">
          <p>Settings content</p>
        </TabsContent> */}
      </Tabs>
    </DashboardLayout>
  );
};

export default DashboardEditPortfolioItem;
