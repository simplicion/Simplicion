import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND } from "@/constants";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container size="narrow">
        <SectionHeading
          label="Legal"
          heading="Privacy Policy"
          description="How we handle and protect your data."
        />
        <div className="mt-12 glass p-8 rounded-[var(--radius-card)] gradient-border text-text-secondary space-y-6 text-sm md:text-base">
          <p>
            At Simplicion Private Limited, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes contact details, usage data, and communications.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect or receive to communicate with you, to provide, support, and personalize our services, and to comply with our legal obligations.
          </p>
          
          <h2 className="text-lg font-semibold text-text-primary mt-8 mb-4">3. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no internet transmission is entirely secure.
          </p>

          <p className="pt-6 text-xs text-text-muted border-t border-border mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Container>
    </div>
  );
}
