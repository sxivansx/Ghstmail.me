/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe } from "@/components/magicui/globe";
import { AuroraText } from "@/components/magicui/aurora-text";  
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import { RippleButton } from "@/components/magicui/ripple-button";
import { Open_Sans } from "next/font/google";

import {
  ArrowRight,
  CheckCircle,
  Chrome,
  Clock,
  Copy,
  Lock,
  Mail,
  RefreshCw,
  Shield,
  Star,
  Trash2,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Testimonials from "@/components/testimonial-component";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-6 md:py-16">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-16 gap-4">
          <div className="flex items-center gap-2">
            <Mail className="h-6 w-6 md:h-8 md:w-8 text-white" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Ghstmail.me
            </h1>
          </div>
          <div className="flex space-x-3 md:space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20 border-white/20"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-indigo-600 hover:bg-white/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Text Section */}
          <section className="flex flex-col items-center justify-center text-center mb-12 font-manrope">
            <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-white leading-tight">
              Instant Email Protection at Your Fingertips
            </h2>
            <p className="text-lg md:text-xl text-white/40 mt-4 max-w-3xl">
              Create unlimited disposable email aliases that forward to your
              real address. Stay anonymous, avoid spam, and protect your
              privacy with one click.
            </p>
            <div className="flex flex-row items-center justify-center gap-4 mt-4 font-manrope">
            <InteractiveHoverButton>Get Started</InteractiveHoverButton>
            <RippleButton>Chrome Extension</RippleButton>
            </div>
            
          </section>
          

          {/* Globe Section */}
          <section className="flex flex-col items-center justify-center mb-12">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[500px] min-h-[400px] flex items-center justify-center">
                <Globe className="w-full h-full" />
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center mb-12">
            <BentoGrid className="max-w-4xl">
              <BentoCard
                name="Instant Generation"
                description="Create new email aliases with a single click while browsing any website"
                className="row-span-1 col-span-1"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Zap}
              />
              <BentoCard
                name="Enhanced Security"
                description="Protect your identity with unique email addresses for each service you use"
                className="row-span-1 col-span-2"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Shield}
              
              />
              <BentoCard
                name="Time-Saving"
                description="Fill forms automatically with your newly generated email aliases"
                className="row-span-1 col-span-1"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Clock}
                
              />
              <BentoCard
                name="Easy Management"
                description="Delete aliases you no longer need with a single click"
                className="row-span-1 col-span-1"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Trash2}
                
                
              />
              <BentoCard
                name="Privacy Protection"
                description="Keep your real email address private and avoid spam"
                className="row-span-1 col-span-1"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Mail}

                
              />
            </BentoGrid>
          </section>

          

        </main>
      </div>
    </div>
    
  );
}
