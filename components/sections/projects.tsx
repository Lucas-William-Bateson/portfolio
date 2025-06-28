"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTrackSection } from "@/lib/hooks/useTrackSection";
import { useTrackElement } from "@/lib/hooks/useTrackElement";
import { trackEvent } from "@/lib/utils/analytics";

interface Project {
  title: string;
  description: string;
  image?: string; // Made optional
  technologies: string[];
  link?: string; // Already optional
}

export function Projects() {
  const sectionRef = useTrackSection({
    sectionName: "Projects",
    additionalData: { isImportant: true },
  });

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set up tracking for individual projects
  useEffect(() => {
    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const project = projects[index];
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Track the project view event
              trackEvent("Project viewed", {
                project: project.title,
                hasLink: project.link ? "true" : "false",
              });
              // Disconnect after first view to prevent multiple events
              observer.disconnect();
            }
          });
        },
        { threshold: 0.6 } // Higher threshold for projects - need more visible
      );

      observer.observe(ref);
    });

    return () => {
      // Cleanup will be handled by each observer's disconnect
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-[980px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] font-semibold text-white">
            Featured Projects
          </h2>
          <p className="text-zinc-400 mt-4">
            Constantly being updated with the latest projects I've been working
            on.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              ref={(el) =>
                (projectRefs.current[projects.indexOf(project)] = el)
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: projects.indexOf(project) * 0.2,
              }}
              viewport={{ once: true }}
              className="group"
            >
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Project click"
                  data-umami-event-project={project.title}
                  onClick={() =>
                    trackEvent("Project click", { project: project.title })
                  }
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover-neomorphic">
                    {project.image && (
                      <div className="relative h-[400px] w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 980px"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJShWBPCwAAAABJRU5ErkJggg=="
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-semibold mb-2 text-white">
                            {project.title}
                          </h3>
                          <p className="text-zinc-400 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 neomorphic-card text-zinc-300 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  className="product-card rounded-2xl overflow-hidden"
                  data-umami-event="Project view"
                  data-umami-event-project={project.title}
                  data-umami-event-has-link="false"
                >
                  {project.image && (
                    <div className="relative h-[400px] w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 980px"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJShWBPCwAAAABJRU5ErkJggg=="
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2 text-white">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-[#1d1d1f] text-white rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects: Project[] = [
  {
    title: "Fyrstikken",
    description:
      "A website for voting for the Audience favorite in my school awards ceremony. Both a frontend and backend app previously, but i later migrated to just use vercel server functions for the backend.",
    image: "/fyrstikken.png",
    technologies: ["TypeScript", "Next.js", "Supabase"],
    link: "https://fyrstikken.f21elev.no/",
  },
  {
    title: "Star Wars Wiki",
    description:
      "A website for Star Wars fans with detailed information on characters, planets, and starships. Built using React and TypeScript, with data legally collected from various sources.",
    image: "/starwarswiki.png",
    technologies: ["TypeScript", "React"],
    link: "https://github.com/Lucas8448/StarWarsWiki",
  },
  {
    title: "LinkDB",
    description:
      "A simple api based database which allows users to create a unique api key to access their own database tables and data.",
    technologies: ["Python", "Flask", "ScyllaDB"],
    link: "https://github.com/Lucas8448/LinkDB",
  },
  {
    title: "Simplicity",
    description:
      "A custom built programming laguage that gets parsed into python code, designed to be used for students doing advanced maths with programming",
    technologies: ["DSL", "Python"],
    link: "https://github.com/Lucas8448/Simplicity",
  },
  {
    title: "Fully local and custom CI/CD pipeline",
    description:
      "A fully local and customizable CI/CD pipeline built with Docker and GitHub Actions.",
    technologies: ["Docker", "GitHub Actions"],
  },
];
