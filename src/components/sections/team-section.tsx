import React from 'react';
import Image from 'next/image';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const teamData = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-483708-image-01.jpg?",
    name: "Matheus Ferrero",
    title: "Marketing Expert",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-964817-image-02.jpg?",
    name: "Eva Hudson",
    title: "Blockchain Developer",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-155223-image-03.jpg?",
    name: "Jackie Sanders",
    title: "Creative Designer",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-158566-image-04.jpg?",
    name: "Jackie Sanders",
    title: "SEO Expert",
  },
];

interface TeamCardProps {
  image: string;
  name: string;
  title: string;
}

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-muted-foreground hover:text-primary">
    {children}
  </a>
);

const TeamCard: React.FC<TeamCardProps> = ({ image, name, title }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
      <div className="group relative mb-12 text-center">
        <div className="relative mx-auto h-[320px] w-[270px] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={name}
            width={270}
            height={320}
            className="w-full transition-all duration-300 group-hover:scale-105"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="relative z-10 mx-auto -mt-8 w-[calc(100%-40px)] rounded-lg bg-white px-5 py-6 shadow-md">
          <h3 className="mb-1 text-2xl font-bold text-foreground">{name}</h3>
          <p className="mb-4 text-base font-medium text-muted-foreground">{title}</p>
          <div className="flex items-center justify-center space-x-5">
            <SocialIcon href="#">
              <Twitter width={20} height={20} />
            </SocialIcon>
            <SocialIcon href="#">
              <Facebook width={20} height={20} />
            </SocialIcon>
            <SocialIcon href="#">
              <Instagram width={20} height={20} />
            </SocialIcon>
            <SocialIcon href="#">
              <Linkedin width={20} height={20} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </div>
  );
};


const TeamSection = () => {
  return (
    <section className="bg-background pb-20 pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-primary sm:text-xl">
            OUR TEAM
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-foreground md:text-[45px]">
            Meet our Team
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
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
};

export default TeamSection;