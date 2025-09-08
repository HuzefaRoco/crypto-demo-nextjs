"use client";
import React from "react";
import Image from "next/image";

//
// ---- CRYPTO ICONS (modern format)
//

// Bitcoin
const IconBitcoin = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7">
    <circle cx="14" cy="14" r="14" fill="#F7931A" />
    <path
      d="M17.8 12.4c.5-.4.7-1 .7-1.6 0-1.2-1-2-2.2-2h-3.2V6.5h2.5V5h-2.5V3.5h-1.5V5h-2.5v1.5h2.5v2.3h-1.5c-1 0-1.8.8-1.8 1.8v.7c0 .2.2.4.4.4h.4v6.2h-.4c-.2 0-.4.2-.4.4v.7c0 .2.2.4.4.4h.4v2.5h2.5v1.5h-2.5v1.5h2.5v1h1.5v-1h2.5v-1.5h-2.5v-2.5h3.8c1 0 1.8-.8 1.8-1.8v-.7c0-.6-.2-1.2-.7-1.6.4-.4.7-1 .7-1.6 0-1-.8-1.8-1.8-1.8h-3.8v-2.3h4.7Z"
      fill="white"
    />
  </svg>
);

// Ethereum
const IconEthereum = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7">
    <circle cx="14" cy="14" r="14" fill="#627EEA" />
    <path
      d="M14 3 8 16.5 14 21l6-4.5L14 3Zm0 20-6-5 6 8 6-8-6 5Z"
      fill="white"
      fillOpacity="0.6"
    />
    <path d="M14 21l6-4.5L14 3v18Z" fill="white" />
    <path d="M8 16.5 14 21V3L8 16.5Z" fill="white" fillOpacity="0.6" />
  </svg>
);

// Binance
const IconBinance = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7">
    <circle cx="14" cy="14" r="14" fill="#F0B90B" />
    <path
      d="M14 5 8.5 10.5l2.6 2.6L14 10.1l2.9 2.9 2.6-2.6L14 5Zm0 18 5.5-5.5-2.6-2.6L14 23.9l-2.9-2.9-2.6 2.6L14 23.9Z"
      fill="white"
    />
  </svg>
);

// Tether
const IconTether = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7">
    <circle cx="14" cy="14" r="14" fill="#50AF95" />
    <path
      d="M20.3 9.6V7H7.7v2.6h4.6v8.8h3.5V9.6h4.5Z"
      fill="white"
    />
  </svg>
);

// Cardano
const IconCardano = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7">
    <circle cx="14" cy="14" r="14" fill="#0033AD" />
    <circle cx="14" cy="14" r="4" fill="white" />
  </svg>
);

// Shiba
const IconShiba = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7">
    <circle cx="14" cy="14" r="14" fill="#F00500" />
    <path
      d="M9 18c.5 1.5 2.5 2.5 5 2.5s4.5-1 5-2.5H9Z"
      fill="white"
    />
  </svg>
);

//
// ---- ICON LIST + TOOLTIP
//

const cryptoIcons = [
  { id: 1, component: <IconBitcoin />, tooltip: "Bitcoin (BTC)" },
  { id: 2, component: <IconEthereum />, tooltip: "Ethereum (ETH)" },
  { id: 3, component: <IconBinance />, tooltip: "Binance (BNB)" },
  { id: 4, component: <IconTether />, tooltip: "Tether (USDT)" },
  { id: 5, component: <IconCardano />, tooltip: "Cardano (ADA)" },
  { id: 6, component: <IconShiba />, tooltip: "Shiba Inu (SHIB)" },
];

const TooltipIcon = ({
  icon,
  tooltipText,
}: {
  icon: React.ReactNode;
  tooltipText: string;
}) => (
  <div className="group relative mt-4 px-1 sm:px-2">
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-sm">
      {icon}
    </span>
    <div className="absolute -top-12 left-1/2 z-50 -translate-x-1/2 rounded-md bg-foreground px-3 py-1.5 text-sm text-background opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
      {tooltipText}
      <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-foreground"></span>
    </div>
  </div>
);

//
// ---- HERO SECTION
//

const HeroSection = () => {
  // Add debugging to check if dark mode is working
  React.useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      console.log('Dark mode active:', isDark);
      console.log('HTML classes:', document.documentElement.className);
    };
    
    checkDarkMode();
    
    // Listen for class changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 min-h-screen bg-gradient-to-b from-background to-secondary pb-28 pt-48">
      {/* Add a debug indicator that changes dramatically */}
      <div className="fixed top-20 right-4 z-50 rounded-lg bg-red-500 px-4 py-2 text-white dark:bg-green-500">
        <span className="text-sm font-bold">
          LIGHT MODE
        </span>
        <span className="hidden text-sm font-bold dark:inline">
          DARK MODE
        </span>
      </div>
      
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Next.js Template & Boilerplate for Crypto, ICO & Web3
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-lg text-muted-foreground">
            A modern Next.js template for Crypto, Blockchain, ICO, and Web3 —
            styled with Tailwind CSS. Includes UI components, pages, and
            integrations to help you launch quickly.
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {cryptoIcons.map((icon) => (
              <TooltipIcon
                key={icon.id}
                icon={icon.component}
                tooltipText={icon.tooltip}
              />
            ))}
          </div>

          <a
            href="#"
            className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            Buy Tokens 47% Off
          </a>
        </div>
      </div>

      {/* Decorative Background Images */}
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/hero-shape-1-3.svg?"
        alt="shape"
        width={411}
        height={276}
        className="absolute left-0 top-0 -z-10"
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/hero-shape-2-4.svg?"
        alt="shape"
        width={820}
        height={692}
        className="absolute right-0 top-0 -z-10"
      />
    </section>
  );
};

export default HeroSection;