"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sun, Moon, ChevronDown } from "lucide-react";

const navItems = [
{ label: "Home", href: "/#home" },
{ label: "Features", href: "/#features" },
{ label: "Roadmap", href: "/#roadmap" }];


const pageSubItems = [
{ label: "Blog Grid Page", href: "/blog" },
{ label: "Token Sale Page", href: "/token-sale" },
{ label: "Support Page", href: "/support" },
{ label: "Signin Page", href: "/auth/signin" },
{ label: "Signup Page", href: "/auth/signup" }];


const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || !savedTheme && prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center transition-colors duration-300 ${
      isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"}`
      }>

      <div className="container max-w-[1430px]">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="block w-full py-6 lg:py-5">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/logo-1.svg?"
                alt="Logo"
                width={176}
                height={46}
                className="w-full" />

            </Link>
          </div>
          <div className="flex w-full items-center justify-end px-4">
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 xl:hidden"
                aria-label="navbarOpen">

                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
              </button>
              <nav
                className={`absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white dark:bg-gray-900 px-6 py-4 shadow-sm xl:static xl:block xl:w-full xl:max-w-full xl:bg-transparent xl:py-0 xl:shadow-none ${
                isMenuOpen ? "block" : "hidden"}`
                }>

                <ul className="block xl:flex">
                  {navItems.map((item) =>
                  <li key={item.label} className="menu-item">
                      <Link
                      href={item.href}
                      className="flex py-2 text-lg font-semibold text-muted-foreground hover:text-primary lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12">

                        {item.label}
                      </Link>
                    </li>
                  )}
                  <li className="submenu-item group relative">
                    <a
                      className="relative flex items-center py-2 text-lg font-semibold text-muted-foreground group-hover:text-primary lg:ml-7 lg:inline-flex lg:py-5 lg:pr-4 lg:pl-0 xl:ml-10 2xl:ml-12"
                      href="#">

                      Pages
                      <span className="pl-3">
                        <ChevronDown className="fill-current h-4 w-4" />
                      </span>
                    </a>
                    <ul className="submenu invisible absolute top-[115%] left-0 rounded-lg bg-white dark:bg-gray-900 p-4 opacity-0 shadow-lg transition-[top] duration-300 group-hover:visible group-hover:top-full group-hover:opacity-100 lg:block lg:w-[250px]">
                      {pageSubItems.map((item) =>
                      <li key={item.label}>
                          <Link
                          href={item.href}
                          className="block rounded-sm py-[10px] text-sm text-black dark:text-white hover:text-primary lg:px-4">

                            {item.label}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link
                      href="/#contact"
                      className="flex py-2 text-lg font-semibold text-muted-foreground hover:text-primary lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12">

                      Support
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 xl:pr-0 xl:pl-12 2xl:pl-20">
              <button className="mr-4 hidden h-[38px] w-[38px] items-center justify-center rounded-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm sm:flex">
                <Search className="h-5 w-5" />
              </button>
              <div className="mr-4">
                <button
                  onClick={toggleTheme}
                  className="flex cursor-pointer items-center justify-center rounded-full bg-secondary dark:bg-gray-700 transition-colors duration-300 !w-full !h-full"
                  aria-label="Toggle theme">

                  <span className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                  !isDarkMode ? "bg-primary text-white" : "bg-transparent text-muted-foreground"}`
                  }>
                    <Sun className="h-4 w-4 fill-current" />
                  </span>
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                  isDarkMode ? "bg-primary text-white" : "bg-transparent text-muted-foreground"}`
                  }>
                    <Moon className="h-4 w-4 fill-current" />
                  </span>
                </button>
              </div>
              <div className="hidden sm:flex">
                <Link
                  href="/auth/signin"
                  className="flex items-center justify-center rounded-full border border-border px-8 py-[9px] text-base font-semibold text-foreground transition-all hover:border-primary hover:bg-primary hover:text-white">

                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>);

};

export default HeaderNavigation;