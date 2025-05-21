import { BarChart, LineChart, PieChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const DashboardAnalytics = () => {
  return (
    <DashboardLayout title="Analytics" subtitle="Monitor your site performance">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Page Views
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156,234</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 mr-1">↑ 12%</span>
              compared to last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg. Time on Site
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3m 42s</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 mr-1">↑ 8%</span>
              compared to last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Bounce Rate
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.3%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-red-600 mr-1">↑ 3%</span>
              compared to last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Conversion Rate
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 mr-1">↑ 1.2%</span>
              compared to last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Traffic Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Line chart would be displayed here
              <br />
              (We would integrate with a chart library)
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm">Organic Search</div>
                  <div className="text-sm text-muted-foreground">45%</div>
                </div>
                <Progress value={45} />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm">Direct</div>
                  <div className="text-sm text-muted-foreground">30%</div>
                </div>
                <Progress value={30} />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm">Social Media</div>
                  <div className="text-sm text-muted-foreground">15%</div>
                </div>
                <Progress value={15} />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm">Referrals</div>
                  <div className="text-sm text-muted-foreground">10%</div>
                </div>
                <Progress value={10} />
              </div>
            </div>
            
            <div className="h-[100px] flex items-center justify-center text-muted-foreground mt-6">
              Pie chart would be displayed here
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Homepage</div>
                  <div className="text-xs text-muted-foreground">/</div>
                </div>
                <div className="font-medium">24,563 views</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Services</div>
                  <div className="text-xs text-muted-foreground">/services</div>
                </div>
                <div className="font-medium">18,432 views</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">About Us</div>
                  <div className="text-xs text-muted-foreground">/about-futurity</div>
                </div>
                <div className="font-medium">12,871 views</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Portfolio</div>
                  <div className="text-xs text-muted-foreground">/portfolio</div>
                </div>
                <div className="font-medium">10,592 views</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Contact</div>
                  <div className="text-xs text-muted-foreground">/contact</div>
                </div>
                <div className="font-medium">7,845 views</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm">Desktop</div>
                  <div className="text-sm text-muted-foreground">58%</div>
                </div>
                <Progress value={58} />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm">Mobile</div>
                  <div className="text-sm text-muted-foreground">36%</div>
                </div>
                <Progress value={36} />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm">Tablet</div>
                  <div className="text-sm text-muted-foreground">6%</div>
                </div>
                <Progress value={6} />
              </div>
            </div>
            
            <div className="h-[150px] flex items-center justify-center text-muted-foreground mt-6">
              Bar chart would be displayed here
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAnalytics;
