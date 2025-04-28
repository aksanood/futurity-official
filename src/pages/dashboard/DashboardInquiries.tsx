
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
import { useToast } from '@/hooks/use-toast';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useQuery } from '@tanstack/react-query';
import { inquiriesService } from '@/services/inquiriesService';
import { format } from 'date-fns';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved';
  source: string;
  created_at: string;
  updated_at: string;
}

const DashboardInquiries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  const [deleteInquiryId, setDeleteInquiryId] = useState<string | null>(null);
  const [currentInquiry, setCurrentInquiry] = useState<Inquiry | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const { data: inquiries, refetch } = useQuery({
    queryKey: ['inquiries'],
    queryFn: inquiriesService.getAllInquiries
  });
  
  const handleStatusChange = async (inquiryId: string, newStatus: 'new' | 'contacted' | 'resolved') => {
    try {
      await inquiriesService.updateInquiryStatus(inquiryId, newStatus);
      await refetch();
      
      toast({
        title: "Status updated",
        description: `Inquiry has been marked as ${newStatus.toLowerCase()}.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update inquiry status.",
        variant: "destructive"
      });
    }
  };
  
  const handleDeleteInquiry = () => {
    if (deleteInquiryId) {
      // In a real app, this would call an API endpoint
      toast({
        title: "Not implemented",
        description: "This functionality is not implemented yet.",
      });
      setDeleteInquiryId(null);
    }
  };
  
  const handleViewInquiry = (inquiry: Inquiry) => {
    setCurrentInquiry(inquiry);
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const filteredInquiries = inquiries
    ?.filter(inquiry => 
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
            variant={statusFilter === 'new' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setStatusFilter('new')}
          >
            New
          </Button>
          <Button 
            variant={statusFilter === 'contacted' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setStatusFilter('contacted')}
          >
            Contacted
          </Button>
          <Button 
            variant={statusFilter === 'resolved' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setStatusFilter('resolved')}
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
            {filteredInquiries?.map((inquiry) => (
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
                <TableCell className="hidden md:table-cell">
                  {format(new Date(inquiry.created_at), 'MMM d, yyyy')}
                </TableCell>
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
                <span className="text-sm text-gray-500">Date:</span>{' '}
                {currentInquiry && format(new Date(currentInquiry.created_at), 'MMM d, yyyy')}
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
                  variant={currentInquiry?.status === 'new' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => currentInquiry && handleStatusChange(currentInquiry.id, 'new')}
                >
                  New
                </Badge>
                <Badge 
                  variant={currentInquiry?.status === 'contacted' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => currentInquiry && handleStatusChange(currentInquiry.id, 'contacted')}
                >
                  Contacted
                </Badge>
                <Badge 
                  variant={currentInquiry?.status === 'resolved' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => currentInquiry && handleStatusChange(currentInquiry.id, 'resolved')}
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
