import PageLayout from "@/components/PageLayout";
import { Plug, Instagram, Facebook, Youtube, Twitter, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrations = [
  { name: "Instagram", description: "Schedule posts, reels, and stories directly to Instagram.", icon: Instagram, status: "Available" },
  { name: "Facebook", description: "Publish to pages, groups, and manage ad campaigns.", icon: Facebook, status: "Available" },
  { name: "YouTube", description: "Upload videos, shorts, and manage your channel content.", icon: Youtube, status: "Available" },
  { name: "X (Twitter)", description: "Compose and schedule tweets, threads, and polls.", icon: Twitter, status: "Available" },
  { name: "LinkedIn", description: "Share professional content and manage company pages.", icon: Linkedin, status: "Available" },
  { name: "TikTok", description: "Create and schedule TikTok videos with trending sounds.", icon: Globe, status: "Coming Soon" },
  { name: "Pinterest", description: "Pin images and manage boards for visual marketing.", icon: Globe, status: "Coming Soon" },
  { name: "Shopify", description: "Sync product data and create social commerce content.", icon: Globe, status: "Coming Soon" },
];

const Integrations = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Plug className="w-4 h-4" />
            Integrations
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Connect Your Favorite Platforms</h1>
          <p className="text-muted-foreground">Seamlessly integrate with the tools and platforms you already use to streamline your content workflow.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {integrations.map((item) => (
            <div key={item.name} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.status === "Available" ? "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]" : "bg-muted text-muted-foreground"}`}>
                  {item.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Integrations;