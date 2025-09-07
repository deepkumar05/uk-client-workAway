import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Download,
  Search,
  TrendingUp,
  TrendingDown,
  CreditCard,
  FileText,
  Calendar,
  DollarSign,
  Receipt,
  Eye
} from "lucide-react";

export function BillingFinanceView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("current-month");

  const invoicesDue = [
    { id: 1, week: "July 22 – July 28, 2025", amount: "£1,64,000" },
    { id: 2, week: "July 14 – July 21, 2025", amount: "£1,05,000" },
    { id: 3, week: "July 07 – July 13, 2025", amount: "£1,17,000" },
    { id: 4, week: "July 01 – July 06, 2025", amount: "£1,00,000" },
    { id: 5, week: "June 25 – July 31, 2025", amount: "£1,08,000" },
  ];


  const billingStats = [
    {
      title: "This Month",
      amount: "£15,420",
      change: "+12%",
      trend: "up",
      description: "Current month usage"
    },
    {
      title: "Last Month",
      amount: "£13,750",
      change: "-8%",
      trend: "down",
      description: "Previous month usage"
    },
    {
      title: "YTD Total",
      amount: "£89,340",
      change: "+24%",
      trend: "up",
      description: "Year to date spending"
    },
    {
      title: "Annual Commitment",
      amount: "£150,000",
      change: "59%",
      trend: "commitment",
      description: "Used of minimum commitment"
    }
  ];

  const bankingInvoices = [
    {
      id: "INV-2024-001",
      candidateName: "John Doe",
      role: "React Developer",
      amount: "£2,500",
      date: "2024-01-15",
      status: "paid",
      dueDate: "2024-01-30"
    },
    {
      id: "INV-2024-002",
      candidateName: "Sarah Smith",
      role: "UI/UX Designer",
      amount: "£2,200",
      date: "2023-12-20",
      status: "paid",
      dueDate: "2024-01-05"
    },
    {
      id: "INV-2024-003",
      candidateName: "Mike Johnson",
      role: "DevOps Engineer",
      amount: "£2,800",
      date: "2024-01-10",
      status: "pending",
      dueDate: "2024-01-25"
    }
  ];

  const usageBilling = [
    {
      id: "UB-2024-001",
      resourceName: "Alice Brown",
      role: "Senior React Developer",
      daysUsed: 15,
      hoursPerDay: 8,
      dailyRate: "£450",
      totalAmount: "£6,750",
      period: "Jan 1-15, 2024",
      
    },
    {
      id: "UB-2024-002",
      resourceName: "David Lee",
      role: "Senior React Developer",
      daysUsed: 10,
      hoursPerDay: 6,
      dailyRate: "£520",
      totalAmount: "£5,200",
      period: "Jan 15-25, 2024",
      
    },
    {
      id: "UB-2023-012",
      resourceName: "Emma Wilson",
      role: "Senior React Developer",
      daysUsed: 22,
      hoursPerDay: 8,
      dailyRate: "£380",
      totalAmount: "£8,360",
      period: "Dec 1-22, 2023",
      
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-success text-white">Paid</Badge>;
      case "pending":
        return <Badge className="bg-warning text-white">Pending</Badge>;
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>;
      case "current":
        return <Badge className="bg-uk-client text-white">Current</Badge>;
      case "invoiced":
        return <Badge variant="secondary">Invoiced</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      case "commitment":
        return <DollarSign className="h-4 w-4 text-uk-client" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing & Finance</h1>
          <p className="text-muted-foreground mt-2">
            Track your spending, invoices, and financial commitments.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="ytd">Year to Date</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Billing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {billingStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {getTrendIcon(stat.trend)}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.amount}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              {stat.trend === "commitment" ? (
                <div className="mt-3">
                  <Progress value={59} className="h-2 bg-white [&>div]:bg-[#41E610]" />
                  <p className="text-xs text-muted-foreground mt-1">59% of annual minimum</p>
                </div>
              ) : (
                <p className={`text-xs mt-1 ${stat.trend === "up" ? "text-[#1A5EE7]" : "text-destructive"}`}>
                  {stat.change} from last period
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="usage-billing" className="space-y-6">
        <TabsList>
          <TabsTrigger value="usage-billing">Usage Billing</TabsTrigger>
          <TabsTrigger value="invoices-due">Invoices Due</TabsTrigger>
          <TabsTrigger value="cleared-invoices">Cleared Invoices</TabsTrigger>
          <TabsTrigger value="commitment-tracker">Commitment Tracker</TabsTrigger>
        </TabsList>

        <TabsContent value="usage-billing" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Usage Billing Tracker</CardTitle>
                  <CardDescription>Track daily usage and costs for active resources</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search usage records..."
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {usageBilling.map((usage) => (
                  <Card key={usage.id} className="border-l-4 border-l-uk-client">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h3 className="font-semibold text-lg">{usage.resourceName}</h3>
                              <p className="text-muted-foreground">{usage.role}</p>
                            </div>
                          
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="font-medium">Period</p>
                              <p className="text-muted-foreground">{usage.period}</p>
                            </div>
                            <div>
                              <p className="font-medium">Days Used</p>
                              <p className="text-muted-foreground">{usage.daysUsed} days</p>
                            </div>
                            <div>
                              <p className="font-medium">Daily Rate</p>
                              <p className="text-muted-foreground">{usage.dailyRate}</p>
                            </div>
                            <div>
                              <p className="font-medium">Grand Total</p>
                              <p className="text-muted-foreground">{usage.totalAmount}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-1 ml-6">
                          {/* Earnings Label */}
                          <p className="text-xm text-left text-muted-foreground text-gray-700">
                            Earnings
                          </p>

                          {/* Earnings Box */}
                          <div className="self-end rounded-md border border-green-400 bg-green-50 px-3 py-2 text-right w-fit">
                            <p className="text-lg font-semibold text-green-700 leading-tight">
                              {usage.totalAmount}
                            </p>
                            <p className="text-[11px] text-green-600 mb-1">
                              {usage.dailyRate} × {usage.daysUsed} Days
                            </p>

                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 px-2 py-0 text-[11px] border-green-600 text-green-700 hover:bg-green-100 hover:text-black"
                            >
                              <Receipt className="mr-1 h-3 w-3" />
                              View Receipt
                            </Button>
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

        <TabsContent value="invoices-due" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoices Due({invoicesDue.length})</CardTitle>
              <CardDescription>Track uncleared invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {invoicesDue.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-3 hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">Week: {invoice.week}</p>
                      <p className="text-sm text-muted-foreground">Total Due: {invoice.amount}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-5 w-5 text-gray-600" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>


        <TabsContent value="cleared-invoices" className="space-y-6">
  <Card>
    <CardHeader>
      <CardTitle>Cleared Invoices({bankingInvoices.length})</CardTitle>
      <CardDescription>Track daily usage and costs for active resources</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {bankingInvoices.map((invoice) => (
          <Card key={invoice.id} className="border-l-4 border-l-[#1A5EE7]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                {/* Left side details */}
                <div className="space-y-2">
                  <h3 className="font-semibold">{invoice.candidateName}</h3>
                  <p className="text-muted-foreground">{invoice.role}</p>
                  <p className="text-sm">
                    <span className="font-medium">Billing Period:</span>{" "}
                    15–21 July 2025
                  </p>
                </div>

                {/* Right side details */}
                <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-right">
                  <div>
                    <p className="font-medium">Daily Rate</p>
                    <p className="text-muted-foreground">£450</p>
                  </div>
                  <div>
                    <p className="font-medium">Billed Date</p>
                    <p className="text-muted-foreground">22 July 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">Days Worked</p>
                    <p className="text-muted-foreground">5 days</p>
                  </div>
                  <div>
                    <p className="font-medium">Due Date</p>
                    <p className="text-muted-foreground">28 July 2025</p>
                  </div>
                </div>

                {/* View button */}
                <Button variant="outline" className="ml-6">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
</TabsContent>


        <TabsContent value="commitment-tracker" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Annual Commitment Tracker</CardTitle>
              <CardDescription>Monitor your progress towards minimum annual commitment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Annual Commitment</p>
                  <p className="text-3xl font-bold">£150,000</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Used to Date</p>
                  <p className="text-3xl font-bold text-uk-client">£89,340</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Remaining</p>
                  <p className="text-3xl font-bold text-warning">£60,660</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">59% Complete</span>
                </div>
                <Progress value={59} className="h-4 bg-white [&>div]:bg-[#41E610]" />
                </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Commitment Status</h4>
                <p className="text-sm text-muted-foreground">
                  You're on track to meet your annual commitment. Based on current usage patterns,
                  you're projected to reach £145,000 by year end.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}