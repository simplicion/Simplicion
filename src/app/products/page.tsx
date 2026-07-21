import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductsTabs } from "./ProductsTabs";
import { BRAND, PRODUCTS } from "@/constants";

export const metadata = {
  title: "Products & Projects",
  description: "Explore Simplicion's ecosystem of enterprise-grade AI software products, including Pitchin180, Workspace, and JoinCab.",
  openGraph: {
    title: `Products & Projects | ${BRAND.name}`,
    description: "Explore Simplicion's ecosystem of enterprise-grade AI software products, including Pitchin180, Workspace, and JoinCab.",
  }
};

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">

      <Container className="relative z-10">
        <div className="mb-16">
          <SectionHeading
            label="Ecosystem"
            heading="Our Products"
            description="Explore our ecosystem of enterprise-grade software products and cutting-edge research projects."
          />
        </div>
        
        <ProductsTabs />
      </Container>
    </div>
  );
}
