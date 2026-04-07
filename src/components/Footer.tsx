import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-foreground">BRANDSBAKERY</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered content creation and management for modern creators and businesses.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BRANDSBAKERY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
