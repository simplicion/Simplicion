import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LAB_PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata = {
  title: "Simplicion Labs",
  description: "Advanced research and experimental projects at Simplicion Private Limited.",
};

export default function LabsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">

      <Container className="relative z-10">
        <div className="mb-16">
          <SectionHeading
            label="Research Division"
            heading="Simplicion Labs"
            description="Our experimental playground. This is where we build out bold ideas, push boundaries, and architect the future of engineering intelligence."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {LAB_PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              href={`/labs/${project.id}`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
