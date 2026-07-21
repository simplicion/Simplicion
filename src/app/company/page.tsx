import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About Us",
};

export default function CompanyPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionHeading
          label="Company"
          heading="About Simplicion Private Limited"
          description="Building the future of engineering intelligence."
        />
        <div className="max-w-3xl mx-auto prose mt-12 text-center">
          <p className="text-text-secondary">
            Simplicion Private Limited is dedicated to building robust software, AI, cloud infrastructure, and intelligent technologies that empower the next generation of businesses and society. More details coming soon.
          </p>
        </div>
      </Container>
    </div>
  );
}
