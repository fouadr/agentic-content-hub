import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";

interface ContactSalesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const companySizes = [
  "1-10",
  "11-50",
  "51-200",
  "201-1,000",
  "1,001-5,000",
  "5,000+",
];

const roleLevels = [
  "C-Level / Executive",
  "VP / Director",
  "Manager",
  "Individual Contributor",
  "Freelancer / Consultant",
];

const departments = [
  "Marketing",
  "Design",
  "Product",
  "Engineering",
  "Sales",
  "Operations",
  "Other",
];

const enquiryTypes = [
  "Enterprise pricing",
  "Custom AI agents",
  "API integration",
  "Partnership",
  "Other",
];

const benefits = [
  "Create compelling content with speed.",
  "Build, manage, and scale your brand with ease.",
  "Streamline workflows and collaborate seamlessly across the content creation process.",
  "Secure access with SSO for your global and growing business.",
];

const ContactSalesModal = ({ open, onOpenChange }: ContactSalesModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2">
          {/* Left side - info */}
          <div className="bg-muted/30 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <DialogHeader className="text-left mb-6">
                <DialogTitle className="text-2xl md:text-3xl font-bold">
                  Contact our sales team
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  We can give you a demo, help you choose the best plan, or create a personalized package to help your organization get the most out of BRANDSBAKERY.
                </DialogDescription>
              </DialogHeader>

              <ul className="space-y-4 mt-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-muted-foreground mt-8">
              For product support, please{" "}
              <a href="/contact" className="text-primary underline">
                visit our Help Center
              </a>
              .
            </p>
          </div>

          {/* Right side - form */}
          <div className="p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">Thank you!</p>
                <p className="text-sm text-muted-foreground text-center">
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">First name</Label>
                    <Input placeholder="" className="bg-background" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Last name</Label>
                    <Input placeholder="" className="bg-background" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">Company email</Label>
                  <Input type="email" placeholder="name@company.com" className="bg-background" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Company name</Label>
                    <Input placeholder="" className="bg-background" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Company size</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {companySizes.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Role level</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {roleLevels.map((r) => (
                          <SelectItem key={r} value={r}>{r}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Department</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((d) => (
                          <SelectItem key={d} value={d}>{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">What is your enquiry about?</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {enquiryTypes.map((e) => (
                        <SelectItem key={e} value={e}>{e}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">How can we help?</Label>
                  <Textarea
                    placeholder="Tell us more about how we can help."
                    className="bg-background min-h-[80px]"
                  />
                </div>

                <Button type="submit" variant="default" className="w-full">
                  Submit
                </Button>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  By submitting this form, you agree to receive marketing and information from BRANDSBAKERY. You can opt out at any time by clicking unsubscribe. BRANDSBAKERY handles your information as described in our{" "}
                  <a href="/privacy" className="text-primary underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSalesModal;