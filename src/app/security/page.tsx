import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container size="narrow">
        <SectionHeading
          label="Legal"
          heading="Security Overview"
          description="Our commitment to keeping your data safe."
        />
        <div className="mt-12 glass p-8 rounded-[var(--radius-card)] gradient-border text-text-secondary space-y-6 text-sm md:text-base">
          <p>
            At Simplicion Private Limited, security is fundamental to our engineering principles. We employ enterprise-grade security measures to ensure that your data and our infrastructure remain protected against threats.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">1. Infrastructure Security</h2>
          <p>
            Our systems are hosted in highly secure data centers. We utilize advanced firewalls, strict network segmentation, and continuous monitoring to detect and mitigate potential vulnerabilities before they can be exploited.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">2. Data Encryption</h2>
          <p>
            All data is encrypted in transit using industry-standard TLS protocols, and data at rest is secured using strong AES-256 encryption. We ensure that your information remains confidential and intact across all platforms.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">3. Compliance and Auditing</h2>
          <p>
            We regularly undergo third-party security audits and penetration testing to validate our security posture. Our team strictly adheres to globally recognized compliance frameworks to maintain trust and accountability.
          </p>

          <p className="pt-6 text-xs text-text-muted border-t border-border mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Container>
    </div>
  );
}
