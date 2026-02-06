"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[90vh] flex items-center justify-center">
      {/* 🌟 Spotlight Effect Background */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={7}
        xOffset={100}
        className="absolute inset-0 pointer-events-none"
      />

      {/* ✨ Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Build Websites Faster, <br className="hidden md:block" /> Shine Brighter ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-gray-300"
        >
          Stunning spotlight effects and modern UI components built with{" "}
          <span className="font-semibold text-indigo-400">Next.js</span> &{" "}
          <span className="font-semibold text-indigo-400">Tailwind CSS</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            href="/get-started"
            className="inline-block px-8 py-3 text-base font-semibold bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/projects"
            className="inline-block px-8 py-3 text-base font-semibold border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
