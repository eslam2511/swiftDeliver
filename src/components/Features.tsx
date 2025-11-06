import { Zap, Shield, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your packages delivered in record time with our optimized delivery routes and dedicated fleet.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your packages are fully insured and tracked every step of the way with real-time updates.",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock delivery service to meet your needs, whenever and wherever you need us.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Delivering to over 500+ cities nationwide with expanding coverage every month.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional service to deliver an unmatched experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-border shadow-card hover:shadow-soft transition-smooth hover:-translate-y-2 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
