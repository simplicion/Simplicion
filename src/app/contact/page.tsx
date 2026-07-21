"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}`;

    // Create the mailto link
    const mailtoUrl = `mailto:simplicion.com@gmail.com?subject=${encodeURIComponent("Contact Request from Simplicion.com")}&body=${encodeURIComponent(body)}`;
    
    // Open the user's default email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="pt-32 pb-24">
      <Container size="narrow">
        <SectionHeading
          label="Contact Us"
          heading="Get in Touch"
          description="Have a question or want to work with us? Send us a message and we'll get back to you as soon as possible."
        />
        
        <div className="mt-12 glass p-8 rounded-[var(--radius-card)] gradient-border">
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
              <label htmlFor="company" className="text-sm font-medium text-text-secondary">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Acme Corp"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-surface/50 border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>
            
            <Button type="submit" variant="primary" size="lg" className="mt-2">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
