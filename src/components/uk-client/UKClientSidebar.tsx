import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  Play, 
  CreditCard, 
  MessageSquare,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { UKClientView } from "@/pages/UKClientPortal";

interface UKClientSidebarProps {
  currentView: UKClientView;
  onViewChange: (view: UKClientView) => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    view: "dashboard" as const,
  },
  {
    title: "Talent Banking",
    icon: Briefcase,
    view: "talent-banking" as const,
  },
  {
    title: "Resource",
    icon: Play,
    view: "resource-activation" as const,
  },
  {
    title: "Billing & Finance",
    icon: CreditCard,
    view: "billing-finance" as const,
  },
  {
    title: "Support & Communication",
    icon: MessageSquare,
    view: "support-communication" as const,
  },
];

export function UKClientSidebar({ currentView, onViewChange }: UKClientSidebarProps) {
  return (
    <Sidebar className="w-64">
     <SidebarHeader className="p-3 m-1 border-b">
  <div className="flex items-center justify-between">
    <h2 className="text-base font-semibold text-uk-client">UK Client Portal</h2>
    <Link to="/">
      <Button variant="ghost" size="sm">
        <ArrowLeft className="h-4 w-4" />
      </Button>
    </Link>
  </div>
</SidebarHeader>

      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.view}>
                  <SidebarMenuButton 
                    onClick={() => onViewChange(item.view)}
                    isActive={currentView === item.view}
                    className="w-full justify-start"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}