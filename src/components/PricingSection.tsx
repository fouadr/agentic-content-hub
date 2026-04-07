import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "€0",
    period: "/month",
    description: "Perfect for individuals getting started",
    features: ["5 AI-generated posts/week", "1 social account", "Basic analytics", "Community support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "€29",
    period: "/month",
    description: "For creators & small businesses",
    features: [
      "Unlimited AI posts",
      "10 social accounts",
      "Advanced analytics",
      "Smart scheduling",
      "Brand voice training",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "€99",
    period: "/month",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "Unlimited accounts",
      "Team collaboration",
      "Custom AI agents",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground mt-4">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-2 border-primary glow-primary scale-105"
                  : "bg-card border border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <Button variant={plan.popular ? "default" : "outline"} className="w-full mb-8">
                {plan.cta}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
