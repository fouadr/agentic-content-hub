import PageLayout from "@/components/PageLayout";
import { Users, Target, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We believe every creator deserves powerful tools to build their brand without the complexity." },
  { icon: Users, title: "Community First", description: "Our product is shaped by the feedback of thousands of creators and businesses worldwide." },
  { icon: Heart, title: "Ethical AI", description: "We build AI that respects privacy, transparency, and European regulatory standards." },
];

const team = [
  { name: "Sophie van der Berg", role: "CEO & Co-founder", bio: "Former product lead at a leading European tech company with 10+ years in SaaS." },
  { name: "Daan de Vries", role: "CTO & Co-founder", bio: "Machine learning engineer passionate about making AI accessible to everyone." },
  { name: "Emma Bakker", role: "Head of Design", bio: "Award-winning designer focused on creating intuitive, delightful user experiences." },
  { name: "Liam Jansen", role: "Head of Growth", bio: "Growth strategist who has scaled multiple startups across Europe." },
];

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">About BRANDSBAKERY</h1>
          <p className="text-muted-foreground text-lg">We're a Netherlands-based team on a mission to empower creators and businesses with AI-driven content tools that are simple, powerful, and compliant.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6 rounded-2xl border border-border bg-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet the Team</h2>
          <p className="text-muted-foreground">The people behind BRANDSBAKERY.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-muted-foreground">
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h4 className="font-semibold text-foreground">{m.name}</h4>
              <p className="text-sm text-primary font-medium mb-2">{m.role}</p>
              <p className="text-xs text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
