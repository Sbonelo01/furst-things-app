import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube, Music, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full gradient-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full gradient-accent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-primary/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-gradient leading-tight">
            NEW DROP
            <br />
            AVAILABLE NOW
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-6 mb-12">
            <a
              href="#"
              className="p-3 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-smooth hover:scale-110"
            >
              <Facebook className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-smooth hover:scale-110"
            >
              <Twitter className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-smooth hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-smooth hover:scale-110"
            >
              <Youtube className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-smooth hover:scale-110"
            >
              <Music className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-smooth hover:scale-110"
            >
              <Play className="w-6 h-6 text-foreground" />
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="lg" className="text-2xl">
            SHOP HERE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;