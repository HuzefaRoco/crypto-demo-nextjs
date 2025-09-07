"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    id: 1,
    question: "How can I participate in ICO Token sale?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat."
  },
  {
    id: 2,
    question: "What is ICO Crypto?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat."
  },
  {
    id: 3,
    question: "How do I benefit from ICO Token?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat."
  },
  {
    id: 4,
    question: "How can I purchase bitcoin?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat."
  }
];

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-white dark:bg-gray-900 pb-16 pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-blue-600 dark:text-blue-400 sm:text-xl">
            FAQ
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-[45px]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="mx-auto max-w-[800px]">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/faq-shape-1-18.svg?"
        alt="faq shape"
        width={300}
        height={200}
        className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 opacity-50"
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/faq-shape-2-19.svg?"
        alt="faq shape"
        width={300}
        height={200}
        className="absolute right-0 top-1/4 -z-10 opacity-50"
      />
    </section>
  );
};

export default FaqSection;