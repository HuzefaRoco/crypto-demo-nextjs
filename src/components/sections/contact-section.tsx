"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  details: string[];
}

const contactInfoData: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["401 Broadway, 24th Floor, Orchard Cloud View, London"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@yourdomain.com", "contact@yourdomain.com"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+990 846 73644", "+550 9475 4543"],
  },
];

const ContactCard = ({ info }: { info: ContactInfo }) => {
  const Icon = info.icon;
  return (
    <div className="group relative w-full max-w-sm rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-2 dark:bg-[#131B4D]">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)/10] text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h4 className="mb-2 text-lg font-semibold text-[var(--foreground)] dark:text-white">{info.title}</h4>
      {info.details.map((detail, i) => (
        <p key={i} className="text-base font-medium text-[var(--muted-foreground)] dark:text-[var(--muted-foreground)]">
          {detail}
        </p>
      ))}
    </div>
  );
};

const ContactSection = () => (
  <section id="contact" className="relative z-10 bg-light-bg py-20 dark:bg-[#14102C]">
    <div className="container mx-auto">
      {/* Heading */}
      <div className="mx-auto mb-16 max-w-[600px] text-center">
        <span className="text-primary mb-3 block text-lg font-bold uppercase sm:text-xl">Contact Us</span>
        <h2 className="mb-4 text-3xl font-bold leading-tight text-black md:text-[45px] dark:text-white">
          Have a Question? Let's Talk!
        </h2>
        <p className="text-body-color-2 dark:text-body-color text-lg font-medium">
          We are here to help you. Send us a message or reach out through any of the contact methods below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="mb-16 flex flex-wrap justify-center gap-6">
        {contactInfoData.map((info) => (
          <ContactCard key={info.title} info={info} />
        ))}
      </div>

      {/* Contact Form */}
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-10 shadow-lg dark:bg-[#131B4D]">
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--foreground)] dark:text-white">
                Full Name*
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                className="h-auto rounded-md border-[var(--input)] bg-transparent px-4 py-3 text-base text-[var(--foreground)]"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--foreground)] dark:text-white">
                Email Address*
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="h-auto rounded-md border-[var(--input)] bg-transparent px-4 py-3 text-base text-[var(--foreground)]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--foreground)] dark:text-white">
              Message*
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here"
              className="w-full rounded-md border-[var(--input)] bg-transparent px-4 py-3 text-base text-[var(--foreground)]"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-md bg-[var(--primary)] px-10 py-4 text-base font-semibold text-[var(--primary-foreground)] hover:bg-[var(--primary)/90] btn-shadow"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>

    {/* Decorative Shapes */}
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

export default ContactSection;
