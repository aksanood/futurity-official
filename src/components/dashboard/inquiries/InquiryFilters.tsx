
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface InquiryFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}

const InquiryFilters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}: InquiryFiltersProps) => {
  return (
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
  );
};

export default InquiryFilters;
