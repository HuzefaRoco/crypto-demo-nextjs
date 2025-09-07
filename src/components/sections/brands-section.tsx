import React from 'react';
import Image from 'next/image';

const brands = [
  {
    id: 1,
    name: "UIDeck",
    whiteImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/uideck-white-5.svg?",
    colorImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/uideck-6.svg?"
  },
  {
    id: 2,
    name: "TailGrids",
    whiteImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/TailGrids-white-7.svg?",
    colorImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/tailgrids-8.svg?"
  },
  {
    id: 3,
    name: "LineIcons",
    whiteImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/LineIcons-white-9.svg?",
    colorImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/lineicons-10.svg?"
  },
  {
    id: 4,
    name: "AyroUI",
    whiteImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/AyroUI-white-11.svg?",
    colorImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/ayroui-12.svg?"
  },
  {
    id: 5,
    name: "PlainAdmin",
    whiteImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/PlainAdmin-white-13.svg?",
    colorImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/plainadmin-14.svg?"
  }
];

const BrandsSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[620px] text-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">
            Join the 20,000+ companies using our platform
          </h2>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
          {brands.map((brand) => (
            <div key={brand.id} className="group relative h-16 w-32 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300">
              <Image
                src={brand.colorImage}
                alt={brand.name}
                width={120}
                height={40}
                className="h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Image
                src={brand.whiteImage}
                alt={brand.name}
                width={120}
                height={40}
                className="absolute inset-0 h-full w-full object-contain p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;