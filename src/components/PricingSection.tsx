import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "€0",
    period: "/month",
    description: "Perfect for individuals getting started",
    features: ["5 AI-generated posts/week", "1 social account", "Basic analytics", "Community support"],
    cta: "Start Free",
    popular: false,
    addons: [
      { label: "Extra Social Channels", price: 9, unit: "/month" },
      { label: "Extra Credits", price: 5, unit: "/month" },
    ],
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
    addons: [
      { label: "Extra Social Channels", price: 19, unit: "/month" },
      { label: "Extra Credits", price: 15, unit: "/month" },
      { label: "API Access", price: 29, unit: "/month" },
    ],
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
    addons: [
      { label: "Extra Social Channels", price: 39, unit: "/month" },
      { label: "Extra Credits", price: 29, unit: "/month" },
      { label: "Dedicated Server", price: 99, unit: "/month" },
    ],
  },
];

const AddonRow = ({ label, price, unit }: { label: string; price: number; unit: string }) => {
  const [qty, setQty] = useState(0);
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="text-xs text-muted-foreground leading-tight">
        {label}
        <br />
        <span className="text-foreground font-medium">€{price}{unit}</span>
      </div>
      <div className="flex items-center gap-1 border border-border rounded-lg px-1 py-0.5">
        <button
          onClick={() => setQty(Math.max(0, qty - 1))}
          disabled={qty === 0}
          className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-6 text-center text-sm font-medium text-foreground">{qty}</span>
        <button
          onClick={() => setQty(qty + 1)}
          className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

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

              {/* Add-ons */}
              <div className="mt-6 pt-6 border-t border-border">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Add-ons</span>
                <div className="mt-3 space-y-3">
                  {plan.addons.map((addon) => (
                    <AddonRow key={addon.label} {...addon} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
