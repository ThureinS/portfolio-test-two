"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";

const skillCategories = [
  {
    category: "Strong Proficiency",
    skills: [
      { name: "HTML", color: "from-orange-500 to-red-500" },
      { name: "CSS", color: "from-blue-500 to-cyan-500" },
      { name: "JavaScript", color: "from-yellow-500 to-orange-500" },
      { name: "Vue.js", color: "from-green-500 to-emerald-500" },
      { name: "Express", color: "from-gray-600 to-gray-800" },
      { name: "SQL", color: "from-blue-600 to-indigo-600" },
      { name: "Git", color: "from-orange-600 to-red-600" },
      { name: "GitHub", color: "from-purple-600 to-pink-600" },
      { name: "Tailwind", color: "from-cyan-500 to-blue-500" },
      { name: "Bootstrap", color: "from-purple-500 to-indigo-500" },
    ],
  },
  {
    category: "Moderate Proficiency",
    skills: [
      { name: "React.js", color: "from-cyan-400 to-blue-500" },
      { name: "Redux", color: "from-purple-500 to-pink-500" },
      { name: "TypeScript", color: "from-blue-600 to-cyan-600" },
      { name: "Node.js", color: "from-green-600 to-emerald-600" },
      { name: "Next.js", color: "from-gray-800 to-gray-900" },
      { name: "MongoDB", color: "from-green-500 to-teal-500" },
    ],
  },
];

export function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold mb-6 text-foreground"
              >
                {category.category}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group"
                  >
                    <div className="glass rounded-xl p-4 border border-border text-center relative overflow-hidden">
                      {/* Gradient Background on Hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-smooth`}
                      />

                      <div className="relative z-10">
                        <p className="font-semibold text-foreground">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
