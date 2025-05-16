/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe } from "@/components/magicui/globe";
import { AuroraText } from "@/components/magicui/aurora-text";  
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import { RippleButton } from "@/components/magicui/ripple-button";
import {Marquee} from "@/components/magicui/marquee";
import { Open_Sans } from "next/font/google";
import { DotPattern } from "@/components/magicui/dot-pattern";

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
import { reviews, ReviewCard } from "@/app/reviews";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

 

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <DotPattern className="z-0 opacity-30" width={24} height={24} cr={1.2} glow />
      <div className="container mx-auto px-4 py-6 md:py-16 relative z-10">
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
                href="#"
                cta=""
              />
              <BentoCard
                name="Enhanced Security"
                description="Protect your identity with unique email addresses for each service you use"
                className="row-span-1 col-span-2"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Shield}
                href="#"
                cta=""
              />
              <BentoCard
                name="Time-Saving"
                description="Fill forms automatically with your newly generated email aliases"
                className="row-span-1 col-span-1"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Clock}
                href="#"
                cta=""
              />
              <BentoCard
                name="Easy Management"
                description="Delete aliases you no longer need with a single click"
                className="row-span-1 col-span-1"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Trash2}
                href="#"
                cta=""
              />
              <BentoCard
                name="Privacy Protection"
                description="Keep your real email address private and avoid spam"
                className="row-span-1 col-span-1"
                background={<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />}
                Icon={Mail}
                href="#"
                cta=""
              />
            </BentoGrid>
          </section>
        </main>
      </div>
      {/* Testimonial Section - moved outside container for full width */}
      <section className="mb-12 w-screen px-0 flex flex-col items-center justify-center relative z-10">
        <h2 className="text-3xl font-bold text-white ">What Our Users Say</h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2">
          <Marquee pauseOnHover className="[--duration:2s]">
            {reviews.map((review: any, idx: number) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </Marquee>
        </div>
      </section>
    </div>
    
  );
}
