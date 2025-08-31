"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTrackSection } from "@/lib/hooks/useTrackSection";

export function Experience() {
  const sectionRef = useTrackSection({
    sectionName: "Experience"
  });

  return (
    <section id="experience" ref={sectionRef} className="py-20 scroll-mt-24">
      <div className="max-w-[980px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] font-semibold text-white">Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 hover-neomorphic"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-zinc-400">{exp.company}</p>
                </div>
              </div>
              <p className="text-zinc-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    "title": "Software Developer",
    "company": "NAV IT",
    "description": "Working on both frontend and backend development, implementing features using modern technologies and best practices."
  },
  {
    "title": "Data Analyst",
    "company": "Visma Norway",
    "description": "Conducted data analysis for Visma Norway's InSchool service using Amazon QuickSight."
  },
  {
    "title": "Student",
    "company": "Fyrstikkalleen Vgs, Oslo",
    "description": "Information Technology and Media Production with top marks in programming and technological understanding."
  },
  {
    "title": "Programming Teacher",
    "company": "Oslo Commune",
    "description": "Taught block programming to grade 4 students."
  },
];
