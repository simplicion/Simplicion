"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface LabProjectFormProps {
  projectName: string;
}

export default function LabProjectForm({ projectName }: LabProjectFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    background: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body
    const body = `Project Application: ${projectName}
-------------------
Name: ${formData.name}
Email: ${formData.email}
Area of Interest: ${formData.interest}

Background & Why I want to join:
${formData.background}`;

    // Create the mailto link
    const mailtoUrl = `mailto:simplicion.com@gmail.com?subject=${encodeURIComponent(`Labs Application: ${projectName} - ${formData.name}`)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's default email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="glass p-8 rounded-[var(--radius-card)] gradient-border">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-text-secondary">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-text-secondary">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="interest" className="text-sm font-medium text-text-secondary">
            Area of Interest / Role
          </label>
          <input
            type="text"
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="e.g. Frontend Intern, AI Researcher, Product Design"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="background" className="text-sm font-medium text-text-secondary">
            Background & Why this project?
          </label>
          <textarea
            id="background"
            name="background"
            required
            rows={4}
            value={formData.background}
            onChange={handleChange}
            className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            placeholder={`Tell us about your skills and why you're passionate about contributing to ${projectName}.`}
          />
        </div>
        
        <Button type="submit" variant="primary" size="lg" className="mt-2 w-full md:w-auto md:self-start">
          Submit Application
        </Button>
      </form>
    </div>
  );
}
