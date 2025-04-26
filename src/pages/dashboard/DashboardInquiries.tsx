
import { useState } from 'react';
import { MessageSquare, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'New' | 'Replied' | 'Archived';
  date: string;
}

const DashboardInquiries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - this would typically come from an API
  const inquiries: Inquiry[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Website Redesign Inquiry',
      message: 'Hello, I would like to inquire about your website redesign services for my e-commerce business...',
      status: 'New',
      date: '2025-04-24'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'SEO Services',
      message: 'Hi, I'm interested in improving the search engine ranking for my company website...',
      status: 'Replied',
      date: '2025-04-23'
    },
    {
      id: '3',
      name: 'Robert Johnson',
      email: 'robert@example.com',
      subject: 'Mobile App Development',
      message: 'I need a mobile app developed for both iOS and Android platforms with the following features...',
      status: 'New',
      date: '2025-04-22'
    },
    {
      id: '4',
      name: 'Emily Brown',
      email: 'emily@example.com',
      subject: 'Brand Strategy Consultation',
      message: 'We\'re looking to refresh our brand identity and would like to schedule a consultation...',
      status: 'Archived',
      date: '2025-04-21'
    },
    {
      id: '5',
      name: 'Michael Wilson',
      email: 'michael@example.com',
      subject: 'Digital Marketing Campaign',
      message: 'We\'re launching a new product next month and need help with a digital marketing campaign...',
      status: 'New',
      date: '2025-04-20'
    }
  ];

  const filteredInquiries = inquiries.filter(inquiry => 
    inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout title="Inquiries" subtitle="Manage customer inquiries">
      <div className="flex justify-between items-center mb-6">
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
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell className="font-medium">{inquiry.name}</TableCell>
                <TableCell className="hidden md:table-cell">{inquiry.email}</TableCell>
                <TableCell>{inquiry.subject}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <span 
                    className={`px-2 py-1 rounded-full text-xs ${
                      inquiry.status === 'New' 
                        ? 'bg-blue-100 text-blue-800' 
                        : inquiry.status === 'Replied' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {inquiry.status}
                  </span>
                </TableCell>
                <TableCell>{inquiry.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4" />
                    <span className="sr-only md:not-sr-only md:ml-2">View</span>
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

export default DashboardInquiries;
