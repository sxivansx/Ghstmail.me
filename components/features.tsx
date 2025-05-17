'use client';

import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { Clock, Mail, Shield, Trash2, Zap } from "lucide-react";

export function Features() {
  return (
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
  );
} 