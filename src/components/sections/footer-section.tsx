import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pt-16 pb-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo and Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-5/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/logo-1.svg?"
                  alt="logo"
                  width={176}
                  height={46}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-6 max-w-[400px] text-base font-medium text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla ut elit ornare tempus tempor.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 shadow hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5 fill-current" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 shadow hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                >
                  <Twitter className="h-5 w-5 fill-current" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 shadow hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 shadow hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h4>
              <ul>
                <li>
                  <Link
                    href="/#home"
                    className="mb-3 inline-block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#features"
                    className="mb-3 inline-block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="mb-3 inline-block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonials"
                    className="mb-3 inline-block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                Support
              </h4>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* News & Posts */}
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                News & Post
              </h4>
              <div className="mb-5">
                <h5 className="mb-2 text-base font-medium text-gray-900 dark:text-white">
                  <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    How crypto can help your business grow
                  </Link>
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">Aug 21, 2024</p>
              </div>
              <div className="mb-5">
                <h5 className="mb-2 text-base font-medium text-gray-900 dark:text-white">
                  <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    The future of decentralized finance
                  </Link>
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">Aug 18, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full text-center sm:w-auto sm:text-left">
              <p className="text-base text-gray-600 dark:text-gray-300">
                © 2024 Next.js Crypto Template. All rights reserved.
              </p>
            </div>
            <div className="w-full text-center sm:w-auto sm:text-right">
              <ul className="flex items-center justify-center space-x-6 sm:justify-end">
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;