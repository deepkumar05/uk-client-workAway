import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import { UKClientSidebar } from "./UKClientSidebar";
import { UKClientHeader } from "./UKClientHeader";
import { UKClientView } from "@/pages/UKClientPortal";

interface TalentViewDetailProps {
  job?: any   
}

export function TalentDetailView() {


  const { id } = useParams()

  // In real-world: fetch data with `id`
  const job = {
    role: "Frontend Developer",
    positions: 2,
    startDate: "2025-09-10",
    experience: "3+ years",
    budget: "₹80,000/month",
    mode: "Remote",
    skills: ["React", "TypeScript", "Tailwind"],
    summary: "Looking for an experienced frontend developer...",
    system: [
      { id: 1, name: "Alice", role: "React Dev", skills: ["React", "Next.js"] },
      { id: 2, name: "Bob", role: "UI Engineer", skills: ["Tailwind", "Figma"] },
    ]
  }


  return (



    <SidebarProvider>
    <div className="min-h-screen flex w-full bg-background">
      <UKClientSidebar currentView={"dashboard"} onViewChange={function (view: UKClientView): void {
          throw new Error("Function not implemented.");
        } }  />
      <div className="flex-1 flex flex-col">
        <UKClientHeader />
        <main className="flex-1 p-6">



    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{job.role}</h1>
          <p className="text-muted-foreground">Need experienced {job.role}</p>
        </div>
      </div>

      {/* Job Description */}
      <Card>
        <CardHeader>
          <CardTitle>Job Description</CardTitle>
          <CardDescription>{job.role}</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div><strong>Positions:</strong> {job.positions}</div>
          <div><strong>Start Date:</strong> {job.startDate}</div>
          <div><strong>Experience:</strong> {job.experience}</div>
          <div><strong>Budget:</strong> {job.budget}</div>
          <div><strong>Mode:</strong> {job.mode}</div>
          <div className="flex gap-2">
            {job.skills.map((s: string, i: number) => (
              <Badge key={i}>{s}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{job.summary}</p>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="system">
        <TabsList>
          <TabsTrigger value="system">System Populated ({job.system.length})</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">System Populated Candidates</h2>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search candidates..." className="pl-8" />
            </div>
          </div>

          {job.system.map((c: any) => (
            <Card key={c.id}>
              <CardContent className="flex justify-between items-center p-4">
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.role}</p>
                  <p className="text-sm">Skills: {c.skills.join(", ")}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">View Details</Button>
                  <Button>Shortlist</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>


    </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
