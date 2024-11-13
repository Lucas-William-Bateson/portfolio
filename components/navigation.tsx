"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-[#d2d2d7]"
    >
      <div className="max-w-[980px] mx-auto h-12 flex items-center justify-between px-4">
        <Link 
          href="/"
          className="text-sm font-semibold text-[#1d1d1f] hover:opacity-80 transition-opacity"
        >
          Lucas Bateson
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            href="#about"
            className="text-sm text-[#1d1d1f] hover:opacity-80 transition-opacity"
          >
            About
          </Link>
          <Link 
            href="#experience"
            className="text-sm text-[#1d1d1f] hover:opacity-80 transition-opacity"
          >
            Experience
          </Link>
          <Link 
            href="#projects"
            className="text-sm text-[#1d1d1f] hover:opacity-80 transition-opacity"
          >
            Projects
          </Link>
          <Link 
            href="#contact"
            className="text-sm text-[#1d1d1f] hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}