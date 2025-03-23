"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTrackSection } from "@/lib/hooks/useTrackSection";
import { useTrackElement } from "@/lib/hooks/useTrackElement";

export function Hero() {
  const sectionRef = useTrackSection({
    sectionName: "Hero",
    additionalData: { isFirstSection: true }
  });

  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Set up tracking for individual skill cards
  useEffect(() => {
    skillsRef.current.forEach((ref, index) => {
      if (!ref) return;

      const skill = skills[index];
      const skillObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && typeof window !== 'undefined' && window.umami) {
              window.umami.track('Skill card viewed', {
                skill: skill.name,
                position: String(index)
              });
              skillObserver.disconnect();
            }
          });
        },
        { threshold: 0.7 }
      );

      skillObserver.observe(ref);
    });

    return () => {
      // Cleanup will be handled by each observer's disconnect
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-24">
      <div className="max-w-[980px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center space-y-12"
        >
          <h1 className="text-[40px] sm:text-[56px] font-bold leading-tight tracking-tight hero-text-gradient">
            Lucas Bateson
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 max-w-[600px] mx-auto">
            Developing at Nav IT
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <Link
              href="#about"
              className="text-lg hover:underline"
              data-umami-event="Hero learn more click"
            >
              Learn more
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => skillsRef.current[index] = el}
              className="neomorphic-card rounded-2xl p-6 text-center hover-neomorphic"
              data-umami-event="Skill card view"
              data-umami-event-skill={skill.name}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-zinc-300">{skill.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const skills = [
  {
    icon: "⚡️",
    name: "Frontend",
    description: "Next.js, React, Typescript"
  },
  {
    icon: "🛠",
    name: "Backend",
    description: "TypeScript, Node.js, JVM frameworks"
  },
  {
    icon: "🔐",
    name: "Database",
    description: "ScyllaDB, SQLite3, PostgreSQL"
  },
  {
    icon: "☁️",
    name: "Cloud",
    description: "Azure, GCP, DigitalOcean"
  }
];