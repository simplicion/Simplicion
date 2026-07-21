import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container size="narrow">
        <SectionHeading
          label="Legal"
          heading="Terms of Service"
          description="Rules and guidelines for using our platforms."
        />
        <div className="mt-12 glass p-8 rounded-[var(--radius-card)] gradient-border text-text-secondary space-y-6 text-sm md:text-base">
          <p>
            These Terms of Service constitute a legally binding agreement made between you and Simplicion Private Limited concerning your access to and use of our website and services.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our services, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree, you are prohibited from using the site and services.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the site and services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics are owned or controlled by us.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">3. User Representations</h2>
          <p>
            By using the services, you represent and warrant that you have the legal capacity to comply with these terms, and you will not use our services for any illegal or unauthorized purpose.
          </p>

          <p className="pt-6 text-xs text-text-muted border-t border-border mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Container>
    </div>
  );
}
