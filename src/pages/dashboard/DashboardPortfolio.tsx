
import { useState } from 'react';
import { Edit, Plus, Search, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  featured: boolean;
  date: string;
}

const DashboardPortfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - this would typically come from an API
  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Eco Solutions Website Redesign',
      client: 'Eco Solutions Inc.',
      category: 'Web Design',
      featured: true,
      date: '2025-03-15'
    },
    {
      id: '2',
      title: 'TechStart Mobile App',
      client: 'TechStart',
      category: 'Mobile Development',
      featured: true,
      date: '2025-02-22'
    },
    {
      id: '3',
      title: 'Global Finance Brand Identity',
      client: 'Global Finance',
      category: 'Branding',
      featured: false,
      date: '2025-01-18'
    },
    {
      id: '4',
      title: 'HealthPlus Patient Portal',
      client: 'HealthPlus',
      category: 'Web Development',
      featured: false,
      date: '2024-12-10'
    },
    {
      id: '5',
      title: 'Luxury Real Estate Marketing Campaign',
      client: 'Elite Properties',
      category: 'Digital Marketing',
      featured: true,
      date: '2024-11-05'
    }
  ];

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
        <Button>
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
                <TableCell className="font-medium">{item.title}</TableCell>
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
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
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
