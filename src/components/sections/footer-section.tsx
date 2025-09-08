"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const socialLinks = [
  { href: "#", icon: "discord" },
  { href: "#", icon: "twitter" },
  { href: "#", icon: "linkedin" },
  { href: "#", icon: "youtube" },
];

// Icon Components
const icons: any = {
  discord: (
    <svg width="20" height="15" viewBox="0 0 20 15" className="fill-current">
      <path d="M16.9038 0.00762939H3.09C1.385 0.00762939 0 1.39263 0 3.09763V11.9126C0 13.6176 1.385 15.0026 3.09 15.0026H13.8825L16.485 13.0651L17.5125 14.9951L20 10.3701L17.925 9.17013V3.09763C17.925 1.39263 16.54 0.00762939 14.835 0.00762939H16.9038ZM5.28 10.1951C4.4275 10.1951 3.73 9.49763 3.73 8.64513C3.73 7.79263 4.4275 7.09513 5.28 7.09513C6.1325 7.09513 6.83 7.79263 6.83 8.64513C6.83 9.49763 6.1325 10.1951 5.28 10.1951ZM9.9525 12.0126C8.8325 12.0126 8.3525 11.2326 8.3525 11.2326L8.6825 10.7451C8.6825 10.7451 9.0725 11.2476 9.8775 11.2476C10.575 11.2476 11.085 10.8226 11.085 10.2251V10.1351C9.69 9.94013 7.7025 10.4351 7.7025 8.16263C7.7025 6.78263 8.8025 5.81763 10.47 5.81763C12.3525 5.81763 13.4375 6.81263 13.4375 8.21513C13.4375 10.1526 11.6625 10.7751 10.0575 10.7751L9.9525 12.0126V12.0126ZM12.6375 10.1951C11.785 10.1951 11.0875 9.49763 11.0875 8.64513C11.0875 7.79263 11.785 7.09513 12.6375 7.09513C13.49 7.09513 14.1875 7.79263 14.1875 8.64513C14.1875 9.49763 13.49 10.1951 12.6375 10.1951Z"></path>
      <path d="M11.0849 9.38763C11.7149 9.38763 12.2249 8.87763 12.2249 8.24763C12.2249 7.61763 11.7149 7.10763 11.0849 7.10763C10.4549 7.10763 9.94492 7.61763 9.94492 8.24763C9.94492 8.87763 10.4549 9.38763 11.0849 9.38763Z"></path>
    </svg>
  ),
  twitter: (
    <svg width="20" height="17" viewBox="0 0 20 17" className="fill-current">
      <path d="M19.1843 2.15833C18.5159 2.45833 17.8043 2.65833 17.061 2.75833C17.826 2.29167 18.426 1.575 18.7043 0.708333C17.9893 1.14167 17.1893 1.45833 16.346 1.625C15.661 0.908333 14.7043 0.466667 13.6393 0.466667C11.6043 0.466667 9.946 2.13333 9.946 4.16667C9.946 4.45833 9.9776 4.74167 10.0393 5.01667C6.73926 4.85833 3.826 3.35 1.83926 1.05833C1.48926 1.68333 1.296 2.4 1.296 3.175C1.296 4.44167 1.946 5.55833 2.91093 6.2C2.326 6.18333 1.7776 6.025 1.296 5.76667V5.81667C1.296 7.55 2.53926 8.99167 4.196 9.325C3.86093 9.41667 3.50426 9.45833 3.13093 9.45833C2.90426 9.45833 2.68926 9.43333 2.476 9.39167C2.93926 10.8 4.226 11.8333 5.78926 11.8667C4.56093 12.825 2.98926 13.4167 1.28093 13.4167C0.989265 13.4167 0.704265 13.4 0.410932 13.3583C1.98926 14.3583 3.876 14.9667 5.926 14.9667C13.6226 14.9667 17.5126 8.55833 17.5126 3.01667C17.5126 2.85 17.5043 2.68333 17.496 2.525C18.3109 1.95 18.896 1.225 19.346 0.416667L19.1843 2.15833Z"></path>
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
      <path d="M19 0H1C0.4 0 0 0.4 0 1V19C0 19.6 0.4 20 1 20H19C19.6 20 20 19.6 20 19V1C20 0.4 19.6 0 19 0ZM6 17H3V8H6V17ZM4.5 6.2C3.5 6.2 2.7 5.4 2.7 4.4C2.7 3.4 3.5 2.6 4.5 2.6C5.5 2.6 6.3 3.4 6.3 4.4C6.3 5.4 5.5 6.2 4.5 6.2ZM17 17H14V11.4C14 10.1 13 9.3 11.9 9.3C10.9 9.3 10 10.1 10 11.3V17H7V8H10V9.6C10.5 8.6 11.6 8 12.8 8C15.1 8 17 9.8 17 12.5V17Z"></path>
    </svg>
  ),
  youtube: (
    <svg width="20" height="14" viewBox="0 0 20 14" className="fill-current">
      <path d="M18.8415 5.25367C18.5649 2.6775 16.9202 0.766333 14.3312 0.4705C11.8349 -0.158333 8.16492 -0.158333 5.66859 0.4705C3.07859 0.766333 1.43492 2.6775 1.15825 5.25367C0.5 8.12867 0.5 8.87867 1.15825 11.7537C1.43492 14.3308 3.07859 16.241 5.66859 16.5368C8.16492 17.1657 11.8349 17.1657 14.3312 16.5368C16.9212 16.241 18.5649 14.3298 18.8415 11.7537C19.5 8.87867 19.5 8.12867 18.8415 5.25367ZM8.33325 12.25V4.75L13.3333 8.5L8.33325 12.25Z"></path>
    </svg>
  ),
};

