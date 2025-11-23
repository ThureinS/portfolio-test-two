"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { Figma, Wrench, Cpu, Lightbulb } from "lucide-react";

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Framer", icon: Wrench },
  { name: "GetUiKit", icon: Lightbulb },
  { name: "Canva", icon: Cpu },
  { name: "ChatGPT", icon: Cpu },
  { name: "Gemini", icon: Cpu },
  { name: "Copilot", icon: Cpu },
  { name: "Windsurf", icon: Wrench },
  { name: "Cursor", icon: Wrench },
  { name: "Notion", icon: Lightbulb },
  { name: "Google Workspace", icon: Wrench },
  { name: "Microsoft Office", icon: Wrench },
];

export function Tools() {
  return (
    <AnimatedSection id="tools" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Tools</span> & Software
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass rounded-xl p-6 border border-border flex flex-col items-center justify-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-smooth">
                <tool.icon className="w-6 h-6 text-primary group-hover:text-white transition-smooth" />
              </div>
              <p className="text-sm font-semibold text-center text-foreground">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
