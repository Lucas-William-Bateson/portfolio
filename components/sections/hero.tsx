"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-16">
      <div className="max-w-[980px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-[40px] sm:text-[56px] font-semibold leading-tight tracking-tight hero-text-gradient">
            Lucas Bateson
          </h1>
          <p className="text-xl sm:text-2xl text-[#86868b] max-w-[600px] mx-auto">
            Developing at Nav IT
          </p>
          <div className="flex items-center justify-center gap-2 text-[#2997ff]">
            <Link href="#about" className="text-lg hover:underline">
              Learn more
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="product-card rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-[#1d1d1f] font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-[#86868b]">{skill.description}</p>
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