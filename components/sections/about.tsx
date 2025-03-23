"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTrackSection } from "@/lib/hooks/useTrackSection";

export function About() {
  const sectionRef = useTrackSection({
    sectionName: "About",
    additionalData: { pageLocation: "Main" }
  });

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#0b0b0f]/70">
      <div className="max-w-[980px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-[700px] mx-auto"
        >
          <h2 className="text-[32px] font-semibold text-white mb-6">
            About Me
          </h2>
          <p className="text-zinc-300 mb-6">
            I am a software developer specializing in both front-end and back-end development. I have a passion for
            writing reliable, maintainable, and well-documented code that solves
            real-world problems.
          </p>
          <p className="text-zinc-300">
            I enjoy working with modern frameworks and technologies, constantly
            exploring new tools to enhance my skill set. I believe in the
            importance of staying updated with the latest industry trends while
            maintaining a strong foundation in programming fundamentals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}