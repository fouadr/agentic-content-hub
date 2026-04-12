import { Sparkles, Globe, Brain, Clapperboard, ShieldCheck, LayoutDashboard, BarChart3, CalendarClock } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Campaign Engine",
    description: "Seven specialized AI agents — strategy, data analysis, copywriting, creative direction, compliance, operations, and reporting — generate publish-ready campaigns in under 90 seconds.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Publishing",
    description: "Publish directly to Instagram and LinkedIn from one dashboard. Schedule posts for optimal timing or publish immediately after review.",
  },
  {
    icon: Brain,
    title: "Brand Intelligence",
    description: "Upload brand guidelines and reference documents. AI indexes everything and generates on-brand content using retrieval-augmented generation — every time.",
  },
  {
    icon: Clapperboard,
    title: "Creative Studio",
    description: "Design branded visuals with smart cropping and overlay templates, or generate AI avatar videos with text-to-speech — all from the campaign review page.",
  },
  {
    icon: ShieldCheck,
    title: "Review, Approve & Comply",
    description: "Every campaign passes four automated guardrails — brand safety, budget caps, legal compliance, and CTA quality — before landing in your approval queue.",
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Brand Workspaces",
    description: "Manage multiple brands and clients from a single platform. Each workspace gets its own brand profile, content library, social accounts, and team permissions.",
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Nightly analytics sync pulls real performance data from Meta and LinkedIn back into your dashboard. No more manual spreadsheet exports.",
  },
  {
    icon: CalendarClock,
    title: "Campaign Series",
    description: "Build multi-step drip campaigns with automated scheduling. Each step generates and publishes on your timeline — set it and let the AI handle the rest.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Everything You Need to <span className="text-gradient">Run Campaigns on Autopilot</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From strategy to publishing to reporting — AI agents handle the entire campaign lifecycle so you can focus on growing your business.
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
