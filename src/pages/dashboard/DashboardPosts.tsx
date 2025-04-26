
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
import { blogPosts } from '@/data/blogData';

const DashboardPosts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const [deletePostId, setDeletePostId] = useState<string | null>(null);
  
  const handleCreatePost = () => {
    navigate('/dashboard/posts/new');
  };
  
  const handleEditPost = (id: string) => {
    navigate(`/dashboard/posts/edit/${id}`);
  };
  
  const handleDeletePost = () => {
    if (deletePostId) {
      // Find the index of the post to delete
      const index = blogPosts.findIndex(post => post.id === deletePostId);
      
      if (index !== -1) {
        // Remove the post from the array
        blogPosts.splice(index, 1);
        
        toast({
          title: "Post deleted",
          description: "The blog post has been deleted successfully.",
        });
        
        // Reset the deletePostId
        setDeletePostId(null);
      }
    }
  };
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <Button onClick={handleCreatePost}>
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
                <TableCell className="font-medium">
                  <Link to={`/blog/${post.slug}`} className="hover:text-futurity-blue">
                    {post.title}
                  </Link>
                </TableCell>
                <TableCell className="hidden md:table-cell">{post.author.name}</TableCell>
                <TableCell className="hidden md:table-cell">{post.category.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <span 
                    className={`px-2 py-1 rounded-full text-xs bg-green-100 text-green-800`}
                  >
                    Published
                  </span>
                </TableCell>
                <TableCell>{post.publishedDate}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleEditPost(post.id)}
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setDeletePostId(post.id)}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{post.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeletePost}>
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

export default DashboardPosts;
