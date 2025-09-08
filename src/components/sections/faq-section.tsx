"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How can I participate in the ICO Token sale?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.",
  },
  {
    question: "What is ICO Crypto?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.",
  },
  {
    question: "How do I benefit from the ICO Token?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.",
  },
  {
    question: "How can I purchase bitcoin?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.",
  },
];

const FaqCard = ({ faq }: { faq: FAQItem }) => (
  <AccordionItem value={faq.question}>
    <AccordionTrigger className="py-6 text-left text-xl font-semibold text-[var(--foreground)] sm:text-2xl hover:no-underline">
      {faq.question}
    </AccordionTrigger>
    <AccordionContent className="pt-0 pb-6 text-base font-medium text-[var(--muted-foreground)]">
      {faq.answer}
    </AccordionContent>
  </AccordionItem>
);

const FaqSection = () => {
  return (
    <section
      id="faq"
      className="relative z-10 bg-light-bg pt-[120px] pb-20 dark:bg-[#14102C]"
    >
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="text-primary mb-3 block text-lg font-bold uppercase sm:text-xl">
            FAQ
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-black md:text-[45px] dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-body-color-2 dark:text-body-color text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-[845px] flex flex-wrap">
          <Accordion type="single" collapsible className="w-full px-4">
            {faqData.map((faq) => (
              <FaqCard key={faq.question} faq={faq} />
            ))}
          </Accordion>
        </div>
      </div>

      {/* Decorative shapes */}
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/faq-shape-1-18.svg"
        alt="shape"
        width={168}
        height={339}
        className="absolute left-0 top-0 -z-10"
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/faq-shape-2-19.svg"
        alt="shape"
        width={177}
        height={308}
        className="absolute bottom-0 right-0 -z-10"
      />
    </section>
  );
};

export default FaqSection;
