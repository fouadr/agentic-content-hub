import PageLayout from "@/components/PageLayout";
import { MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const positions = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Amsterdam, NL (Hybrid)", type: "Full-time" },
  { title: "Machine Learning Engineer", department: "AI", location: "Amsterdam, NL (Remote)", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Amsterdam, NL (Hybrid)", type: "Full-time" },
  { title: "Content Marketing Manager", department: "Marketing", location: "Remote (EU)", type: "Full-time" },
  { title: "Customer Success Lead", department: "Support", location: "Remote (EU)", type: "Full-time" },
];

const Careers = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Team</h1>
          <p className="text-muted-foreground text-lg">Help us build the future of AI-powered content creation. We're a growing team based in Amsterdam with a passion for empowering creators.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {positions.map((pos) => (
            <div key={pos.title} className="rounded-2xl border border-border bg-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{pos.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{pos.department}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{pos.location}</span>
                  <span>{pos.type}</span>
                </div>
              </div>
              <Button variant="default" size="sm">Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
