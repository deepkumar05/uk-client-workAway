import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  variant: "uk-client" | "admin" | "supplier" | "delivery-manager" | "india-ops" | "uk-coordinator";
  onSelect: () => void;
}

export function RoleCard({ title, description, features, icon: Icon, variant, onSelect }: RoleCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg bg-${variant}/10`}>
            <Icon className={`h-6 w-6 text-${variant}`} />
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full bg-${variant}`} />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        <Button 
          variant={variant} 
          size="lg" 
          className="w-full group-hover:scale-105 transition-transform duration-200"
          onClick={onSelect}
        >
          Access {title} Portal
        </Button>
      </CardContent>
    </Card>
  );
}