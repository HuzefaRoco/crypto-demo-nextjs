"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactInfo {
  title: string;
  details: string[];
}

const contactInfoData: ContactInfo[] = [
  {
    title: "Our Location",
    details: ["401 Broadway, 24th Floor, Orchard Cloud View, London"],
  },
  {
    title: "Email Address",
    details: ["info@yourdomain.com", "contact@yourdomain.com"],
  },
  {
    title: "Phone Number",
    details: ["+990 846 73644", "+550 9475 4543"],
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="pb-16 pt-[120px] lg:pb-28 lg:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-14 max-w-[530px] lg:mb-0">
              <span className="mb-3 block text-lg font-bold uppercase text-primary sm:text-xl">
                Contact Us
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-[45px]">
                Let's talk about your problem.
              </h2>

              {contactInfoData.map((info, index) => (
                <div key={index} className="mb-10">
                  <h3 className="mb-4 text-xl font-bold text-foreground sm:text-[22px]">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-base font-medium text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="rounded-lg bg-background px-8 py-10 shadow-lg sm:px-10">
              <div className="mb-8 border-b border-border pb-8">
                <h3 className="mb-3.5 text-2xl font-semibold text-foreground sm:text-3xl">
                  How Can We Help?
                </h3>
                <p className="text-base font-medium text-muted-foreground">
                  Tell us your problem we will get back to you ASAP.
                </p>
              </div>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-[22px]">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-foreground"
                      >
                        Full Name*
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Adam Gelius"
                        className="h-auto w-full rounded-md border-input bg-transparent px-4 py-3 text-base text-foreground"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-[22px]">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-foreground"
                      >
                        Email Address*
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="h-auto w-full rounded-md border-input bg-transparent px-4 py-3 text-base text-foreground"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-[22px]">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-foreground"
                      >
                        Message*
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="type your message here"
                        className="w-full rounded-md border-input bg-transparent px-4 py-3 text-base text-foreground"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <Button
                      type="submit"
                      className="mt-2 h-auto w-full rounded-md px-10 py-4 text-base font-semibold"
                    >
                      Send Message
                    </Button>
                  </div>
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