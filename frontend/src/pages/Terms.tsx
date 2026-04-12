import PageLayout from "@/components/PageLayout";

const Terms = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: April 1, 2026</p>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using BRANDSBAKERY, you agree to be bound by these Terms of Service. If you do not agree, you may not use our platform.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
              <p>BRANDSBAKERY provides AI-powered content creation, scheduling, and management tools for social media platforms. Features vary by subscription plan.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and to notify us immediately of any unauthorized use.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Acceptable Use</h2>
              <p>You may not use BRANDSBAKERY to create, distribute, or promote content that is unlawful, harmful, misleading, or infringes on the rights of others. We reserve the right to suspend accounts that violate these terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Payment & Billing</h2>
              <p>Subscription fees are billed in advance on a monthly or annual basis. Refunds are handled in accordance with EU consumer protection laws. You may cancel your subscription at any time.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>BRANDSBAKERY shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform, to the maximum extent permitted by law.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Governing Law</h2>
              <p>These terms are governed by the laws of The Netherlands. Any disputes shall be resolved in the courts of Amsterdam.</p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;