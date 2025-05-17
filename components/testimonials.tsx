'use client';

import { Marquee } from "@/components/magicui/marquee";
import { reviews, ReviewCard } from "@/app/reviews";

export function Testimonials() {
  return (
    <section className="mb-12 w-screen px-0 flex flex-col items-center justify-center relative z-10">
      <h2 className="text-3xl font-bold text-white">What Our Users Say</h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2">
        <Marquee pauseOnHover className="[--duration:2s]">
          {reviews.map((review: any, idx: number) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
} 