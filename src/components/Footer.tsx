import { Package, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                <Package className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SwiftDeliver</span>
            </div>
            <p className="text-background/70 text-sm">
              Fast, reliable delivery services that bring your packages safely to their destination.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">Same-Day Delivery</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Express Shipping</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">International</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Freight Services</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Press</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Track Package</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © 2024 SwiftDeliver. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-smooth">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-smooth">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-smooth">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-smooth">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
