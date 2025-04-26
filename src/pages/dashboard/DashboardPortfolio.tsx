
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Edit, Plus, Search, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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

// Mock data - would come from API/database in production
const portfolioItems = [
  {
    id: '1',
    title: 'Eco Solutions Website Redesign',
    slug: 'eco-solutions-website-redesign',
    client: 'Eco Solutions Inc.',
    category: 'Web Design',
    featured: true,
    date: '2025-03-15'
  },
  {
    id: '2',
    title: 'TechStart Mobile App',
    slug: 'techstart-mobile-app',
    client: 'TechStart',
    category: 'Mobile Development',
    featured: true,
    date: '2025-02-22'
  },
  {
    id: '3',
    title: 'Global Finance Brand Identity',
    slug: 'global-finance-brand-identity',
    client: 'Global Finance',
    category: 'Branding',
    featured: false,
    date: '2025-01-18'
  },
  {
    id: '4',
    title: 'HealthPlus Patient Portal',
    slug: 'healthplus-patient-portal',
    client: 'HealthPlus',
    category: 'Web Development',
    featured: false,
    date: '2024-12-10'
  },
  {
    id: '5',
    title: 'Luxury Real Estate Marketing Campaign',
    slug: 'luxury-real-estate-marketing-campaign',
    client: 'Elite Properties',
    category: 'Digital Marketing',
    featured: true,
    date: '2024-11-05'
  }
];

const DashboardPortfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);
  
  const handleCreateItem = () => {
    navigate('/dashboard/portfolio/new');
  };
  
  const handleEditItem = (id: string) => {
    navigate(`/dashboard/portfolio/edit/${id}`);
  };
  
  const handleDeleteItem = () => {
    if (deleteItemId) {
      // In a real app, this would call an API endpoint
      const index = portfolioItems.findIndex(item => item.id === deleteItemId);
      
      if (index !== -1) {
        portfolioItems.splice(index, 1);
        
        toast({
          title: "Project deleted",
          description: "The portfolio project has been deleted successfully.",
        });
        
        setDeleteItemId(null);
      }
    }
  };
  
  const filteredItems = portfolioItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout title="Portfolio" subtitle="Manage your portfolio projects">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
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
        <Button onClick={handleCreateItem}>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Client</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Featured</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <Link to={`/portfolio/${item.slug}`} className="hover:text-futurity-blue">
                    {item.title}
                  </Link>
                </TableCell>
                <TableCell className="hidden md:table-cell">{item.client}</TableCell>
                <TableCell className="hidden md:table-cell">{item.category}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPortfolio;
