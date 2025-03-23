"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
        <div className="flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
            data-umami-event="Nav click"
            data-umami-event-section="About"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
            data-umami-event="Nav click"
            data-umami-event-section="Experience"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
            data-umami-event="Nav click"
            data-umami-event-section="Projects"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm text-zinc-300 hover:text-white transition-colors"
            data-umami-event="Nav click"
            data-umami-event-section="Contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}