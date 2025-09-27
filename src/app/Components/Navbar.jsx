"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        shrunk
          ? "backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/20"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          shrunk ? "py-2" : "py-5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* 🔹 Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center rounded-md border dark:border-slate-700 transition-all duration-300 ${
                shrunk ? "w-8 h-8" : "w-12 h-12"
              }`}
            >
              <span
                className={`font-extrabold tracking-tight ${
                  shrunk ? "text-sm" : "text-lg"
                }`}
              >
                A
              </span>
            </div>

            <div
              className={`hidden sm:flex flex-col leading-tight transition-all ${
                shrunk ? "opacity-80" : "opacity-100"
              }`}
            >
              <span
                className={`font-bold ${shrunk ? "text-base" : "text-2xl"}`}
              >
                Aceternity
              </span>
              <span
                className={`text-xs -mt-1 ${
                  shrunk ? "hidden" : "block text-slate-500 dark:text-slate-400"
                }`}
              >
                Resizable Navbar
              </span>
            </div>
          </Link>

          {/* 🔹 Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  shrunk
                    ? "text-slate-700 dark:text-slate-200"
                    : "text-slate-900 dark:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 🔹 Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="#login"
                className="text-sm px-4 py-2 rounded-md hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition"
              >
                Log in
              </Link>
              <Link
                href="#signup"
                className="text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 rounded-md shadow-sm hover:scale-105 transition"
              >
                Get started
              </Link>
            </div>

            {/* 🔹 Mobile Toggle */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-200/40 dark:border-slate-800/40">
            <Link
              href="#login"
              className="block px-3 py-2 rounded-md text-base"
            >
              Log in
            </Link>
            <Link
              href="#signup"
              className="mt-2 block px-3 py-2 rounded-md font-semibold"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
