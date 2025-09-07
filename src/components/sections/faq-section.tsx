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
    question: "How can i purchase bitcoin?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="relative z-10 overflow-hidden bg-background pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container">
        <div className="mx-auto mb-14 max-w-[770px] text-center lg:mb-[70px]">
          <span className="mb-3 block text-lg font-bold uppercase text-primary sm:text-xl">
            FAQ
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-foreground md:text-[45px]">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-medium text-muted-foreground sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="mx-auto max-w-[845px]">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="py-6 text-left text-xl font-semibold text-foreground hover:no-underline sm:text-2xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 text-base font-medium text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/faq-shape-1-18.svg?"
        alt="shape"
        width={168}
        height={339}
        className="absolute left-0 top-0 -z-10"
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/faq-shape-2-19.svg?"
        alt="shape"
        width={177}
        height={308}
        className="absolute bottom-0 right-0 -z-10"
      />
    </section>
  );
};

export default FaqSection;