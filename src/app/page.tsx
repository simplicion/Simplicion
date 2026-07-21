// ============================================================================
// Home Page — Assembles all home page sections
// ============================================================================

import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CTASection } from "@/components/sections/CTASection";
import { Divider } from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <StatsSection />
      <Divider className="my-0" />
      <ProductsSection />
      <Divider className="my-0" />
      <TechnologiesSection />
      <Divider className="my-0" />
      <IndustriesSection />
      <Divider className="my-0" />
      <ResearchSection />
      <Divider className="my-0" />
      <TimelineSection />
      <Divider className="my-0" />
      <CTASection />
    </main>
  );
}
