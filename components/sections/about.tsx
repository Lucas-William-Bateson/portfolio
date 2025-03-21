"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[980px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-[32px] font-semibold leading-tight mb-8 text-white text-center">
            Full Stack Developer.<br />
            Tech Enthusiast.<br />
            Bilingual.
          </h2>
          <div className="space-y-6 text-zinc-300">
            <p>
              Currently developing software at Nav IT as a Full Stack Developer, and learning new technologies every day.
            </p>
            <p>
              I have a passion for building things, and I love to create software that is both functional, idiomatic and beautiful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}