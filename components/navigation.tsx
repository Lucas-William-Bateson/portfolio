"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-zinc-800"
    >
      <div className="max-w-[980px] mx-auto h-12 flex items-center justify-between px-4">
        <Link
          href="/"
          className="text-sm font-semibold text-white hover:text-zinc-300 transition-colors"
          data-umami-event="Logo click"
        >
          Lucas Bateson
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm text-zinc-300 hover:text-white transition-colors" data-umami-event="Nav click" data-umami-event-section="About">About</Link>
          <Link href="#experience" className="text-sm text-zinc-300 hover:text-white transition-colors" data-umami-event="Nav click" data-umami-event-section="Experience">Experience</Link>
          <Link href="#projects" className="text-sm text-zinc-300 hover:text-white transition-colors" data-umami-event="Nav click" data-umami-event-section="Projects">Projects</Link>
          <Link href="#contact" className="text-sm text-zinc-300 hover:text-white transition-colors" data-umami-event="Nav click" data-umami-event-section="Contact">Contact</Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open menu" className="inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0b0b0c] border-l border-zinc-800">
              <nav className="mt-8 flex flex-col gap-4">
                <Link href="#about" className="text-base py-3 px-2 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" data-umami-event="Nav click" data-umami-event-section="About">About</Link>
                <Link href="#experience" className="text-base py-3 px-2 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" data-umami-event="Nav click" data-umami-event-section="Experience">Experience</Link>
                <Link href="#projects" className="text-base py-3 px-2 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" data-umami-event="Nav click" data-umami-event-section="Projects">Projects</Link>
                <Link href="#contact" className="text-base py-3 px-2 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" data-umami-event="Nav click" data-umami-event-section="Contact">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
