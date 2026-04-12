import PageLayout from "@/components/PageLayout";
import { ShieldCheck, Lock, Server, Eye } from "lucide-react";

const measures = [
  { icon: Lock, title: "End-to-End Encryption", description: "All data in transit and at rest is encrypted using AES-256 and TLS 1.3 protocols." },
  { icon: Server, title: "EU-Based Infrastructure", description: "All servers and data are hosted within the European Union, ensuring GDPR compliance." },
  { icon: ShieldCheck, title: "SOC 2 Type II", description: "Our infrastructure provider maintains SOC 2 Type II certification, ensuring rigorous security controls." },
  { icon: Eye, title: "Regular Audits", description: "We conduct quarterly security audits and annual penetration testing by independent third parties." },
];

const Security = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            Security
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Your Data, Our Priority</h1>
          <p className="text-muted-foreground">We take security seriously. Here's how we protect your data and ensure compliance with the highest standards.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {measures.map((m) => (
            <div key={m.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <m.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Report a Vulnerability</h2>
          <p className="text-sm text-muted-foreground mb-4">If you discover a security vulnerability, please report it responsibly to our security team.</p>
          <p className="text-sm text-primary font-medium">security@brandsbakery.com</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Security;