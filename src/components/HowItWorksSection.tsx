const steps = [
  {
    step: "01",
    title: "Connect Your Brands",
    description: "Link your social accounts and tell our AI about your brand, audience, and goals.",
  },
  {
    step: "02",
    title: "AI Creates Content",
    description: "Our agents research trends, generate copy and visuals, and prepare posts tailored to each platform.",
  },
  {
    step: "03",
    title: "Review & Approve",
    description: "Edit, tweak, or approve generated content. The AI learns from your preferences over time.",
  },
  {
    step: "04",
    title: "Publish & Grow",
    description: "Content goes live at optimal times. Track performance and let AI optimize future posts.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">
            From Idea to Published in <span className="text-gradient">Minutes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.step} className="relative text-center">
              <div className="text-6xl font-black text-gradient opacity-20 mb-4">{step.step}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
