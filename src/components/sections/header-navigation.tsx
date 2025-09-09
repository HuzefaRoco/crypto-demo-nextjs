"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import ToggleTheme from "./theme-toggle";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "Roadmap", href: "/#roadmap" },
];

const pageSubItems = [
  { label: "Blog Grid Page", href: "/blog" },
  { label: "Token Sale Page", href: "/token-sale" },
  { label: "Support Page", href: "/support" },
  { label: "Signin Page", href: "/auth/signin" },
  { label: "Signup Page", href: "/auth/signup" },
];

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-[1430px] px-4">
        <div className="relative flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 py-6 lg:py-5">
              <img
                src="/rocotal-logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="h-15 w-15"
              />
              <span className="text-2xl font-bold text-[#5d6fee]">Rocotal</span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:flex">
            <ul className="flex items-center space-x-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Pages Dropdown */}
              <li className="relative group">
                <a
                  href="#"
                  className="flex items-center text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  Pages
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <ul className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-lg bg-white dark:bg-gray-800 p-4 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                  {pageSubItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-black dark:text-white hover:text-primary"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 xl:hidden focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span
                className={`block h-0.5 w-8 bg-black dark:bg-white transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-8 bg-black dark:bg-white my-1 transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-8 bg-black dark:bg-white transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-black dark:text-white shadow-sm transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>

            <ToggleTheme />

            <Link
              href="/auth/signin"
              className="hidden sm:flex items-center justify-center rounded-full border border-border px-6 py-2 text-base font-semibold text-foreground transition hover:border-primary hover:bg-primary hover:text-white dark:text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;
