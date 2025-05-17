/* eslint-disable react/no-unescaped-entities */
"use client";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <DotPattern className="z-0 opacity-30" width={24} height={24} cr={1.2} glow />
      <div className="container mx-auto px-4 py-6 md:py-16 relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
