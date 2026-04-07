import { Sparkles, Calendar, BarChart3, Globe, Wand2, Users, Palette, Building2 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description: "Generate engaging posts, captions, and visuals tailored to your brand voice in seconds.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI picks the best times to post based on audience behavior and engagement data.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Deep insights into what's working with actionable recommendations to boost growth.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Publishing",
    description: "Create once, publish everywhere — Instagram, TikTok, LinkedIn, X, Facebook & more.",
  },
  {
    icon: Wand2,
    title: "Brand Voice AI",
    description: "Train the AI on your unique brand tone and style for consistently on-brand content.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Approval workflows, role-based access, and shared content calendars for your team.",
  },
  {
    icon: Palette,
    title: "Creative Studio",
    description: "Design stunning visuals, edit videos, and craft scroll-stopping creatives — all in one powerful studio.",
  },
  {
    icon: Building2,
    title: "Multi-Brand Workspaces",
    description: "Manage multiple brands from a single dashboard with isolated content, assets, and team permissions.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Everything You Need to <span className="text-gradient">Win on Social</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Our AI agents handle the entire content lifecycle — from ideation to publishing to optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:glow-primary transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
