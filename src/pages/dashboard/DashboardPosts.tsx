
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Plus, Search, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface Post {
  id: string;
  title: string;
  author: string;
  category: string;
  status: 'Draft' | 'Published';
  date: string;
}

const DashboardPosts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - this would typically come from an API
  const posts: Post[] = [
    {
      id: '1',
      title: 'Top 10 Web Design Trends for 2025',
      author: 'Jane Smith',
      category: 'Design',
      status: 'Published',
      date: '2025-04-15'
    },
    {
      id: '2',
      title: 'How to Optimize Your Website for SEO',
      author: 'John Doe',
      category: 'Marketing',
      status: 'Published',
      date: '2025-04-10'
    },
    {
      id: '3',
      title: 'The Future of AI in Web Development',
      author: 'Sarah Johnson',
      category: 'Technology',
      status: 'Draft',
      date: '2025-04-05'
    },
    {
      id: '4',
      title: 'Building Accessible Websites: A Complete Guide',
      author: 'Michael Brown',
      category: 'Development',
      status: 'Published',
      date: '2025-03-28'
    },
    {
      id: '5',
      title: 'Mobile-First Design: Best Practices',
      author: 'Emily Chen',
      category: 'Design',
      status: 'Draft',
      date: '2025-03-20'
    }
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout title="Blog Posts" subtitle="Manage your blog content">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search posts..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Post
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Author</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                <TableCell className="hidden md:table-cell">{post.category}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <span 
                    className={`px-2 py-1 rounded-full text-xs ${
                      post.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {post.status}
                  </span>
                </TableCell>
                <TableCell>{post.date}</TableCell>
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

export default DashboardPosts;
