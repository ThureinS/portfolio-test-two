"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Doh Eain",
    position: "Front End Developer - Full Time",
    period: "Feb 2026 - Present",
    responsibilities: [
      "Serve as a Front End Developer. Currently handling a whole project as a Scrum Master and Full Stack Developer.",
      "Research for new technologies.",
      "Design UI with Figma Make, Frontend Vue.js, Backend Laravel.",
      "Carry out Testing and Documentation for websites.",
    ],
  },
  {
    company: "Code Mal",
    position: "Frontend Web Developer - Volunteer (Remote)",
    period: "Sep 2024 - Mar 2025",
    responsibilities: [
      "Work as a Frontend web developer for in house projects.",
      "Brainstorm facade plans and projects for the team.",
      "Support other tech team processes.",
    ],
  },
  {
    company: "EI Mars",
    position: "Frontend Web Developer - Volunteer (Remote)",
    period: "Aug 2024 - Mar 2025",
    responsibilities: [
      "Work as a frontend web developer for in house projects.",
      "Creating frontend side of the website and work together with Project Manager, UI/UX designers and backend developers.",
    ],
  },
  {
    company: "Abank",
    position: "Senior Functional Support - Full Time",
    period: "Dec 2021 - Feb 2026",
    responsibilities: [
      "Supports for operations on core banking system which are mostly used by tellers and office use with SQL, Query and Report writing using BIRT, HTML.",
      "Responsible and troubleshoot for user maintenance and user errors.",
      "Create and maintain reports for office use with SQL, Query and Report writing using BIRT, HTML.",
      "Perform basic troubleshooting with Microsoft Office.",
    ],
  },
];

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className="md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-2xl p-6 border border-border"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground text-sm flex gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
