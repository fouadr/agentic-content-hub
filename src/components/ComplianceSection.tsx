import { ShieldCheck } from "lucide-react";

const ComplianceSection = () => {
  return (
    <section className="py-16 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Fully EU Compliant — ACM Certified
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              BRANDSBAKERY is based in The Netherlands and fully adheres to European Union regulations, 
              including guidelines set by the{" "}
              <span className="font-medium text-foreground">
                ACM (Autoriteit Consument &amp; Markt)
              </span>
              . Your data is processed and stored in accordance with GDPR, ensuring full transparency, 
              privacy, and consumer protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;