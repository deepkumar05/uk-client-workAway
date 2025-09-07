import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Play,
  CreditCard,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock
} from "lucide-react";
import { UKClientView } from "@/pages/UKClientPortal";

interface DashboardViewProps {
  onNavigate: (view: UKClientView) => void;
}

export function DashboardView({ onNavigate }: DashboardViewProps) {
  const stats = [
    {
      title: "Banked Resources",
      value: "12",
      description: "Active talent in your pool",
      icon: Users,
      trend: "+2 this month",
    },
    {
      title: "Active Resources",
      value: "5",
      description: "Currently engaged",
      icon: Play,
      trend: "+1 this week",
    },
    {
      title: "Monthly Spend",
      value: "£15,420",
      description: "This month's usage",
      icon: CreditCard,
      trend: "-8% from last month",
    },
    {
      title: "Utilization Rate",
      value: "68%",
      description: "Of banked resources",
      icon: TrendingUp,
      trend: "+12% improvement",
    },
    {
      title: "Open Requests",
      value: "12",
      description: "Active talent in your pool",
      icon: Users,
      trend: "+2 this month",
    },
    {
      title: "Scheduled Meetings",
      value: "5",
      description: "Currently engaged",
      icon: Play,
      trend: "+1 this week",
    },
    {
      title: "Active Suppliers",
      value: "16",
      description: "This month's usage",
      icon: CreditCard,
      trend: "-8% from last month",
    },
    {
      title: "Open Escalations",
      value: "68",
      description: "Of banked resources",
      icon: TrendingUp,
      trend: "+12% improvement",
    }
  ];

  const bankedResources = [
    {
      name: "John Doe",
      role: "React Developer",
      supplier: "TechCorp India",
      expiry: "2024-02-15",
      status: "ready",
    },
    {
      name: "Sarah Smith",
      role: "UI/UX Designer",
      supplier: "DesignHub",
      expiry: "2024-01-28",
      status: "expiring",
    },
    {
      name: "Mike Johnson",
      role: "Node.js Developer",
      supplier: "DevSolutions",
      expiry: "2024-03-10",
      status: "ready",
    },
  ];

  const activeResources = [
    {
      name: "Alice Brown",
      role: "Full Stack Developer",
      project: "E-commerce Platform",
      startDate: "2024-01-10",
      status: "active",
    },
    {
      name: "David Lee",
      role: "DevOps Engineer",
      project: "Cloud Migration",
      startDate: "2024-01-15",
      status: "active",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-success text-white">Ready</Badge>;
      case "expiring":
        return <Badge className="bg-warning text-white">Expiring Soon</Badge>;
      case "active":
        return <Badge className="bg-uk-client text-white">Active</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's an overview of your talent operations.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="text-xs text-[#1A5EE7] mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used actions for faster workflow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="uk-client"
              className="h-20 flex-col space-y-2"
              style={{ backgroundColor: "hsl(215 25% 98%)", color: "black" }}
              onClick={() => onNavigate("talent-banking")}
            >
              <Users className="h-6 w-6" />
              <span>Submit Talent Request</span>
            </Button>




            


            


            <Button
              variant="outline"
              className="h-20 flex-col space-y-2"
              onClick={() => onNavigate("resource-activation")}
            >
              <Play className="h-6 w-6" />
              <span>Activate Resource</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col space-y-2"
              onClick={() => onNavigate("support-communication")}
            >
              <Calendar className="h-6 w-6" />
              <span>Schedule Meeting</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Banked Resources */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Banked Resources</CardTitle>
              <CardDescription>Your available talent pool</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => onNavigate("talent-banking")}>
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bankedResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-medium">{resource.name}</p>
                        <p className="text-sm text-muted-foreground">{resource.role}</p>
                        <p className="text-xs text-muted-foreground">{resource.supplier}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    {getStatusBadge(resource.status)}
                    <p className="text-xs text-muted-foreground">Expires: {resource.expiry}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Resources */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Active Resources</CardTitle>
              <CardDescription>Currently engaged talent</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => onNavigate("resource-activation")}>
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-medium">{resource.name}</p>
                        <p className="text-sm text-muted-foreground">{resource.role}</p>
                        <p className="text-xs text-muted-foreground">{resource.project}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    {getStatusBadge(resource.status)}
                    <p className="text-xs text-muted-foreground">Started: {resource.startDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts & Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Important Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-warning/10 rounded-lg">
              <Clock className="h-4 w-4 text-warning" />
              <div className="flex-1">
                <p className="text-sm font-medium">Resource Expiring Soon</p>
                <p className="text-xs text-muted-foreground">Sarah Smith's banking expires in 8 days</p>
              </div>
              <Button size="sm" variant="outline">Extend</Button>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <div className="flex-1">
                <p className="text-sm font-medium">New Resource Available</p>
                <p className="text-xs text-muted-foreground">React Developer approved and ready for activation</p>
              </div>
              <Button size="sm" variant="outline">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}