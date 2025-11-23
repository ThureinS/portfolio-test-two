"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    institution: "Young City Sharers",
    period: "Jul 2025 - Sep 2025",
    description: "YCS cohort 16 alumni",
    icon: Award,
    category: "Program",
  },
  {
    institution: "JAN Academy",
    period: "2022 - 2025",
    description: "Project Management Professional Certification from Google",
    icon: Award,
    category: "Certification",
  },
  {
    institution: "University of Computer Studies Yangon (UCSY)",
    period: "2016 - 2023",
    description: "Bachelor's Degree in Computer Science Software Engineering",
    icon: GraduationCap,
    category: "Degree",
  },
  {
    institution: "KMD Institute, University of Greenwich",
    period: "2016 - 2020",
    description: "NCC Level 4 Diploma in Computing, NCC Level 5 Diploma in Computing, BSc (Hons) BIT (Business Information Technology)",
    icon: GraduationCap,
    category: "Degree",
  },
  {
    institution: "American Center",
    period: "2016 - 2018",
    description: "Intensive Level 3 to Level 5 in English language Program",
    icon: BookOpen,
    category: "Language",
  },
];

export function Education() {
  return (
    <AnimatedSection id="education" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Education</span> & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="glass rounded-2xl p-6 border border-border relative overflow-hidden group"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-smooth" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-semibold text-primary mb-3">
                  {edu.category}
                </div>

                {/* Institution Name */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {edu.institution}
                </h3>

                {/* Period */}
                <p className="text-sm text-primary font-semibold mb-3">
                  {edu.period}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
