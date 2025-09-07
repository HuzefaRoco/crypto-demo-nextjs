import React from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Juhan Ahamed",
    role: "Graphic Designer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-483708-image-01.jpg?",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 2,
    name: "Musharof Chowdhury",
    role: "Web Developer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-964817-image-02.jpg?",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 3,
    name: "Naimur Rahman",
    role: "Marketing Manager",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-155223-image-03.jpg?",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 4,
    name: "Devid Miller",
    role: "App Developer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-158566-image-04.jpg?",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="bg-white dark:bg-gray-900 pb-16 pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-blue-600 dark:text-blue-400 sm:text-xl">
            OUR TEAM
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-[45px]">
            Meet our Team
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="mx-auto mb-14 max-w-[370px] text-center">
                <div className="mx-auto mb-6 h-[250px] w-[250px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-base font-medium text-gray-600 dark:text-gray-300 sm:text-lg">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href={member.social.twitter}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.facebook}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;