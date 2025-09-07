import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { UKClientSidebar } from "@/components/uk-client/UKClientSidebar";
import { UKClientHeader } from "@/components/uk-client/UKClientHeader";
import { TalentBankingView } from "@/components/uk-client/TalentBankingView";
import { ResourceActivationView } from "@/components/uk-client/ResourceActivationView";
import { BillingFinanceView } from "@/components/uk-client/BillingFinanceView";
import { SupportCommunicationView } from "@/components/uk-client/SupportCommunicationView";
import { DashboardView } from "@/components/uk-client/DashboardView";

export type UKClientView = 
  | "dashboard" 
  | "profile" 
  | "talent-banking" 
  | "resource-activation" 
  | "billing-finance" 
  | "support-communication";

const UKClientPortal = () => {
  const [currentView, setCurrentView] = useState<UKClientView>("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView onNavigate={setCurrentView} />;
      case "talent-banking":
        return <TalentBankingView />;
      case "resource-activation":
        return <ResourceActivationView />;
      case "billing-finance":
        return <BillingFinanceView />;
      case "support-communication":
        return <SupportCommunicationView />;
      default:
        return <DashboardView onNavigate={setCurrentView} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <UKClientSidebar currentView={currentView} onViewChange={setCurrentView} />
        <div className="flex-1 flex flex-col">
          <UKClientHeader />
          <main className="flex-1 p-6">
            {renderView()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default UKClientPortal;