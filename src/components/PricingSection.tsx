import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import ContactSalesModal from "@/components/ContactSalesModal";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 25,
    description: "Perfect for individuals getting started",
    priceDescription: "1 workspace, 500 Agency Credits included",
    features: ["5 AI-generated posts/week", "2 social accounts", "Basic analytics", "Community support", "API pass (extra cost)"],
    cta: "Get Started",
    popular: false,
    addons: [
      { label: "Extra Social Channels", monthlyPrice: 9 },
      { label: "Extra Credits", monthlyPrice: 5 },
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 150,
    description: "For creators & small businesses",
    priceDescription: "10 workspaces, 2,000 Agency Credits included",
    features: [
      "Unlimited AI posts",
      "10 social accounts",
      "Up to 10 brands",
      "Advanced analytics",
      "Smart scheduling",
      "Brand voice training",
      "Priority support",
      "API pass (extra cost)",
    ],
    cta: "Get Started",
    popular: true,
    addons: [
      { label: "Extra Social Channels", monthlyPrice: 19 },
      { label: "Extra Credits", monthlyPrice: 15 },
      { label: "API Access", monthlyPrice: 29 },
    ],
  },
  {
    name: "Scale",
    monthlyPrice: 2500,
    description: "For teams and agencies. Incl. White label",
    priceDescription: "",
    features: [
      "Everything in Pro",
      "Unlimited accounts",
      "Unlimited brands",
      "Team collaboration",
      "Custom AI agents",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
    priceSuffix: "",
    priceLabel: "Contact Sales",
    addons: [
      { label: "Extra Social Channels", monthlyPrice: 39 },
      { label: "Extra Credits", monthlyPrice: 29 },
      { label: "Dedicated Server", monthlyPrice: 99 },
    ],
  },
];

const ANNUAL_DISCOUNT = 0.2; // 20% off

const AddonRow = ({
  label,
  monthlyPrice,
  isAnnual,
  qty,
  onQtyChange,
}: {
  label: string;
  monthlyPrice: number;
  isAnnual: boolean;
  qty: number;
  onQtyChange: (v: number) => void;
}) => {
  const displayPrice = isAnnual
    ? Math.round(monthlyPrice * (1 - ANNUAL_DISCOUNT))
    : monthlyPrice;

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="text-xs text-muted-foreground leading-tight">
        {label}
        <br />
        <span className="text-foreground font-medium">
          €{displayPrice}/{isAnnual ? "mo" : "month"}
        </span>
      </div>
      <div className="flex items-center gap-1 border border-border rounded-lg px-1 py-0.5">
        <button
          onClick={() => onQtyChange(Math.max(0, qty - 1))}
          disabled={qty === 0}
          className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-6 text-center text-sm font-medium text-foreground">{qty}</span>
        <button
          onClick={() => onQtyChange(qty + 1)}
          className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const PricingCard = ({
  plan,
  isAnnual,
  onContactSales,
}: {
  plan: (typeof plans)[number];
  isAnnual: boolean;
  onContactSales?: () => void;
}) => {
  const [addonQtys, setAddonQtys] = useState<number[]>(
    () => plan.addons.map(() => 0)
  );

  const basePrice = isAnnual
    ? Math.round(plan.monthlyPrice * (1 - ANNUAL_DISCOUNT))
    : plan.monthlyPrice;

  const addonsTotal = plan.addons.reduce((sum, addon, i) => {
    const price = isAnnual
      ? Math.round(addon.monthlyPrice * (1 - ANNUAL_DISCOUNT))
      : addon.monthlyPrice;
    return sum + price * addonQtys[i];
  }, 0);

  const totalPrice = basePrice + addonsTotal;

  return (
    <div
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
      <div className="mt-6 mb-1">
        <span className="text-4xl font-bold text-foreground">
          {plan.priceLabel ? plan.priceLabel : `€${totalPrice}`}
        </span>
        {!plan.priceLabel && (
          plan.priceSuffix !== undefined ? (
            <span className="text-muted-foreground">{plan.priceSuffix}</span>
          ) : (
            <span className="text-muted-foreground">/{isAnnual ? "mo" : "month"}</span>
          )
        )}
      </div>
      {isAnnual && plan.monthlyPrice > 0 && (
        <p className="text-xs text-primary mb-1">
          Save 20% — billed €{totalPrice * 12}/year
        </p>
      )}
      {plan.priceDescription && (
        <p className="text-xs text-muted-foreground mt-1 mb-4">{plan.priceDescription}</p>
      )}
      {(!plan.priceDescription && (!isAnnual || plan.monthlyPrice === 0)) && <div className="mb-6" />}
      {(!plan.priceDescription && isAnnual && plan.monthlyPrice > 0) && <div className="mb-3" />}
      <Button
        variant={plan.popular ? "default" : "outline"}
        className="w-full mb-8"
        onClick={plan.cta === "Contact Sales" ? onContactSales : undefined}
      >
        {plan.cta}
      </Button>
      <ul className="space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            {f === "Up to 10 brands" ? <span className="font-bold">{f}</span> : f}
          </li>
        ))}
      </ul>

      {/* Add-ons */}
      <div className="mt-6 pt-6 border-t border-border">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Add-ons
        </span>
        <div className="mt-3 space-y-3">
          {plan.addons.map((addon, i) => (
            <AddonRow
              key={addon.label}
              {...addon}
              isAnnual={isAnnual}
              qty={addonQtys[i]}
              onQtyChange={(v) => {
                const next = [...addonQtys];
                next[i] = v;
                setAddonQtys(next);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [contactSalesOpen, setContactSalesOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground mt-4">No hidden fees. Cancel anytime.</p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              className={`text-sm font-medium transition-colors ${
                !isAnnual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary-foreground shadow transition-transform ${
                  isAnnual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                isAnnual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Yearly
            </span>
            {isAnnual && (
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isAnnual={isAnnual}
              onContactSales={() => setContactSalesOpen(true)}
            />
          ))}
        </div>
      </div>

      <ContactSalesModal open={contactSalesOpen} onOpenChange={setContactSalesOpen} />
    </section>
  );
};

export default PricingSection;