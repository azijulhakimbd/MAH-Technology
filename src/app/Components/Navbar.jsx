"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "features" },
    { name: "About Us", link: "about" },
    { name: "Blog", link: "blog" },
    { name: "Contact", link: "contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* 🔹 Logo Section */}
          <NavbarLogo>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border dark:border-slate-700">
                <span className="font-extrabold">MAH</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Technology</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Resizable Navbar
                </span>
              </div>
            </Link>
          </NavbarLogo>

          {/* 🔹 Desktop Links */}
          <NavItems
            items={navItems.map((item) => ({
              name: item.name,
              link: item.link,
            }))}
          />

          {/* 🔹 Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <NavbarButton variant="secondary">Log in</NavbarButton>
            <NavbarButton variant="primary">Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border dark:border-slate-700">
                  <span className="font-bold text-sm">MAH</span>
                </div>
                <span className="font-semibold text-base">Technology</span>
              </Link>
            </NavbarLogo>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-neutral-600 dark:text-neutral-300 py-2"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Log in
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
