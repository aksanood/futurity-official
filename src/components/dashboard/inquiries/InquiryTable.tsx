
import { format } from 'date-fns';
import { Mail, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { Inquiry } from '@/services/inquiriesService';

interface InquiryTableProps {
  inquiries: Inquiry[];
  onView: (inquiry: Inquiry) => void;
  onDelete: (id: string) => void;
}

const InquiryTable = ({ inquiries, onView, onDelete }: InquiryTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
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
          {inquiries.map((inquiry) => (
            <TableRow key={inquiry.id}>
              <TableCell>{inquiry.name}</TableCell>
              <TableCell className="hidden md:table-cell">{inquiry.email}</TableCell>
              <TableCell>
                <button 
                  onClick={() => onView(inquiry)}
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
                  onClick={() => onView(inquiry)}
                >
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
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
                      <AlertDialogAction onClick={() => onDelete(inquiry.id)}>
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
  );
};

export default InquiryTable;
