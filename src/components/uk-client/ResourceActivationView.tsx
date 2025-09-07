import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Play,
  Pause,
  RotateCcw,
  UserX,
  Calendar as CalendarIcon,
  Clock,
  Search,
  Star,
  MessageSquare,
  CreditCard,
  TrendingUp,
  Users,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export function ResourceActivationView() {

  const stats = [
    {
      title: "Total Banked",
      value: "12",
      description: "Resource Ready for Activation",
      icon: Users,
      trend: "+2 this month",
    },
    {
      title: "Active Resources",
      value: "5",
      description: "Actively working on projects",
      icon: Play,
      trend: "+1 this week",
    },
    {
      title: "Paused Resources",
      value: "2",
      description: "Paused Resources",
      icon: CreditCard,
      trend: "-8% from last month",
    },
    {
      title: "Expiring Soon",
      value: "6",
      description: "Expiring banking period",
      icon: TrendingUp,
      trend: "+12% improvement",
    }
  ]
  const [searchTerm, setSearchTerm] = useState("");
  const [activationDate, setActivationDate] = useState<Date>();
  const { toast } = useToast();

  const activeResources = [
    {
      id: 1,
      name: "Alice Brown",
      role: "Full Stack Developer",
      utilizationRate: "80%",
      startDate: "2024-01-10",
      lastPausedDate: "2024-04-10",
      status: "active",
      rating: 4.8,
      supplier: "TechCorp India",
      daysActive: 15,
      expiresIn: 30
    },
    {
      id: 2,
      name: "David Lee",
      role: "DevOps Engineer",
      utilizationRate: "60%",
      startDate: "2024-01-15",
      lastPausedDate: "2024-09-10",
      status: "active",
      rating: 4.9,
      supplier: "CloudSolutions",
      daysActive: 10,
      expiresIn: 30
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "UI/UX Designer",
      utilizationRate: "90%",
      startDate: "2023-12-20",
      lastPausedDate: "2024-04-10",
      status: "paused",
      rating: 4.7,
      supplier: "DesignHub",
      daysActive: 25,
      expiresIn: 30
    },
  ];

  const availableResources = [
    {
      id: 1,
      name: "John Doe",
      role: "Senior React Developer",
      supplier: "TechCorp India",
      skills: ["React", "TypeScript", "Node.js"],
      canActivate: true,
      noticeRequired: false,
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "DevOps Engineer",
      supplier: "CloudSolutions",
      skills: ["AWS", "Docker", "Kubernetes"],
      canActivate: false,
      noticeRequired: true,
      noticeDays: 7,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-white">Active</Badge>;
      case "paused":
        return <Badge className="bg-warning text-white">Paused</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleActivationRequest = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Activation Requested",
      description: "Resource activation request has been submitted to operations team.",
    });
  };

  const handleResourceAction = (action: string, resourceName: string) => {
    toast({
      title: `Resource ${action}`,
      description: `${resourceName} has been ${action.toLowerCase()}.`,
    });
  };

  const filteredActiveResources = activeResources.filter(resource =>
    resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.utilizationRate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Resource </h1>
          <p className="text-muted-foreground mt-2">
            Manage active resources and request new activations.
          </p>
        </div>
      </div>



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

            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="active-resources" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all-resources">All Resources</TabsTrigger>
          <TabsTrigger value="active-resources">Active Resources</TabsTrigger>
          <TabsTrigger value="paused-resources">Paused Resources</TabsTrigger>
          <TabsTrigger value="expired-resources">Expired Resources</TabsTrigger>
          <TabsTrigger value="other-resources">Other Resources</TabsTrigger>
        </TabsList>


        <TabsContent value="all-resources" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Resources</CardTitle>
                  <CardDescription>Manage & process banked resources</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search active resources..."
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredActiveResources.map((resource) => (
                  <Card key={resource.id} className="border-l-4 border-l-uk-client">
                    <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h3 className="font-semibold text-lg">{resource.name}</h3>
                              <p className="text-muted-foreground">{resource.role}</p>
                            </div>


                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                              <p>Utilization Rate {resource.utilizationRate}</p>
                            </div>

                            <div className="flex flex-col items-center justify-center ">
                              <p className="text-muted-foreground">Start Date</p>
                              <p className="font-medium">{resource.startDate}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                              <p className="text-muted-foreground">Last Paused Date</p>
                              <p className="font-medium">{resource.lastPausedDate} hours</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                              <p className="text-muted-foreground">Days Worked</p>
                              <p className="font-medium">{resource.daysActive} days</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2 ml-6">
                          {resource.status === "active" ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleResourceAction("Paused", resource.name)}
                            >
                              <Pause className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                          ) : (
                            <Button
                              variant="uk-client"
                              size="sm"
                              onClick={() => handleResourceAction("Reactivated", resource.name)}
                            >
                              <RotateCcw className="mr-2 h-4 w-4" />
                              Reactivate
                            </Button>
                          )}
                          
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                Activate
                              </Button>
                            </DialogTrigger>
                            
                            <div className="flex items-center space-x-1 mt-1">
                              <p>Expiring in</p>
                              <p className="text-red-500 font-medium">{resource.expiresIn} days</p>
                            </div>


                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Resource Feedback</DialogTitle>
                                <DialogDescription>
                                  Provide feedback on {resource.name}'s performance
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <Label>Rating</Label>
                                  <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star key={star} className="h-6 w-6 text-yellow-500 cursor-pointer" />
                                    ))}
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Comments</Label>
                                  <Textarea placeholder="Share your feedback about this resource's performance..." />
                                </div>
                                <div className="flex justify-end space-x-3">
                                  <DialogTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                  </DialogTrigger>
                                  <Button variant="uk-client">Submit Feedback</Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Active Resources */}
