"use client";
import React from "react";
import Image from "next/image";

//
// ---- HERO SECTION
//

const HeroSection = () => {
  return (
    <section className="relative z-10 bg-gradient-to-b from-white to-gray-50 pb-28 pt-48 dark:from-gray-900 dark:to-gray-950">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-text-dark dark:text-white md:text-5xl">
            Work Ai for All
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-lg text-text-medium-gray dark:text-gray-300">
            Give every employee an AI Assistant and Agents that put your company’s knowledge to work.
          </p>

          <a
            href="#"
            className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80"
          >
            Get a Demo
          </a>
        </div>
      </div>

      {/* Decorative Background Image */}
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
