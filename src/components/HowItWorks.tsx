import { Package, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Place Your Order",
    description: "Simply tell us what needs to be delivered and where it's going through our easy-to-use app.",
  },
  {
    icon: Truck,
    title: "We Pick It Up",
    description: "Our driver arrives at the pickup location and securely collects your package.",
  },
  {
    icon: CheckCircle,
    title: "Fast Delivery",
    description: "Track your package in real-time as it makes its way to the destination safely.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to get your package delivered quickly and safely.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
                
                <div className="relative text-center">
                  <div className="w-20 h-20 mx-auto rounded-full gradient-hero flex items-center justify-center mb-6 shadow-glow">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-soft">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
