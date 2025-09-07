"use client";

import Image from "next/image";
import React from "react";

const BitcoinIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9231 6.84615C13.5359 7.41026 13.5359 9.17949 13.5359 9.17949C13.5359 9.17949 14.5256 8.76923 15.0641 9.38462C15.6026 10 14.3333 10.5128 14.3333 10.5128C14.3333 10.5128 15.6026 11.0256 15.0641 11.6923C14.5256 12.359 13.5359 12.0513 13.5359 12.0513C13.5359 12.0513 13.5359 13.7179 12.9231 14.2821C12.2821 14.8205 10.5641 14.2821 10.5641 14.2821L10.5128 15.6923H9.4359L9.48718 14.2821C9.48718 14.2821 7.76923 14.8205 7.12821 14.2821C6.48718 13.7179 6.48718 12.0513 6.48718 12.0513C6.48718 12.0513 5.30769 12.4103 4.82051 11.7436C4.33333 11.0769 5.60256 10.5641 5.60256 10.5641C5.60256 10.5641 4.33333 10.0513 4.87179 9.38462C5.41026 8.71795 6.48718 9.17949 6.48718 9.17949C6.48718 9.17949 6.53846 7.41026 7.12821 6.84615C7.71795 6.28205 9.4359 6.84615 9.4359 6.84615L9.48718 5.38462H10.5641L10.5128 6.84615C10.5128 6.84615 12.2821 6.28205 12.9231 6.84615Z"
      fill="#F7931A"
    />
    <path
      d="M9.98718 8.12821C9.79487 7.9359 9.48718 7.9359 9.48718 7.9359L9.4359 9.74359C10.7051 9.84615 11.1667 10.3077 10.9744 11.2308C10.7564 12.2564 9.4359 12.0513 9.4359 12.0513V13.0769H10.5128V12.0513C10.5128 12.0513 12.2308 11.9487 12.3333 10.7179C12.4359 9.48718 10.6538 9.38462 10.6538 9.38462L10.7051 7.9359C10.7051 7.9359 10.1795 8.32051 9.98718 8.12821ZM9.4359 9.74359H8.30769L8.25641 11.2308C8.25641 11.2308 8.71795 11.2821 8.87179 11.2821C9.28205 11.2821 9.48718 10.8718 9.4359 10.5128L9.4359 9.74359Z"
      fill="white"
    />
  </svg>
);

const EthereumIcon = () => (
  <svg
    width="15"
    height="25"
    viewBox="0 0 15 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4991 11.9602L7.5 15.5818L0.500946 11.9602L7.5 0.5L14.4991 11.9602ZM7.5 16.73L0.5 13.1084V13.1085L7.5 24.5L14.5 13.1085V13.1084L7.5 16.73Z"
      fill="#627EEA"
    />
  </svg>
);

const ChainlinkIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.963 0.5L4.54481 3.52206L6.59367 4.7077L10.963 2.05389L19.2965 6.84021L17.2476 8.02585L10.963 4.41732L2.57116 9.20364L10.963 13.9613L15.1444 11.696L15.1328 15.1186L10.963 17.5252L0.5 11.567L10.963 5.58268L21.426 11.567V18.1764H23.5V10.3893L10.963 0.5Z"
      fill="#375BD2"
    />
  </svg>
);

const PolygonIcon = () => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5925 5.51336L11.0003 2.5L5.40813 5.51336V11.54L11.0003 14.5534L16.5925 11.54V5.51336ZM21.9234 9.17336L17.581 11.7534V13.46L22 10.88V9.24L21.9234 9.17336ZM4.41813 11.7534L0.0766602 9.17336L0 9.24V10.88L4.41813 13.46V11.7534ZM17.581 4.24669V2.54002L21.9225 5.12002L22 5.18669V6.82669L17.581 4.24669ZM4.41908 2.54002V4.24669L0.077611 6.82669V5.18669L0.0766602 5.12002L4.41908 2.54002ZM5.47481 15.6534L10.9234 18.6667L16.5156 15.6534V13.8867L10.9234 16.9L5.47481 13.8867V15.6534Z"
      fill="#8247E5"
    />
  </svg>
);

const timelineData = [
  {
    date: "Feb 25, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel",
    badge: {
      name: "Bitcoin",
      percentage: "4.5%",
      Icon: BitcoinIcon,
      bgColor: "bg-[#F4F1D7]",
    },
  },
  {
    date: "Jan 14, 2026",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel",
    badge: {
      name: "Ethereum",
      percentage: "2.5%",
      Icon: EthereumIcon,
      bgColor: "bg-[#EBE9FE]",
    },
  },
  {
    date: "Mar 30, 2028",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel",
    badge: {
      name: "Chainlink",
      percentage: "4.5%",
      Icon: ChainlinkIcon,
      bgColor: "bg-[#E7F0FF]",
    },
  },
  {
    date: "Dec 19, 2028",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel",
    badge: {
      name: "Polygon",
      percentage: "2.5%",
      Icon: PolygonIcon,
      bgColor: "bg-[#F1E9FE]",
    },
  },
];

type TimelineItem = (typeof timelineData)[0];

const TimelineCard = ({ date, description, badge }: TimelineItem) => (
  <div className="relative z-10 mx-auto inline-block max-w-[480px] rounded-xl border border-gray-200 bg-white px-7 py-8 shadow-md sm:px-9">
    <h3 className="mb-4 text-2xl font-bold text-black">{date}</h3>
    <p className="mb-8 text-base font-medium leading-relaxed text-gray-500">
      {description}
    </p>
    <a
      href="#"
      className={`${badge.bgColor} inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-base font-medium text-black`}
    >
      <badge.Icon />
      {badge.name}
      <span className="ml-1 text-primary">{badge.percentage}</span>
    </a>
  </div>
);

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative z-10 py-20 lg:py-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-primary sm:text-xl">
            ROADMAP
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-black md:text-[45px]">
            The Timeline
          </h2>
          <p className="text-lg font-medium text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>
      </div>

      <div className="container relative">
        <div className="absolute bottom-0 left-1/2 -z-10 hidden -translate-x-1/2 lg:block">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/timeline-16.svg?"
            alt="shape"
            width={318}
            height={1455}
            className="h-auto w-full"
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-14 text-center lg:mb-[100px] lg:text-right">
              <div className="lg:mr-0">
                <TimelineCard {...timelineData[0]} />
              </div>
            </div>
            <div className="mb-14 text-center lg:mb-[100px] lg:text-right">
              <div className="lg:mr-0">
                <TimelineCard {...timelineData[2]} />
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="h-0 lg:h-40 xl:h-[220px]"></div>
            <div className="mb-14 text-center lg:mb-[100px] lg:text-left">
              <div className="lg:ml-0">
                <TimelineCard {...timelineData[1]} />
              </div>
            </div>
            <div className="mb-14 text-center lg:mb-[100px] lg:text-left">
              <div className="lg:ml-0">
                <TimelineCard {...timelineData[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;