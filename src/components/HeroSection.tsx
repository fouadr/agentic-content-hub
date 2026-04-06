import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-primary-foreground/80">Powered by Advanced AI Agents</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-primary-foreground">Create Content That</span>
          <br />
          <span className="text-gradient">Converts & Engages</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          AI agents that research, create, schedule, and optimize your social media content across every platform — while you focus on growing your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Start Creating for Free
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            <Play className="w-5 h-5 mr-1" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "50K+", label: "Creators" },
            { value: "2M+", label: "Posts Generated" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-sm text-primary-foreground/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
