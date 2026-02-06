"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";


export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* 🔹 Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Us
        </motion.h2>

        {/* 🔹 Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          We’re a passionate team of developers crafting modern, responsive, and
          scalable web applications using{" "}
          <span className="font-semibold text-primary">
            Next.js, React, Tailwind CSS, and ShadCN UI
          </span>
          . Our mission is to help businesses grow with clean design and robust
          code.
        </motion.p>

        <Separator className="my-8 w-24 mx-auto bg-primary/30" />

        {/* 🔹 Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "3+ Years Experience",
              desc: "Expertise in building modern full-stack apps.",
            },
            {
              title: "30+ Successful Projects",
              desc: "Delivered high-quality products for global clients.",
            },
            {
              title: "Global Clients",
              desc: "Serving startups & businesses across 5+ countries.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-muted-foreground mb-4">Our Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "React", "Tailwind CSS", "ShadCN UI", "Framer Motion", "Node.js"].map(
              (tech, i) => (
                <Badge key={i} variant="secondary" className="text-base px-4 py-2">
                  {tech}
                </Badge>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
