"use client";

import React from 'react';
import Image from 'next/image';

const NewsletterSection: React.FC = () => {
  return (
    <section className="relative bg-blue-50 dark:bg-gray-800 py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[520px] lg:mb-0">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-[45px]">
                Newsletter
              </h2>
              <p className="mb-6 text-lg font-medium text-gray-600 dark:text-gray-300">
                Stay updated with our latest news and exclusive crypto insights. Subscribe to our newsletter and never miss important updates about the crypto world.
              </p>
              <form className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-lg bg-white dark:bg-gray-900 px-6 py-4 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[400px] text-center lg:mr-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/newsletter-shape-20.svg?"
                alt="newsletter shape"
                width={400}
                height={300}
                className="w-full opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;