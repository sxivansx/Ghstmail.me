'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Navbar() {
  return (
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
  );
} 