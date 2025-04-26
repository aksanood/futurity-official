
import { useState } from 'react';
import { Search, Trash, Mail } from 'lucide-react';
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'New' | 'Contacted' | 'Resolved';
  date: string;
  source: string;
}

// Mock data - would come from API/database in production
const inquiries: Inquiry[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    subject: 'Website Redesign Inquiry',
    message: 'We are looking to redesign our company website which currently has about 20 pages. We would like to modernize the design and make it mobile-friendly. Could you provide us with a quote and timeline for this project?',
    status: 'New',
    date: '2025-04-20',
    source: 'Contact Page'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@techinnovate.com',
    subject: 'SEO Services',
    message: 'Hi there, I\'m interested in your SEO services. Our website has been experiencing a drop in organic traffic over the past few months and we\'d like to explore solutions to address this issue.',
    status: 'Contacted',
    date: '2025-04-18',
    source: 'Services Page'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'mbrown@retailgroup.net',
    subject: 'E-commerce Integration',
    message: 'We\'re looking to add e-commerce functionality to our existing website. We have approximately 150 products and would need inventory management, payment processing, and integration with our CRM system.',
    status: 'Resolved',
    date: '2025-04-15',
    source: 'Contact Page'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'ewilson@startupventures.co',
    subject: 'App Development Quote',
    message: 'I\'m the founder of a startup in the fitness industry, and we\'re looking to develop a mobile app for workout tracking. I\'d like to discuss the features, potential costs, and timeline for development.',
    status: 'New',
    date: '2025-04-12',
    source: 'Portfolio Page'
  }
];

const DashboardInquiries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  const [deleteInquiryId, setDeleteInquiryId] = useState<string | null>(null);
  const [currentInquiry, setCurrentInquiry] = useState<Inquiry | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  const handleStatusChange = (inquiryId: string, newStatus: 'New' | 'Contacted' | 'Resolved') => {
    // In a real app, this would call an API endpoint
    const index = inquiries.findIndex(item => item.id === inquiryId);
    
    if (index !== -1) {
      inquiries[index].status = newStatus;
      
      toast({
        title: "Status updated",
        description: `Inquiry has been marked as ${newStatus.toLowerCase()}.`,
      });
    }
  };
  
  const handleDeleteInquiry = () => {
    if (deleteInquiryId) {
      // In a real app, this would call an API endpoint
      const index = inquiries.findIndex(item => item.id === deleteInquiryId);
      
      if (index !== -1) {
        inquiries.splice(index, 1);
        
        toast({
          title: "Inquiry deleted",
          description: "The inquiry has been deleted successfully.",
        });
        
        setDeleteInquiryId(null);
      }
    }
  };
  
  const handleViewInquiry = (inquiry: Inquiry) => {
    setCurrentInquiry(inquiry);
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const filteredInquiries = inquiries
    .filter(inquiry => 
      (inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
       inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === 'all' || inquiry.status === statusFilter)
    );

  return (
    <DashboardLayout title="Inquiries" subtitle="Manage customer inquiries from contact forms">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search inquiries..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant={statusFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setStatusFilter('all')}
          >
            All
          </Button>
          <Button 
            variant={statusFilter === 'New' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setStatusFilter('New')}
          >
            New
          </Button>
          <Button 
            variant={statusFilter === 'Contacted' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setStatusFilter('Contacted')}
          >
            Contacted
          </Button>
          <Button 
            variant={statusFilter === 'Resolved' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setStatusFilter('Resolved')}
          >
            Resolved
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.name}</TableCell>
                <TableCell className="hidden md:table-cell">{inquiry.email}</TableCell>
                <TableCell>
                  <button 
                    onClick={() => handleViewInquiry(inquiry)}
                    className="text-left hover:text-futurity-blue hover:underline"
                  >
                    {inquiry.subject}
                  </button>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell">{inquiry.date}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleViewInquiry(inquiry)}
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setDeleteInquiryId(inquiry.id)}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Inquiry</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this inquiry from {inquiry.name}? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteInquiry}>
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
      
      {/* View Inquiry Dialog */}
      <Dialog open={!!currentInquiry} onOpenChange={(open) => !open && setCurrentInquiry(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{currentInquiry?.subject}</DialogTitle>
            <DialogDescription>
              From: {currentInquiry?.name} ({currentInquiry?.email})
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">Source:</span> {currentInquiry?.source}
              </div>
              <div>
                <span className="text-sm text-gray-500">Date:</span> {currentInquiry?.date}
              </div>
            </div>
            
            <div className="border-t pt-4">
              <p className="whitespace-pre-wrap">
                {currentInquiry?.message}
              </p>
            </div>
            
            <div className="mt-4">
              <span className="text-sm font-medium">Status:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge 
                  variant={currentInquiry?.status === 'New' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => currentInquiry && handleStatusChange(currentInquiry.id, 'New')}
                >
                  New
                </Badge>
                <Badge 
                  variant={currentInquiry?.status === 'Contacted' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => currentInquiry && handleStatusChange(currentInquiry.id, 'Contacted')}
                >
                  Contacted
                </Badge>
                <Badge 
                  variant={currentInquiry?.status === 'Resolved' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => currentInquiry && handleStatusChange(currentInquiry.id, 'Resolved')}
                >
                  Resolved
                </Badge>
              </div>
            </div>
          </div>
          
          <DialogFooter className="sm:justify-between">
            <Button 
              variant="outline" 
              onClick={() => currentInquiry && window.open(`mailto:${currentInquiry.email}?subject=Re: ${currentInquiry.subject}`)}
            >
              <Mail className="mr-2 h-4 w-4" /> Reply via Email
            </Button>
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default DashboardInquiries;
