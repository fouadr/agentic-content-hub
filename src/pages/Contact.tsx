import PageLayout from "@/components/PageLayout";
import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground">Have a question or want to learn more? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First name" className="bg-card" />
                <Input placeholder="Last name" className="bg-card" />
              </div>
              <Input placeholder="Email address" type="email" className="bg-card" />
              <Input placeholder="Subject" className="bg-card" />
              <Textarea placeholder="Your message..." className="bg-card min-h-[120px]" />
              <Button variant="default" className="w-full">Send Message</Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">hello@brandsbakery.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Office</p>
                    <p className="text-sm text-muted-foreground">Herengracht 182, 1016 BR Amsterdam, Netherlands</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon–Fri, 9:00 – 18:00 CET</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
