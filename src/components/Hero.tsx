import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-slide-in">
              <Package className="w-4 h-4" />
              <span className="text-sm font-medium">Fast & Reliable Delivery</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Deliver Anything,
              <span className="block gradient-hero bg-clip-text text-transparent">
                Anywhere, Anytime
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Experience lightning-fast delivery services that bring your packages from point A to point B with unmatched speed and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Deliveries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">On Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:h-[600px] animate-fade-in">
            <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl rounded-full animate-float"></div>
            <img 
              src={heroImage} 
              alt="Fast delivery service with courier on scooter"
              className="relative rounded-3xl shadow-card w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 gradient-hero opacity-10 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 gradient-accent opacity-10 blur-3xl rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default Hero;
