"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { PRODUCTS, LAB_PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProductsTabs() {
  const [activeTab, setActiveTab] = useState<"products" | "projects">("products");

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 bg-surface/50 border border-border/50 rounded-xl backdrop-blur-md">
          <button
            onClick={() => setActiveTab("products")}
            className={cn(
              "px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300",
              activeTab === "products"
                ? "bg-white shadow-sm text-text-primary"
                : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
            )}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={cn(
              "px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300",
              activeTab === "projects"
                ? "bg-white shadow-sm text-text-primary"
                : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
            )}
          >
            Projects
          </button>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="relative">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500",
            activeTab === "products" ? "opacity-100 z-10 relative" : "opacity-0 hidden"
          )}
        >
          {PRODUCTS.map((product) => (
            <ProjectCard key={product.id} {...product} />
          ))}
        </div>

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500",
            activeTab === "projects" ? "opacity-100 z-10 relative" : "opacity-0 hidden"
          )}
        >
          {LAB_PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              href={`/labs/${project.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
