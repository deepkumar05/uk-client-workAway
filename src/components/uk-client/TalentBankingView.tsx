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
import {
  Plus,
  Search,
  Download,
  Calendar,
  User,
  Building,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Users,
  Play,
  CreditCard,
  TrendingUp,
  Eye,
  Trash2,
  HelpCircle,
  MessageCircle,
  Headphones
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export function TalentBankingView() {
  const navigate = useNavigate();


  const handleViewClick = (id: number) => {
    navigate(`/talents-view-detail/${id}`)
  }

  const stats = [
    {
      title: "Open Requests",
      value: "8",
      description: "Submitted request for resources",
      icon: Users,
      trend: "",
    },
    {
      title: "Completed Requests",
      value: "2",
      description: "Resource acquired completed",
      icon: Play,
      trend: "+1 this week",
    },
    {
      title: "Scheduled Meetings",
      value: "6",
      description: "Upcoming scheduled meetings",
      icon: CreditCard,
      trend: "-8% from last month",
    },
    {
      title: "Banks candidates",
      value: "15",
      description: "Total banked candidates",
      icon: TrendingUp,
      trend: "+12% improvement",
    }
  ]


  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const bankedResources = [
    {
      id: 111,
      name: "John Doe",
      role: "Senior React Developer",
      previousResourcesNeeded: 3,
      currentResourcesNeeded: 6,
      noOfResources: 3,
      budget: "$40/hr - $60/hr",
      opening: "change from 2 to 4",
      preferedStartDate: "2024-02-01",
      supplier: "TechCorp India",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "5+ years",
      bankingDate: "2024-01-15",
      expiryDate: "2024-07-15",
      status: "In Progress",
      canActivate: true,
      agreementUrl: "#",
    },
    {
      id: 121,
      name: "John Doe",
      role: "Junior Angular Developer",
      previousResourcesNeeded: 3,
      currentResourcesNeeded: 6,
      noOfResources: 3,
      budget: "$40/hr - $60/hr",
      opening: "change from 2 to 4",
      preferedStartDate: "2024-02-01",
      supplier: "TechCorp India",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "5+ years",
      bankingDate: "2024-01-15",
      expiryDate: "2024-07-15",
      status: "Awaiting",
      canActivate: true,
      agreementUrl: "#",
    },
    {
      id: 321,
      name: "John Doe",
      role: "Dotnet Developer",
      previousResourcesNeeded: 3,
      currentResourcesNeeded: 6,
      noOfResources: 3,
      budget: "$40/hr - $60/hr",
      opening: "change from 2 to 4",
      preferedStartDate: "2024-02-01",
      supplier: "TechCorp India",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "5+ years",
      bankingDate: "2024-01-15",
      expiryDate: "2024-07-15",
      status: "In Progress",
      canActivate: true,
      agreementUrl: "#",
    },
  ];

  const getID = (Id: number) => {
    return <Badge className="bg-gray-300 text-black">{Id}</Badge>
  }


  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Badge className="bg-success text-white">In Progress</Badge>;
      case "Awaiting":
        return <Badge className="bg-warning text-white">Awaiting</Badge>;
      case "unFullfiled":
        return <Badge variant="destructive">Un Fullfilled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleSubmitRequest = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Talent Request Submitted",
      description: "Your request has been sent to our operations team for processing.",
    });
  };

  const filteredResources = bankedResources.filter(resource =>
    resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Talent Banking</h1>
          <p className="text-muted-foreground mt-2">
            Manage your banked resources and submit new talent requests.
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

      <Tabs defaultValue="banked-resources" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="banked-resources">Open Requests</TabsTrigger>
            <TabsTrigger value="pending-requests">Complete Requests</TabsTrigger>
          </TabsList>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="bg-[#1A5EE8] hover:bg-[#164bb5] text-white"
              >
                <Plus className="mr-2 h-4 w-4" />
                Submit Talent Request
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Submit New Talent Request</DialogTitle>
                <DialogDescription>
                  Describe the role and requirements for the talent you need to bank.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitRequest} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role-title">Role Title</Label>
                    <Input
                      id="role-title"
                      placeholder="e.g., Senior React Developer"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience-level">Experience Level</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                        <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior (5+ years)</SelectItem>
                        <SelectItem value="lead">Lead/Architect (8+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="skills">Required Skills</Label>
                    <Input
                      id="skills"
                      placeholder="e.g., React, TypeScript, Node.js"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Budget Range</Label>
                    <Input
                      id="skills"
                      placeholder="e.g., date"

                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Expected Duration</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="12-months">12+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Within 4 weeks</SelectItem>
                        <SelectItem value="medium">Medium - Within 2 weeks</SelectItem>
                        <SelectItem value="high">High - Within 1 week</SelectItem>
                        <SelectItem value="urgent">Urgent - ASAP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Preffered Start Date</Label>
                    <Input
                      id="skills"
                      placeholder="e.g., date"

                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Certifications</Label>
                    <Input
                      id="skills"
                      placeholder="e.g., aws, azure"

                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Role Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed description of the role, responsibilities, and any specific requirements..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <DialogTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogTrigger>
                  <Button
                    type="submit"
                    className="bg-[#1A5EE8] hover:bg-[#164bb5] text-white"
                  >
                    Submit Request
                  </Button>

                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>



        <TabsContent value="banked-resources" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Open Requests</CardTitle>
                  <CardDescription>Manage resource requests</CardDescription>
                </div>

                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search requests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>

              </div>
            </CardHeader>
            <CardContent>

              <div className="space-y-4">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="border-l-4 border-l-uk-client">
                    <CardContent className="p-6 relative">

                      <button
                        className="absolute top-4 right-4 text-muted-foreground hover:text-uk-client"
                        aria-label="Customer Support"
                      >
                        <Headphones className="h-5 w-5" />
                      </button>


                      <div className="flex items-center justify-between">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-4">
                            <div>

                              <h3 className="font-semibold text-lg">{resource.role}</h3>

                              <p className="text-muted-foreground">No. of Resouces - {resource.noOfResources}</p>
                            </div>

                            {getID(resource.id)}
                            {getStatusBadge(resource.status)}


                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <span>Budget - {resource.budget}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span>{resource.experience}</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
                              <div className="flex flex-col">
                                <span className="text-xs font-medium text-muted-foreground">
                                  Preferred Start Date:
                                </span>
                                <span className="text-sm">{resource.expiryDate}</span>
                              </div>
                            </div>

                          </div>

                          <div className="flex flex-wrap gap-2">
                            {resource.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary">{skill}</Badge>
                            ))}
                          </div>

                          <div className="flex items-center space-x-2  gap-4 text-sm text-muted-foreground">
                            <span>Change from - {resource.previousResourcesNeeded} to {resource.currentResourcesNeeded}</span>
                          </div>

                        </div>

                        <div className="flex flex-col space-y-2 ml-6">


                          <Button variant="outline" size="sm" onClick={() => handleViewClick(resource.id)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Detail
                          </Button>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                                Delete Request
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Confirm Deletion</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to delete this request? This action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="flex justify-end gap-3">
                                <DialogTrigger asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogTrigger>
                                <Button variant="destructive">Delete</Button>
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

        <TabsContent value="pending-requests" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                {/* Left side → title + description */}
                <div>
                  <CardTitle>Completed Requests</CardTitle>
                  <CardDescription>Request completed successfully</CardDescription>
                </div>

                {/* Right side → search + filter aligned in same row */}
                <div className="flex items-center gap-3">
                  {/* 🔎 Search Bar */}
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search completed..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>

                  {/* 🏷️ Status Filter */}
                  <Select onValueChange={(val) => console.log("Filter status:", val)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="unFullfiled">Unfulfilled</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="awaiting">Awaiting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>





            <CardContent>

              <div className="space-y-4">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="border-l-4 border-l-uk-client">
                    <CardContent className="p-6 relative">



                      <div className="flex items-center justify-between">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-4">
                            <div>

                              <h3 className="font-semibold text-lg">{resource.role}</h3>

                              <p className="text-muted-foreground">No. of Resouces - {resource.noOfResources}</p>
                            </div>

                            {getID(resource.id)}
                            {getStatusBadge("unFullfiled")}


                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <span>Budget - {resource.budget}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span>{resource.experience}</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
                              <div className="flex flex-col">
                                <span className="text-xs font-medium text-muted-foreground">
                                  Requested Date:
                                </span>
                                <span className="text-sm">{resource.expiryDate}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
                              <div className="flex flex-col">
                                <span className="text-xs font-medium text-muted-foreground">
                                  Preferred Start Date:
                                </span>
                                <span className="text-sm">{resource.expiryDate}</span>
                              </div>
                            </div>

                          </div>

                          <div className="flex flex-wrap gap-2">
                            {resource.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary">{skill}</Badge>
                            ))}
                          </div>

                          <div className="flex items-center space-x-2  gap-4 text-sm text-muted-foreground">
                            <span>Change from - {resource.previousResourcesNeeded} to {resource.currentResourcesNeeded}</span>
                          </div>

                        </div>

                        <div className="flex flex-col space-y-2 ml-6">


                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            View Detail
                          </Button>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <MessageCircle className="mr-2 h-4 w-4 text-red-500" />
                                Comments
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Add Comment</DialogTitle>
                                <DialogDescription>
                                  Write your comment for this request below:
                                </DialogDescription>
                              </DialogHeader>
                              <Textarea placeholder="Enter your comment..." className="min-h-[100px]" />
                              <div className="flex justify-end gap-3">
                                <DialogTrigger asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogTrigger>
                                <Button className="bg-[#1A5EE8] hover:bg-[#164bb5] text-white">
                                  Submit Comment
                                </Button>
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
      </Tabs>
    </div>

  );
}