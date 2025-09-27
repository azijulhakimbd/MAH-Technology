"use client";

import { Spotlight } from "@/components/ui/spotlight-new";



export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* 🔹 Spotlight effect background */}
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

      {/* 🔹 Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Build Websites Faster, <br /> Shine Brighter ✨
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Stunning spotlight effects and modern design components built with
          Next.js & Tailwind CSS.
        </p>
        <div className="mt-10">
          <a
            href="/get-started"
            className="inline-block px-8 py-3 text-base font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
