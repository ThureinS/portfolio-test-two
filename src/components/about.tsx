"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { User, Code, Rocket } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: User },
  { label: "Projects Completed", value: "50+", icon: Code },
  { label: "Technologies", value: "15+", icon: Rocket },
];

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-2xl blur-2xl opacity-50 animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl gradient-bg p-1">
                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                  <User className="w-32 h-32 md:w-40 md:h-40 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              Hi, I'm <span className="gradient-text">Thureinsoe</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a highly creative, continuously learning, and resilient tech enthusiast 
              with a strong passion for technology and also a fast learner. Currently specializing 
              in frontend web development and aiming to become a full-stack developer.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a supportive team player who is always eager to learn continuously 
              to enhance my skills and deliver tasks efficiently and on time.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                Frontend Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-sm font-medium">
                Fast Learner
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </h4>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
