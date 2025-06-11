
import { format } from 'date-fns';
import { Mail } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Inquiry } from '@/services/inquiriesService';

interface InquiryViewDialogProps {
  inquiry: Inquiry | null;
  onClose: () => void;
  onStatusChange: (inquiryId: string, newStatus: 'new' | 'contacted' | 'resolved') => void;
}

const InquiryViewDialog = ({ inquiry, onClose, onStatusChange }: InquiryViewDialogProps) => {
  if (!inquiry) return null;

  return (
    <Dialog open={!!inquiry} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{inquiry.subject}</DialogTitle>
          <DialogDescription>
            From: {inquiry.name} ({inquiry.email})
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-500">Source:</span> {inquiry.source}
            </div>
            <div>
              <span className="text-sm text-gray-500">Date:</span>{' '}
              {format(new Date(inquiry.created_at), 'MMM d, yyyy')}
            </div>
          </div>
          
          <div className="border-t pt-4">
            <p className="whitespace-pre-wrap">
              {inquiry.message}
            </p>
          </div>
          
          <div className="mt-4">
            <span className="text-sm font-medium">Status:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge 
                variant={inquiry.status === 'new' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => onStatusChange(inquiry.id, 'new')}
              >
                New
              </Badge>
              <Badge 
                variant={inquiry.status === 'contacted' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => onStatusChange(inquiry.id, 'contacted')}
              >
                Contacted
              </Badge>
              <Badge 
                variant={inquiry.status === 'resolved' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => onStatusChange(inquiry.id, 'resolved')}
              >
                Resolved
              </Badge>
            </div>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-between">
          <Button 
            variant="outline" 
            onClick={() => window.open(`mailto:${inquiry.email}?subject=Re: ${inquiry.subject}`)}
          >
            <Mail className="mr-2 h-4 w-4" /> Reply via Email
          </Button>
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryViewDialog;
