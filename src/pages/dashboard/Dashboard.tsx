
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart, FileText, MessageSquare, Users } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { userRole, profile } = useAuth();
  const location = useLocation();
  const { toast } = useToast();

  // Show access denied toast if redirected due to insufficient permissions
  useEffect(() => {
    if (location.state?.accessDenied) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access that page",
        variant: "destructive",
      });
    }
  }, [location.state, toast]);

  // This would normally come from an API
  const recentInquiries = [
    { name: 'John Doe', email: 'john@example.com', subject: 'Website Redesign', date: '2025-04-24', status: 'New' },
    { name: 'Jane Smith', email: 'jane@example.com', subject: 'SEO Services', date: '2025-04-23', status: 'Replied' },
    { name: 'Robert Johnson', email: 'robert@example.com', subject: 'Mobile App Development', date: '2025-04-22', status: 'New' },
    { name: 'Emily Brown', email: 'emily@example.com', subject: 'Brand Strategy', date: '2025-04-21', status: 'Archived' },
  ];

  return (
    <DashboardLayout title="Dashboard" subtitle={`Welcome back, ${profile?.full_name || 'User'}`}>
      {/* Role indicator */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          Role: {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Visitors"
          value="24,530"
          icon={<Users size={20} />}
          description="Last 30 days"
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Blog Posts"
          value="34"
          icon={<FileText size={20} />}
          description="8 drafts"
        />
        <DashboardCard
          title="Portfolio Items"
          value="27"
          icon={<BarChart size={20} />}
        />
        <DashboardCard
          title="New Inquiries"
          value="12"
          icon={<MessageSquare size={20} />}
          description="Last 7 days"
          trend={{ value: 8, isPositive: true }}
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentInquiries.map((inquiry) => (
                  <TableRow key={inquiry.email}>
                    <TableCell className="font-medium">{inquiry.name}</TableCell>
                    <TableCell>{inquiry.subject}</TableCell>
                    <TableCell>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center text-muted-foreground">
              Chart would be displayed here
              <br />
              (We would integrate with a chart library)
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
