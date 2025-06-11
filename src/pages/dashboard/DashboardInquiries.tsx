
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useQuery } from '@tanstack/react-query';
import { Inquiry, inquiriesService } from '@/services/inquiriesService';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import InquiryFilters from '@/components/dashboard/inquiries/InquiryFilters';
import InquiryTable from '@/components/dashboard/inquiries/InquiryTable';
import InquiryViewDialog from '@/components/dashboard/inquiries/InquiryViewDialog';

const DashboardInquiries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [currentInquiry, setCurrentInquiry] = useState<Inquiry | null>(null);
  const { toast } = useToast();

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
  
  const handleDeleteInquiry = (id: string) => {
    // In a real app, this would call an API endpoint
    toast({
      title: "Not implemented",
      description: "This functionality is not implemented yet.",
    });
  };
  
  const filteredInquiries = inquiries
    ?.filter(inquiry => 
      (inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
       inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === 'all' || inquiry.status === statusFilter)
    ) ?? [];

  return (
    <DashboardLayout title="Inquiries" subtitle="Manage customer inquiries from contact forms">
      <InquiryFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      
      <InquiryTable
        inquiries={filteredInquiries}
        onView={setCurrentInquiry}
        onDelete={handleDeleteInquiry}
      />
      
      <InquiryViewDialog
        inquiry={currentInquiry}
        onClose={() => setCurrentInquiry(null)}
        onStatusChange={handleStatusChange}
      />
    </DashboardLayout>
  );
};

export default DashboardInquiries;
