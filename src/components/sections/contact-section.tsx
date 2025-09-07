"use client";

import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 pb-16 pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-[45px]">
            Contact Us
          </h2>
          <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
            Let's talk about your problem
          </h3>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 lg:mb-0">
              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Our Location</h4>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      401 Broadway, 24th Floor, Orchard Cloud View, London
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">How Can We Help?</h4>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      info@yourdomain.com
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      contact@yourdomain.com  
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Call Us</h4>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      +012 (345) 678 99
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      +456 789 012 34
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full rounded-lg bg-gray-50 dark:bg-gray-900 px-6 py-4 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full rounded-lg bg-gray-50 dark:bg-gray-900 px-6 py-4 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full rounded-lg bg-gray-50 dark:bg-gray-900 px-6 py-4 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;