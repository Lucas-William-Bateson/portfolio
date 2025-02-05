"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20">
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover-neomorphic">
                    <div className="relative h-[400px] w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
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
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
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
                <div className="product-card rounded-2xl overflow-hidden">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-[#86868b] mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
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

const projects = [
  {
    title: "Star Wars Wiki",
    description:
      "A website for Star Wars fans with detailed information on characters, planets, and starships. Built using React and TypeScript, with data legally collected from various sources.",
    image: "/starwarswiki.png",
    technologies: ["TypeScript", "React"],
    link: "https://sww.lucasbateson.com",
  },
  {
    title: "3D Terrain Generation",
    description:
      "A simple 3D game that generates terrain using Perlin noise and voxels. Built with Python and the Ursina game engine.",
    image: "/3d-game.png",
    technologies: ["Python", "Ursina"],
    link: "",
  },
];
