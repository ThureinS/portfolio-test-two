"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "thureinshn@gmail.com",
    href: "mailto:thureinshn@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+959-778-854-252",
    href: "tel:+959778854252",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mayangone Township, Yangon",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "#",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
    color: "hover:text-blue-600",
  },
];

export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 border border-border text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary group-hover:border-primary transition-smooth">
                <info.icon className="w-8 h-8 text-primary group-hover:text-white transition-smooth" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {info.label}
              </h3>
              <p className="text-muted-foreground">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-14 h-14 rounded-full glass border border-border flex items-center justify-center text-muted-foreground transition-smooth ${social.color}`}
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
