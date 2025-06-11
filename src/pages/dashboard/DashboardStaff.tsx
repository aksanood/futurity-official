
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { sendStaffInvitationEmail, getStaffInvitations } from '@/services/emailService';
import { UserPlus, Mail, Send, Clock, CheckCircle, XCircle } from 'lucide-react';

interface StaffMember {
  id: string;
  email: string;
  full_name: string | null;
  role: 'admin' | 'editor' | 'viewer' | 'salesman';
  user_type: string;
  status: string;
  created_at: string;
}

interface InvitationResponse {
  error?: string;
  success?: boolean;
  invitation_id?: string;
  message?: string;
  email?: string;
  role?: string;
  invitation_token?: string;
  signup_url?: string;
}

// Updated interface to match actual database schema
interface StaffInvitation {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer' | 'salesman';
  status: string; // Changed from union type to string to match database
  created_at: string;
  expires_at: string;
}

const DashboardStaff = () => {
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'admin' | 'editor' | 'viewer' | 'salesman'>('viewer');
  const { hasRole, user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch all staff members
  const { data: staffMembers, refetch } = useQuery({
    queryKey: ['staff-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          id,
          email,
          full_name,
          created_at,
          user_roles (role),
          user_types (user_type, status)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Filter to only show staff members and map the data properly
      return data
        .filter(member => {
          const userTypes = member.user_types as any;
          return Array.isArray(userTypes) && userTypes.length > 0 && userTypes[0]?.user_type === 'staff';
        })
        .map(member => {
          const userRoles = member.user_roles as any;
          const userTypes = member.user_types as any;
          return {
            ...member,
            role: (Array.isArray(userRoles) && userRoles.length > 0) ? userRoles[0]?.role || 'viewer' : 'viewer',
            user_type: (Array.isArray(userTypes) && userTypes.length > 0) ? userTypes[0]?.user_type || 'customer' : 'customer',
            status: (Array.isArray(userTypes) && userTypes.length > 0) ? userTypes[0]?.status || 'pending' : 'pending'
          };
        }) as StaffMember[];
    },
    enabled: hasRole('admin')
  });

  // Fetch pending invitations
  const { data: invitations } = useQuery({
    queryKey: ['staff-invitations'],
    queryFn: getStaffInvitations,
    enabled: hasRole('admin')
  });

  // Mutation for sending staff invitation
  const inviteStaffMutation = useMutation({
    mutationFn: async ({ email, role }: { email: string; role: 'admin' | 'editor' | 'viewer' | 'salesman' }) => {
      const { data, error } = await supabase.rpc('send_staff_invitation', {
        _email: email,
        _role: role,
        _invited_by: user?.id
      });

      if (error) throw error;
      return data as InvitationResponse;
    },
    onSuccess: async (data) => {
      if (data && typeof data === 'object' && 'error' in data && data.error) {
        toast({
          title: "Invitation failed",
          description: data.error,
          variant: "destructive",
        });
      } else if (data && data.success) {
        // Send the actual email
        const emailResult = await sendStaffInvitationEmail({
          email: data.email!,
          role: data.role!,
          invitation_token: data.invitation_token!,
          signup_url: data.signup_url!
        });

        if (emailResult.success) {
          toast({
            title: "Invitation sent",
            description: `Invitation email sent to ${inviteEmail}. They will receive instructions to join the team.`,
          });
        } else {
          toast({
            title: "Invitation created",
            description: `Invitation prepared for ${inviteEmail}, but email sending failed. Please share the signup link manually.`,
            variant: "destructive",
          });
        }
        
        setInviteEmail('');
        setInviteRole('viewer');
        queryClient.invalidateQueries({ queryKey: ['staff-invitations'] });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  });

  const handleInviteUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim()) {
      toast({
        title: "Email required",
        description: "Please enter an email address",
        variant: "destructive",
      });
      return;
    }
    
    inviteStaffMutation.mutate({ email: inviteEmail, role: inviteRole });
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin':
        return 'destructive';
      case 'editor':
        return 'default';
      case 'salesman':
        return 'outline';
      case 'viewer':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'accepted':
        return 'default';
      case 'expired':
        return 'destructive';
      case 'suspended':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'accepted':
      case 'active':
        return <CheckCircle className="w-4 h-4" />;
      case 'expired':
      case 'suspended':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  if (!hasRole('admin')) {
    return (
      <DashboardLayout title="Staff Management" subtitle="Manage team members and permissions">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-gray-500">
              <UserPlus className="w-12 h-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Access Restricted</h3>
              <p className="text-gray-400">Only administrators can manage staff members.</p>
            </div>
          </CardContent>
        </Card>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Staff Management" subtitle="Manage team members and permissions">
      <div className="space-y-6">
        {/* Invitation Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Invite New Staff Member
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Automated Staff Invitations</h4>
              <p className="text-blue-800 text-sm">
                Enter an email address and select a role. An invitation email will be sent automatically with signup instructions.
              </p>
            </div>

            <form onSubmit={handleInviteUser} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="invite-email">Email Address</Label>
                  <Input
                    id="invite-email"
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="colleague@company.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="invite-role">Role</Label>
                  <Select value={inviteRole} onValueChange={(value: 'admin' | 'editor' | 'viewer' | 'salesman') => setInviteRole(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="viewer">Viewer - Read only access</SelectItem>
                      <SelectItem value="editor">Editor - Can create and edit content</SelectItem>
                      <SelectItem value="salesman">Salesman - Sales focused access</SelectItem>
                      <SelectItem value="admin">Admin - Full access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="bg-futurity-blue hover:bg-futurity-blue/90"
                disabled={inviteStaffMutation.isPending}
              >
                <Send className="w-4 h-4 mr-2" />
                {inviteStaffMutation.isPending ? 'Sending Invitation...' : 'Send Invitation'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Pending Invitations */}
        {invitations && invitations.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Pending Invitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sent</TableHead>
                    <TableHead>Expires</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invitations.map((invitation: any) => (
                    <TableRow key={invitation.id}>
                      <TableCell className="font-medium">{invitation.email}</TableCell>
                      <TableCell>
                        <Badge variant={getRoleBadgeVariant(invitation.role)}>
                          {invitation.role.charAt(0).toUpperCase() + invitation.role.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(invitation.status)}
                          <Badge variant={getStatusBadgeVariant(invitation.status)}>
                            {invitation.status.charAt(0).toUpperCase() + invitation.status.slice(1)}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(invitation.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {new Date(invitation.expires_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Active Staff Members */}
        <Card>
          <CardHeader>
            <CardTitle>Active Staff Members</CardTitle>
          </CardHeader>
          <CardContent>
            {staffMembers && staffMembers.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staffMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">
                        {member.full_name || 'N/A'}
                      </TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>
                        <Badge variant={getRoleBadgeVariant(member.role)}>
                          {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(member.status)}
                          <Badge variant={getStatusBadgeVariant(member.status)}>
                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(member.created_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <UserPlus className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-400 mb-2">No Staff Members</h3>
                <p className="text-gray-400">Start by inviting your first staff member above.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardStaff;
