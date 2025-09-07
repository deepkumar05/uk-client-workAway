import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="WorkAway Platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          WorkAway
          <span className="block text-accent text-4xl md:text-5xl mt-2">Talent Flow Platform</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          Streamline UK-India IT talent operations with our comprehensive platform. 
          Bank talent, activate on-demand, and manage the entire resource lifecycle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="enterprise" size="xl" className="min-w-48">
            Get Started
          </Button>
          <Button variant="outline" size="xl" className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-white/80">Banked Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">95%</div>
            <div className="text-white/80">Activation Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">24h</div>
            <div className="text-white/80">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}