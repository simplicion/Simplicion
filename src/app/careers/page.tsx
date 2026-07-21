"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    portfolioUrl: "",
    whyFit: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body
    const body = `Job Application
-------------------
Name: ${formData.name}
Email: ${formData.email}
Role Applied For: ${formData.role}
Portfolio/LinkedIn URL: ${formData.portfolioUrl}

Why I'm a good fit:
${formData.whyFit}`;

    // Create the mailto link
    const mailtoUrl = `mailto:simplicion.com@gmail.com?subject=${encodeURIComponent(`Job Application: ${formData.role} - ${formData.name}`)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's default email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="pt-32 pb-24">
      <Container size="narrow">
        <SectionHeading
          label="Careers"
          heading="Join Our Team"
          description="Help us build the next generation of engineering intelligence and shape the future of technology."
        />
        
        <div className="mt-12 glass p-8 rounded-[var(--radius-card)] gradient-border">
          <h3 className="text-xl font-semibold mb-6">Submit Application</h3>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-medium text-text-secondary">
                  Role Applied For
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="" disabled>Select a role...</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="AI Researcher">AI Researcher</option>
                  <option value="Product Designer">Product Designer</option>
                  <option value="Marketing Specialist">Marketing Specialist</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="portfolioUrl" className="text-sm font-medium text-text-secondary">
                  Portfolio / LinkedIn URL
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="https://"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="whyFit" className="text-sm font-medium text-text-secondary">
                Why are you a good fit?
              </label>
              <textarea
                id="whyFit"
                name="whyFit"
                required
                rows={5}
                value={formData.whyFit}
                onChange={handleChange}
                className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell us about your background, passion, and what you can bring to Simplicion."
              />
            </div>
            
            <Button type="submit" variant="primary" size="lg" className="mt-2">
              Submit Application
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
