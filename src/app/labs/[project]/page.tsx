import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LAB_PROJECTS, PRODUCTS } from "@/constants";
import LabProjectForm from "./LabProjectForm";

interface Props {
  params: Promise<{
    project: string;
  }>;
}

// Generate static routes for the projects
export function generateStaticParams() {
  const allProjects = [...LAB_PROJECTS, ...PRODUCTS.filter(p => p.id === "join-cab")];
  return allProjects.map((project) => ({
    project: project.id,
  }));
}

// Dynamically generate SEO metadata based on the project data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const projectData = [...LAB_PROJECTS, ...PRODUCTS].find((p) => p.id === resolvedParams.project);

  if (!projectData) {
    return {
      title: "Project Not Found | Simplicion Labs",
    };
  }

  const image = 'image' in projectData ? projectData.image : "/og-image.png";

  return {
    title: `${projectData.name} | Simplicion Labs`,
    description: projectData.description,
    openGraph: {
      title: `${projectData.name} | Simplicion Labs`,
      description: projectData.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${projectData.name} Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectData.name} | Simplicion Labs`,
      description: projectData.description,
      images: [image],
    },
  };
}

export default async function LabProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = [...LAB_PROJECTS, ...PRODUCTS].find((p) => p.id === resolvedParams.project);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="mb-8">
            <span className={`text-sm font-mono px-4 py-1.5 rounded-full uppercase tracking-widest ${
              project.status === 'working' 
                ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' 
                : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
            }`}>
              {project.status === 'working' ? 'Working Prototype' : 'In Development'}
            </span>
          </div>

          {/* Header */}
          <h1 className="heading-display text-4xl md:text-6xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500 bg-clip-text text-transparent mb-6">
            {project.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-text-secondary mb-12">
            {project.tagline}
          </h2>

          {/* Description */}
          <div className="glass p-8 md:p-12 rounded-[var(--radius-card)] gradient-border mb-16">
            <h3 className="text-xl font-bold mb-6 text-text-primary">About the Project</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              {'fullDescription' in project ? project.fullDescription : project.description}
            </p>
          </div>

          {/* Internship/Join Form */}
          <div id="join-form">
            <SectionHeading
              label="Get Involved"
              heading={`Join the ${project.name} Team`}
              description="Passionate about what we are building? We are always looking for driven interns and collaborators to push the boundaries of technology."
              align="left"
            />
            
            <div className="mt-8">
              <LabProjectForm projectName={project.name} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
