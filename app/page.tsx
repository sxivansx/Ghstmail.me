import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Shield, RefreshCw, Trash2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-indigo-600">
      <div className="container mx-auto px-4 py-16">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Mail className="h-8 w-8 text-white" />
            <h1 className="text-3xl font-bold text-white">Ghstmail.me</h1>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
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

        <main>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-white leading-tight">
                Protect your inbox with disposable email aliases
              </h2>
              <p className="text-xl text-white/80">
                Create unlimited email aliases that forward to your real address. 
                Stay anonymous and keep your primary inbox clean.
              </p>
              <div className="pt-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Privacy Protection</h3>
                    <p className="text-white/70">Keep your real email address private and avoid spam</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Unlimited Aliases</h3>
                    <p className="text-white/70">Create as many disposable email addresses as you need</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Trash2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Easy Management</h3>
                    <p className="text-white/70">Delete aliases you no longer need with a single click</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}