import PageLayout from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: April 1, 2026</p>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>BRANDSBAKERY ("we", "our", or "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform. We are based in The Netherlands and comply fully with the EU General Data Protection Regulation (GDPR).</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Data We Collect</h2>
              <p>We collect information you provide directly, such as your name, email address, and payment details. We also collect usage data including browser type, device information, and interaction patterns to improve our services.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Data</h2>
              <p>Your data is used to provide and improve our services, process payments, send relevant communications, and ensure platform security. We do not sell your personal data to third parties.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Storage & Security</h2>
              <p>All data is stored on EU-based servers with industry-standard encryption. We implement technical and organizational measures to protect your data against unauthorized access, alteration, or destruction.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p>Under GDPR, you have the right to access, correct, delete, or port your data. You may also object to or restrict processing. To exercise these rights, contact us at privacy@brandsbakery.com.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
              <p>For privacy-related inquiries, reach our Data Protection Officer at privacy@brandsbakery.com or write to: BRANDSBAKERY B.V., Herengracht 182, 1016 BR Amsterdam, The Netherlands.</p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacy;
