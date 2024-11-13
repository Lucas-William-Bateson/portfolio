"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-[32px] font-semibold leading-tight mb-6">
              Dual Citizen.<br />
              Full Stack Developer.<br />
              Tech Enthusiast.
            </h2>
            <div className="space-y-4 text-[#86868b]">
              <p>
                Currently developing software at Nav IT as a Full Stack Developer, and learning new technologies every day.
              </p>
              <p>
                I have a passion for building things, and I love to create software that is both functional and beautiful.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="portrait.jpeg"
              alt="Portrait of Lucas Bateson"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}