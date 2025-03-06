/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Chrome,
  Clock,
  Copy,
  Globe,
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

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-indigo-600">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Hero Text */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Instant Email Protection at Your Fingertips
              </h2>
              <p className="text-lg md:text-xl text-white/80">
                Create unlimited disposable email aliases that forward to your
                real address. Stay anonymous, avoid spam, and protect your
                privacy with one click.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-white/90 group transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a
                  href="https://chromewebstore.google.com/detail/ghstmailme/appehhmdmakndceapnlfnebnfmahnbkk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/20 group"
                  >
                    <Chrome className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    Chrome Extension
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">Free to use</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">No credit card</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">Instant setup</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">10,000+ users</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Features Card */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6 md:space-y-8">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Privacy Protection
                    </h3>
                    <p className="text-white/70">
                      Keep your real email address private and avoid spam
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Chrome className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Chrome Extension
                    </h3>
                    <p className="text-white/70">
                      Generate aliases instantly while browsing with our
                      extension
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Trash2 className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Easy Management
                    </h3>
                    <p className="text-white/70">
                      Delete aliases you no longer need with a single click
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Chrome Extension Preview */}
              <div className="mt-8 relative h-64 md:h-72 rounded-lg overflow-hidden border-2 border-white/20">
                <div className="absolute top-0 left-0 right-0 h-10 bg-gray-800 flex items-center px-4 z-10 rounded-t-lg">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gray-700 rounded-full px-4 py-1 text-xs text-white/70 flex items-center">
                      <Chrome className="h-3 w-3 mr-1" />
                      Ghstmail.me Extension
                    </div>
                  </div>
                </div>
                <div className="absolute top-10 left-0 right-0 bottom-0 bg-gray-100 p-4">
                  <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-indigo-600 mr-2" />
                        <span className="font-medium text-gray-800">
                          Ghstmail.me
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-indigo-600 text-white text-xs py-1 h-7"
                      >
                        Generate
                      </Button>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-gray-50 rounded p-2 border border-gray-200 flex justify-between items-center">
                        <span className="text-sm text-gray-700 font-mono">
                          jonsnowknow0@ghstmail.me
                        </span>
                        <div className="flex space-x-1">
                          <div className="p-1 hover:bg-gray-200 rounded">
                            <Copy className="h-3 w-3 text-gray-500" />
                          </div>
                          <div className="p-1 hover:bg-gray-200 rounded">
                            <Trash2 className="h-3 w-3 text-gray-500" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded p-2 border border-gray-200 flex justify-between items-center">
                        <span className="text-sm text-gray-700 font-mono">
                          iambatman404@ghstmail.me
                        </span>
                        <div className="flex space-x-1">
                          <div className="p-1 hover:bg-gray-200 rounded">
                            <Copy className="h-3 w-3 text-gray-500" />
                          </div>
                          <div className="p-1 hover:bg-gray-200 rounded">
                            <Trash2 className="h-3 w-3 text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200 text-center">
                      <a
                        href="#"
                        className="text-xs text-indigo-600 hover:underline"
                      >
                        Manage all aliases
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chrome Extension Feature Section */}
          <motion.div
            className="mt-24 md:mt-36"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Instant Email Protection with Our Chrome Extension
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Generate disposable email aliases directly from your browser
                with our powerful Chrome extension. No more switching between
                tabs or applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Instant Generation
                </h3>
                <p className="text-white/70">
                  Create new email aliases with a single click while browsing
                  any website
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Time-Saving
                </h3>
                <p className="text-white/70">
                  Fill forms automatically with your newly generated email
                  aliases
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Enhanced Security
                </h3>
                <p className="text-white/70">
                  Protect your identity with unique email addresses for each
                  service you use
                </p>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://chromewebstore.google.com/detail/ghstmailme/appehhmdmakndceapnlfnebnfmahnbkk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-white/90"
                >
                  <Chrome className="mr-2 h-5 w-5" />
                  Add to Chrome - It's Free
                </Button>
              </a>
            </div>
          </motion.div>

          {/* How It Works Section */}
          <motion.div
            className="mt-24 md:mt-36"
            id="features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Sign Up
                </h3>
                <p className="text-white/70">
                  Create your free account in seconds with just your email and
                  password
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Generate Aliases
                </h3>
                <p className="text-white/70">
                  Create unlimited email aliases with a single click or via our
                  Chrome extension
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Stay Protected
                </h3>
                <p className="text-white/70">
                  All emails sent to your aliases are forwarded to your real
                  inbox
                </p>
              </motion.div>
            </div>
          </motion.div>
          <Testimonials />
          {/* FAQ Section */}
          <motion.div
            className="mt-24 md:mt-36"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Is this service really free?
                </h3>
                <p className="text-white/70">
                  Yes, our basic service is completely free to use. We offer
                  unlimited email aliases at no cost.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-2">
                  How does the Chrome extension work?
                </h3>
                <p className="text-white/70">
                  Our extension adds a button to your browser that lets you
                  generate and manage email aliases with a single click, right
                  from any webpage.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Are my emails secure?
                </h3>
                <p className="text-white/70">
                  Absolutely. We use industry-standard encryption and never read
                  or store the content of emails that pass through our system.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I reply to emails sent to my aliases?
                </h3>
                <p className="text-white/70">
                  Yes, you can reply to emails and the recipient will see your
                  alias as the sender, keeping your real email address private.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-24 md:mt-36 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 shadow-xl max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to protect your inbox?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already protecting their privacy
                with Ghstmail.me
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-white/90 w-full sm:w-auto"
                  >
                    Get Started Free
                  </Button>
                </Link>
                <a
                  href="https://chromewebstore.google.com/detail/ghstmailme/appehhmdmakndceapnlfnebnfmahnbkk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 text-white hover:bg-white/20 border-white/20 w-full sm:w-auto"
                  >
                    <Chrome className="mr-2 h-5 w-5" />
                    Add to Chrome
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="mt-24 md:mt-36 pb-8">
          <div className="border-white/20 pt-8">
            <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © 2025 Ghstmail.me. All rights reserved.
              </p>
              {/* Social Links */}
              {/* github*/}
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a
                  href="https://github.com/govindup63"
                  className="text-white/60 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                {/* twitter*/}
                <a
                  href="https://x.com/govind_404"
                  className="text-white/60 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                {/* linkedin*/}
                <a
                  href="https://www.linkedin.com/in/govind-pandey-1611081b6/"
                  className="text-white/60 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