// Social Link Component
const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-all"
  >
    {icons[icon]}
  </a>
);

const FooterSection = () => {
  const quickLinks = ["What is ico", "Roadmap", "Whitepaper", "Social Network", "Join Us Now"];
  const supportLinks = ["Setting & Privacy", "Help & Support", "Terms & Conditions", "24/7 Supports", "On Point FAQ"];
  const newsPosts = [
    { title: "Laboris nisi aliquip dium exiuliym commo cons...", date: "Aug 21 2024" },
    { title: "Expenses as material bre mate insisted buildi...", date: "Aug 21 2024" }
  ];

  return (
    <footer className="relative z-10 bg-[var(--background)] pt-24 pb-10 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--primary)]/10 rounded-full -z-10 animate-bounce-slow"></div>
      <div className="absolute bottom-10 right-0 w-40 h-40 bg-[var(--primary)]/10 rounded-full -z-10 animate-bounce-slow delay-1000"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo & Social */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/logo-1.svg?"
                alt="Crypto"
                width={110}
                height={29}
              />
            </Link>
            <p className="mb-6 text-[var(--muted-foreground)] font-medium max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae quam nec ante fringilla vel at erat convallis elit.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <SocialLink key={idx} href={link.href} icon={link.icon} />
              ))}
            </div>
          </div>

          {/* Links & News */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="mb-4 font-semibold text-[var(--foreground)] text-lg">Quick Links</h4>
              <ul className="space-y-2 text-[var(--muted-foreground)]">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-[var(--primary)] transition">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-[var(--foreground)] text-lg">Support</h4>
              <ul className="space-y-2 text-[var(--muted-foreground)]">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-[var(--primary)] transition">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-[var(--foreground)] text-lg">News & Posts</h4>
              <ul className="space-y-4 text-[var(--muted-foreground)]">
                {newsPosts.map((post, idx) => (
                  <li key={idx}>
                    <Link href="#" className="block font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition">
                      {post.title}
                    </Link>
                    <p className="flex items-center gap-1 text-sm font-medium text-[var(--muted-foreground)]">
                      <CalendarDays className="w-4 h-4" /> {post.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-6">
          <p className="text-center text-[var(--muted-foreground)] text-sm">
            © Crypto - All Rights Reserved | Crafted by Next.js Templates
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        .animate-bounce-slow.delay-1000 { animation-delay: 1s; }
      `}</style>
    </footer>
  );
};

export default FooterSection;
