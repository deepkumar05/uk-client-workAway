import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  DollarSign, 
  Users, 
  Shield, 
  BarChart3, 
  Zap 
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "Talent Banking",
      description: "Bank skilled resources in advance without ongoing costs until activation"
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Activate banked resources within 24 hours with pre-validated readiness"
    },
    {
      icon: DollarSign,
      title: "Pay-When-Used",
      description: "Only pay for resources when they're actively working on your projects"
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Tailored portals for UK clients, Indian ops, suppliers, and admins"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into utilization, costs, and performance metrics"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "GDPR-compliant data handling with role-based access controls"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools for managing international IT talent operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}