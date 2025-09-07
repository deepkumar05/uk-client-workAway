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
  Plus,
  Search,
  MessageSquare,
  Calendar as CalendarIcon,
  Clock,
  HelpCircle,
  Book,
  Phone,
  Mail,
  Star,
  TrendingUp,
  CreditCard,
  Users,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export function SupportCommunicationView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [meetingDate, setMeetingDate] = useState<Date>();
  const { toast } = useToast();

  const supportTickets = [
    {
      id: "TICK-2024-001",
      title: "Invoice discrepancy for January billing",
      category: "billing",
      status: "open",
      priority: "medium",
      created: "2024-01-20",
      lastUpdate: "2024-01-22",
      messages: 3
    },
    {
      id: "TICK-2024-002",
      title: "Resource performance concerns",
      category: "performance",
      status: "in-progress",
      priority: "high",
      created: "2024-01-18",
      lastUpdate: "2024-01-21",
      messages: 5
    },
    {
      id: "TICK-2024-003",
      title: "Technical setup assistance needed",
      category: "technical",
      status: "resolved",
      priority: "low",
      created: "2024-01-15",
      lastUpdate: "2024-01-19",
      messages: 7
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: "Weekly Resource Review",
      attendees: ["John Smith (Delivery Lead)", "You"],
      date: "2024-01-25",
      time: "14:00",
      duration: "30 minutes",
      type: "recurring"
    },
    {
      id: 2,
      title: "Project Kickoff - React Developer",
      attendees: ["Sarah Johnson (Account Manager)", "You"],
      date: "2024-01-26",
      time: "10:00",
      duration: "45 minutes",
      type: "one-time"
    }
  ];

  const knowledgeBaseArticles = [
    {
      title: "Understanding the Talent Banking Model",
      category: "Getting Started",
      readTime: "5 min",
      popular: true
    },
    {
      title: "How to Activate Banked Resources",
      category: "Resource Management",
      readTime: "3 min",
      popular: true
    },
    {
      title: "Billing and Invoice Explanations",
      category: "Billing",
      readTime: "7 min",
      popular: false
    },
    {
      title: "Resource Performance Guidelines",
      category: "Best Practices",
      readTime: "4 min",
      popular: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-destructive text-white">Open</Badge>;
      case "in-progress":
        return <Badge className="bg-warning text-white">In Progress</Badge>;
      case "resolved":
        return <Badge className="bg-success text-white">Resolved</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge className="bg-warning text-white">Medium</Badge>;
      case "low":
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  const handleTicketSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Support Ticket Created",
      description: "Your ticket has been submitted and will be reviewed by our support team.",
    });
  };

  const handleMeetingSchedule = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Meeting Scheduled",
      description: "Your meeting request has been sent. You'll receive a confirmation shortly.",
    });
  };


  const stats = [
    {
      title: "Total ticket",
      value: "12",
      description: "Requiring Attention",
      icon: Users,
      trend: "+2 this month",
    },
    {
      title: "Opens",
      value: "6",
      description: "Open ticket",
      icon: Play,
      trend: "+1 this week",
    },
    {
      title: "Closed",
      value: "3",
      description: "Closed tickets",
      icon: CreditCard,
      trend: "-8% from last month",
    },
    {
      title: "Inprogress",
      value: "3",
      description: "This week",
      icon: TrendingUp,
      trend: "+12% improvement",
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Support & Communication</h1>
          <p className="text-muted-foreground mt-2">
            Get help, schedule meetings, and access resources.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Dialog>

            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Schedule a Meeting</DialogTitle>
                <DialogDescription>
                  Book a call with your delivery lead or account manager.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleMeetingSchedule} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Meeting Type</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="review">Resource Review</SelectItem>
                        <SelectItem value="planning">Project Planning</SelectItem>
                        <SelectItem value="issue">Issue Discussion</SelectItem>
                        <SelectItem value="onboarding">Resource Onboarding</SelectItem>
                        <SelectItem value="general">General Discussion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !meetingDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {meetingDate ? format(meetingDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={meetingDate}
                        onSelect={setMeetingDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Meeting Topic</Label>
                  <Input placeholder="Brief description of what you'd like to discuss" required />
                </div>

                <div className="space-y-2">
                  <Label>Additional Notes</Label>
                  <Textarea placeholder="Any additional information or specific agenda items..." />
                </div>

                <div className="flex justify-end space-x-3">
                  <DialogTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogTrigger>
                  <Button type="submit" variant="uk-client">Schedule Meeting</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="uk-client" style={{ backgroundColor: "hsl(215 25% 98%)", color: "black" }}>
                <Plus className="mr-2 h-4 w-4" />
                Create Ticket
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create Support Ticket</DialogTitle>
                <DialogDescription>
                  Submit a support request and we'll get back to you promptly.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleTicketSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="billing">Billing & Finance</SelectItem>
                        <SelectItem value="technical">Technical Issues</SelectItem>
                        <SelectItem value="performance">Resource Performance</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Priority</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Subject</Label>
                  <Input placeholder="Brief description of the issue" required />
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Please provide detailed information about your issue or question..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <DialogTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogTrigger>
                  <Button type="submit" variant="uk-client">Create Ticket</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
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


      <Tabs defaultValue="support-tickets" className="space-y-6">
        <TabsList>
          <TabsTrigger value="support-tickets">Support Tickets</TabsTrigger>

          <TabsTrigger value="knowledge-base">Knowledge Base</TabsTrigger>

        </TabsList>

        <TabsContent value="support-tickets" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Your Support Tickets</CardTitle>
                  <CardDescription>Track and manage your support requests</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tickets..."
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <Card key={ticket.id} className="border-l-4 border-l-uk-client">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h3 className="font-semibold text-lg">{ticket.title}</h3>
                              <p className="text-muted-foreground text-sm">{ticket.id}</p>
                            </div>
                            {getStatusBadge(ticket.status)}
                            {getPriorityBadge(ticket.priority)}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Category</p>
                              <p className="font-medium capitalize">{ticket.category}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Created</p>
                              <p className="font-medium">{ticket.created}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Last Update</p>
                              <p className="font-medium">{ticket.lastUpdate}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Messages</p>
                              <p className="font-medium">{ticket.messages} messages</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center ml-6">
  <Button
    size="sm"
    className="bg-white text-black border border-black hover:bg-gray-100"
  >
    <MessageSquare className="mr-2 h-4 w-4" />
    View
  </Button>
</div>



                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>



        <TabsContent value="knowledge-base" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Help articles and guides for using WorkAway</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {knowledgeBaseArticles.map((article, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                    <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Book className="h-5 w-5 text-uk-client" />
                            {article.popular && (
                              <Badge variant="secondary">Popular</Badge>
                            )}
                          </div>
                          <h3 className="font-semibold mb-2">{article.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{article.category}</p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{article.readTime} read</span>
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


      </Tabs>
    </div>
  );
}