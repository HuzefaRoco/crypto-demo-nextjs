"use client";

import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const teamData = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-483708-image-01.jpg",
    name: "Matheus Ferrero",
    title: "Marketing Expert",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-964817-image-02.jpg",
    name: "Eva Hudson",
    title: "Blockchain Developer",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-155223-image-03.jpg",
    name: "Jackie Sanders",
    title: "Creative Designer",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-158566-image-04.jpg",
    name: "Liam Walker",
    title: "SEO Expert",
  },
];

interface TeamCardProps {
  image: string;
  name: string;
  title: string;
}

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300"
    aria-label="social-link"
  >
    {children}
  </a>
);

const TeamCard: React.FC<TeamCardProps> = ({ image, name, title }) => (
  <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
    <div
      className="group mb-10 rounded-lg border-b-4 border-transparent p-4 text-center transition-all hover:shadow-lg"
      style={{ backgroundColor: "var(--card)" }}
    >
      <div className="mb-6 overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={name}
          width={266}
          height={208}
          className="w-full rounded-sm transition-transform duration-300 group-hover:scale-105"
          style={{ color: "transparent" }}
        />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-[var(--text-dark)] dark:text-white">{name}</h3>
        <p className="mb-4 text-sm font-medium text-[var(--muted-foreground)] dark:text-gray-400">{title}</p>
        <div className="flex justify-center space-x-4">
          <SocialIcon href="#"><Twitter width={20} height={20} /></SocialIcon>
          <SocialIcon href="#"><Facebook width={20} height={20} /></SocialIcon>
          <SocialIcon href="#"><Instagram width={20} height={20} /></SocialIcon>
          <SocialIcon href="#"><Linkedin width={20} height={20} /></SocialIcon>
        </div>
      </div>
    </div>
  </div>
);

const TeamSection = () => (
  <section
    id="team"
    className="border-t pb-20 pt-[120px] bg-[var(--background)]"
    style={{ borderColor: "var(--border)" }}
  >
    <div className="container mx-auto">
      <div className="mx-auto mb-16 max-w-[590px] text-center">
        <span className="mb-3 block text-lg font-bold uppercase text-[var(--primary)] sm:text-xl">
          OUR TEAM
        </span>
        <h2 className="mb-3 text-3xl font-bold leading-tight text-[var(--text-dark)] md:text-[45px] dark:text-white">
          Meet our Team
        </h2>
        <p className="text-lg font-medium text-[var(--muted-foreground)] dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, in et dignissim quam condimentum vel.
        </p>
      </div>

      <div className="-mx-4 flex flex-wrap justify-center">
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
