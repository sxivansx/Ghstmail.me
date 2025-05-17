'use client';

import { Globe } from "@/components/magicui/globe";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { RippleButton } from "@/components/magicui/ripple-button";

export function Hero() {
  return (
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
    </main>
  );
}