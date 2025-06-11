import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Edit, Plus, Search, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { PortfolioItem } from '@/types/portfolio';
import { getPortfolioItems, deletePortfolioItem, createPortfolioItem } from '@/services/portfolioService';
import Papa from 'papaparse';
import { getServiceCategories } from '@/data/portfolioData';

const DashboardPortfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [categories, setCategories] = useState<Array<{id: string, name: string}>>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const data = await getPortfolioItems();
        setPortfolioItems(data);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
        toast({
          title: 'Error',
          description: 'Failed to load portfolio items. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioItems();
  }, [toast]);

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
    console.log('DEBUG: portfolioItems', portfolioItems);
    console.log('DEBUG: categoryFilter', categoryFilter);
    console.log('DEBUG: categories', categories);
  }, [portfolioItems, categoryFilter, categories]);
  
  const handleCreateItem = () => {
    navigate('/dashboard/portfolio/new');
  };
  
  const handleEditItem = (id: string) => {
    navigate(`/dashboard/portfolio/edit/${id}`);
  };
  
  const handleDeleteItem = async () => {
    if (deleteItemId) {
      try {
        await deletePortfolioItem(deleteItemId);
        
        setPortfolioItems(items => items.filter(item => item.id !== deleteItemId));
        
        toast({
          title: "Project deleted",
          description: "The portfolio project has been deleted successfully.",
        });
        
        setDeleteItemId(null);
      } catch (error) {
        console.error('Error deleting project:', error);
        toast({
          title: 'Error',
          description: 'Failed to delete project. Please try again later.',
          variant: 'destructive',
        });
      }
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
      setSelectAll(false);
    } else {
      setSelectedIds(filteredItems.map(item => item.id));
      setSelectAll(true);
    }
  };

  const handleSelectRow = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.length === 0) return;
    if (!window.confirm('Are you sure you want to delete the selected projects? This action cannot be undone.')) return;
    try {
      for (const id of selectedIds) {
        await deletePortfolioItem(id);
      }
      setPortfolioItems(items => items.filter(item => !selectedIds.includes(item.id)));
      setSelectedIds([]);
      setSelectAll(false);
      toast({
        title: 'Projects deleted',
        description: 'The selected portfolio projects have been deleted.',
      });
    } catch (error) {
      console.error('Error deleting selected projects:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete selected projects. Please try again later.',
        variant: 'destructive',
      });
    }
  };
  
  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const items = results.data as any[];
        navigate('/dashboard/portfolio/csv-review', { state: { items } });
      },
      error: (err) => {
        toast({
          title: 'CSV Parse Error',
          description: err.message,
          variant: 'destructive',
        });
      }
    });
  };

  const filteredItems = portfolioItems.filter(item => {
    if (categoryFilter !== 'all') {
      console.log('DEBUG: item.portfolio_category', item.portfolio_category, 'categoryFilter', categoryFilter);
    }
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.portfolio_category?.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || item.portfolio_category === categoryFilter;
    const matchesFeatured = showFeaturedOnly ? item.featured : true;
    return matchesSearch && matchesCategory && matchesFeatured;
  });

  return (
    <DashboardLayout title="Portfolio" subtitle="Manage your portfolio projects">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="border rounded px-3 py-2 ml-0 md:ml-2"
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              disabled={loadingCategories}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div>
            <Button
              variant={showFeaturedOnly ? 'default' : 'outline'}
              className="ml-0 md:ml-2"
              onClick={() => setShowFeaturedOnly(f => !f)}
            >
              {showFeaturedOnly ? 'Showing Featured' : 'All Items'}
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleCreateItem}>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
          <Button
            variant="destructive"
            onClick={handleDeleteSelected}
            disabled={selectedIds.length === 0}
          >
            <Trash className="mr-2 h-4 w-4" /> Delete Selected
          </Button>
          <Button asChild variant="outline">
            <label className="cursor-pointer">
              Upload CSV
              <input type="file" accept=".csv" onChange={handleCSVUpload} hidden />
            </label>
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Client</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Featured</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10">
                  Loading portfolio items...
                </TableCell>
              </TableRow>
            ) : filteredItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10">
                  No portfolio items found.
                </TableCell>
              </TableRow>
            ) : (
              filteredItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedIds.includes(item.id)}
                      onCheckedChange={() => handleSelectRow(item.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <Link to={`/portfolio/${item.slug}`} className="hover:text-futurity-blue">
                      {item.title}
                    </Link>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{item.client}</TableCell>
                  <TableCell className="hidden md:table-cell">{
                    categories.find(cat => cat.id === item.portfolio_category)?.name || item.portfolio_category
                  }</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.featured ? (
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        Featured
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                        Standard
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEditItem(item.id)}
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setDeleteItemId(item.id)}
                        >
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Portfolio Project</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{item.title}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={handleDeleteItem}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPortfolio;
