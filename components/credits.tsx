"use client";

import { motion } from "framer-motion";

export function Credits() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-4 right-4 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
    >
      <div className="flex gap-1">
        <span>Image by</span>
        <a
          href="https://www.linkedin.com/in/alexjordanconnor/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Alex Connor
        </a>
      </div>
    </motion.div>
  );
}