<TabsContent value="active-resources" className="space-y-6">
  <Card>
    <CardHeader>
    <div className="flex items-center justify-between">
      <div>
      <CardTitle>Active Resources</CardTitle>
      <CardDescription>Currently engaged resources and their status</CardDescription>
      </div>
      <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search active resources..."
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                </div>
    </CardHeader>
    
    <CardContent>
      <div className="space-y-4">
        {filteredActiveResources
          .filter(r => r.status === "active")
          .map((resource) => (
          <Card key={resource.id} className="border-l-4 border-l-uk-client">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{resource.name}</h3>
                    <p className="text-muted-foreground">{resource.role}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <p>Utilization Rate {resource.utilizationRate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Start Date</p>
                      <p className="font-medium">{resource.startDate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Last Paused Date</p>
                      <p className="font-medium">{resource.lastPausedDate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Days Worked</p>
                      <p className="font-medium">{resource.daysActive} days</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-6">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Pause className="mr-2 h-4 w-4" />
                    Pause
                  </Button>
                  <div className="flex items-center space-x-1 mt-1">
                    <p>Expiring in</p>
                    <p className="text-red-500 font-medium">{resource.expiresIn} days</p>
                  </div>
                </div>

                
              </div>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
</TabsContent>

{/* Paused Resources */}
<TabsContent value="paused-resources" className="space-y-6">
  <Card>
    <CardHeader>
    <div className="flex items-center justify-between">
      <div>
      <CardTitle>Paused Resources</CardTitle>
      <CardDescription>Resources currently on hold</CardDescription>
      </div>
      <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search active resources..."
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {filteredActiveResources
          .filter(r => r.status === "paused")
          .map((resource) => (
          <Card key={resource.id} className="border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{resource.name}</h3>
                    <p className="text-muted-foreground">{resource.role}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <p>Utilization Rate {resource.utilizationRate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Start Date</p>
                      <p className="font-medium">{resource.startDate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Last Paused Date</p>
                      <p className="font-medium">{resource.lastPausedDate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Days Worked</p>
                      <p className="font-medium">{resource.daysActive} days</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-6">
                  <Button variant="outline" size="sm">
                    <Pause className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Activate
                  </Button>
                  <div className="flex items-center space-x-1 mt-1">
                    <p>Expiring in</p>
                    <p className="text-red-500 font-medium">{resource.expiresIn} days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
</TabsContent>

{/* Expired Resources */}
<TabsContent value="expired-resources" className="space-y-6">
  <Card>
    <CardHeader>
    <div className="flex items-center justify-between">
      <div>
      <CardTitle>Expired Resources</CardTitle>
      <CardDescription>Resources whose banking/activation has expired</CardDescription>
      </div>
      <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search active resources..."
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {filteredActiveResources.map((resource) => (
          <Card key={resource.id} className="border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{resource.name}</h3>
                    <p className="text-muted-foreground">{resource.role}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <p>Utilization Rate {resource.utilizationRate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Start Date</p>
                      <p className="font-medium">{resource.startDate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Last Paused Date</p>
                      <p className="font-medium">{resource.lastPausedDate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Days Worked</p>
                      <p className="font-medium">{resource.daysActive} days</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-6">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="outline" size="sm">Request Banking</Button>
                  <Button variant="outline" size="sm">View Feedback</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
</TabsContent>

{/* Other Resources */}
<TabsContent value="other-resources" className="space-y-6">
  <Card>
    <CardHeader>
    <div className="flex items-center justify-between">
      <div>
      <CardTitle>Other Resources</CardTitle>
      <CardDescription>Resources outside active/paused/expired categories</CardDescription>
      </div>
      <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search active resources..."
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {filteredActiveResources.map((resource) => (
          <Card key={resource.id} className="border-l-4 border-l-gray-400">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{resource.name}</h3>
                    <p className="text-muted-foreground">{resource.role}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <p>Utilization Rate {resource.utilizationRate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Start Date</p>
                      <p className="font-medium">{resource.startDate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Last Paused Date</p>
                      <p className="font-medium">{resource.lastPausedDate}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-muted-foreground">Days Worked</p>
                      <p className="font-medium">{resource.daysActive} days</p>
                    </div>
                  </div>
                </div>

                <div className="ml-6">
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
</TabsContent>


        <TabsContent value="request-activation" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Available for Activation</CardTitle>
                <CardDescription>Banked resources ready for activation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableResources.map((resource) => (
                    <Card key={resource.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{resource.name}</h4>
                          <p className="text-sm text-muted-foreground">{resource.role}</p>
                          <p className="text-xs text-muted-foreground">{resource.supplier}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {resource.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          {resource.canActivate ? (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="uk-client" size="sm">
                                  <Play className="mr-2 h-4 w-4" />
                                  Activate
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Activate Resource</DialogTitle>
                                  <DialogDescription>
                                    Configure activation details for {resource.name}
                                  </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleActivationRequest} className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                      <Label>Start Date</Label>
                                      <Popover>
                                        <PopoverTrigger asChild>
                                          <Button
                                            variant="outline"
                                            className={cn(
                                              "w-full justify-start text-left font-normal",
                                              !activationDate && "text-muted-foreground"
                                            )}
                                          >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {activationDate ? format(activationDate, "PPP") : "Pick a date"}
                                          </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                          <Calendar
                                            mode="single"
                                            selected={activationDate}
                                            onSelect={setActivationDate}
                                            initialFocus
                                          />
                                        </PopoverContent>
                                      </Popover>
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Hours per Day</Label>
                                      <Select>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select hours" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="4">4 hours</SelectItem>
                                          <SelectItem value="6">6 hours</SelectItem>
                                          <SelectItem value="8">8 hours</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Project Name</Label>
                                    <Input placeholder="Enter project name" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Scope of Work</Label>
                                    <Textarea placeholder="Describe the work scope and responsibilities..." />
                                  </div>
                                  <div className="flex justify-end space-x-3">
                                    <DialogTrigger asChild>
                                      <Button variant="outline">Cancel</Button>
                                    </DialogTrigger>
                                    <Button type="submit" variant="uk-client">Request Activation</Button>
                                  </div>
                                </form>
                              </DialogContent>
                            </Dialog>
                          ) : (
                            <div className="text-center">
                              <Badge variant="outline" className="mb-2">
                                <Clock className="mr-1 h-3 w-3" />
                                Notice Required
                              </Badge>
                              <p className="text-xs text-muted-foreground">
                                {resource.noticeDays} days notice
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Activation Guidelines</CardTitle>
                <CardDescription>Important information about resource activation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Immediate Activation</h4>
                  <p className="text-sm text-muted-foreground">
                    Resources marked as "Ready" can be activated immediately with same-day start dates.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Notice Period</h4>
                  <p className="text-sm text-muted-foreground">
                    Some resources require advance notice. The system will automatically schedule activation after the notice period.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Pre-activation Checklist</h4>
                  <p className="text-sm text-muted-foreground">
                    Our operations team will complete technical setup, equipment verification, and introduction meetings before activation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}