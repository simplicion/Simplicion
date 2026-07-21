import React from "react";
import Link from "next/link";
import { ArrowRight, Network, LayoutDashboard, FlaskConical, Beaker, Terminal, Car } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  network: <Network className="h-8 w-8" />,
  "layout-dashboard": <LayoutDashboard className="h-8 w-8" />,
  "flask-conical": <FlaskConical className="h-8 w-8" />,
  beaker: <Beaker className="h-8 w-8" />,
  terminal: <Terminal className="h-8 w-8" />,
  car: <Car className="h-8 w-8" />,
};

interface ProjectCardProps {
  name: string;
  tagline: string;
  description: string;
  status: "live" | "in-development" | "under-development" | "coming-soon" | "working" | "development";
  href: string;
  icon?: string;
  className?: string;
}

export function ProjectCard({
  name,
  tagline,
  description,
  status,
  href,
  icon,
  className
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  
  return (
    <Link 
      href={href} 
      target={isExternal ? "_blank" : undefined} 
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn("block h-full group/card cursor-pointer", className)}
    >
      <GlassCard glow hover gradientBorder className="h-full p-6 md:p-8">
        <div className="flex flex-col h-full min-h-[260px] md:min-h-[280px]">
          {/* Icon + Badge */}
          <div className="flex items-start justify-between mb-4 md:mb-6">
            <div className="p-3 rounded-[16px] bg-primary-muted text-primary">
              {icon && iconMap[icon] ? iconMap[icon] : <Beaker className="h-8 w-8" />}
            </div>
            <Badge status={status as any} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-michroma)] text-lg tracking-wide uppercase text-text-primary mb-1">
              {name}
            </h3>
            <p className="text-sm text-primary font-medium mb-3">
              {tagline}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-4 md:mt-6 pt-4 border-t border-border/50">
            <div className="inline-flex items-center justify-center gap-2 h-10 text-sm rounded-[10px] bg-transparent text-primary group-hover/card:text-primary-hover font-medium transition-all duration-300">
              Explore
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-1" />
            </div>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
