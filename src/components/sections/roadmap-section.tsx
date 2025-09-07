"use client";

import Image from "next/image";
import React from "react";

const roadmapData = [
  {
    id: 1,
    date: "Feb 25 2025",
    percentage: "73%",
    title: "Financial Overhead",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "₿",
    bgColor: "bg-orange-500"
  },
  {
    id: 2,
    date: "Jan 14 2026", 
    percentage: "55%",
    title: "Bonus & Found",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "Ξ",
    bgColor: "bg-blue-500"
  },
  {
    id: 3,
    date: "Mar 30 2028",
    percentage: "38%", 
    title: "IT Infrastructure",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "⬡",
    bgColor: "bg-blue-600"
  },
  {
    id: 4,
    date: "Dec 19 2028",
    percentage: "20.93%",
    title: "Gift Code Inventory", 
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "⬟",
    bgColor: "bg-purple-600"
  }
];

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="relative bg-white dark:bg-gray-900 pb-16 pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-blue-600 dark:text-blue-400 sm:text-xl">
            ROADMAP
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-[45px]">
            The Timeline
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div key={item.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      <div className={`${item.bgColor} rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl`}>
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{item.percentage}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{item.date}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/timeline-16.svg?"
        alt="timeline shape"
        width={500}
        height={400}
        className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 opacity-50"
      />
    </section>
  );
};

export default RoadmapSection;