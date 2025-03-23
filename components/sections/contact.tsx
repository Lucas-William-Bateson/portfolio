"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTrackSection } from "@/lib/hooks/useTrackSection";

export function Contact() {
  const sectionRef = useTrackSection({
    sectionName: "Contact"
  });

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="max-w-[980px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-[32px] font-semibold text-white">
            Let's Connect
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="neomorphic-card rounded-2xl p-8 hover-neomorphic"
              data-umami-event="Contact click"
              data-umami-event-type={link.label}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {link.icon}
                  <span className="font-semibold text-white">{link.label}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-zinc-400" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Lucas8448",
    icon: <Github className="h-5 w-5" />
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucas-bateson/",
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    label: "Email",
    href: "mailto:lucas.bateson@gmail.com",
    icon: <Mail className="h-5 w-5" />
  }
];