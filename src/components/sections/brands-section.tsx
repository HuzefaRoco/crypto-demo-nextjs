import Image from "next/image";

const brandsData = [
  {
    name: "uideck",
    href: "https://uideck.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/uideck-6.svg?",
    width: 152,
    height: 40,
  },
  {
    name: "tailgrids",
    href: "https://tailgrids.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/tailgrids-8.svg?",
    width: 170,
    height: 40,
  },
  {
    name: "lineicons",
    href: "https://lineicons.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/lineicons-10.svg?",
    width: 165,
    height: 40,
  },
  {
    name: "ayroui",
    href: "https://ayroui.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/ayroui-12.svg?",
    width: 156,
    height: 40,
  },
  {
    name: "plainadmin",
    href: "https://plainadmin.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/plainadmin-14.svg?",
    width: 170,
    height: 40,
  },
];

const BrandsSection = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className="border-y border-[#F3F4F4] pt-10">
            <h2 className="mb-10 text-center text-lg font-bold text-black sm:text-2xl">
              Join the 20,000+ companies using the our platform
            </h2>
            <div className="-mx-4 flex flex-wrap items-center justify-center">
              {brandsData.map((brand, index) => (
                <div className="px-4" key={index}>
                  <div className="mb-5 text-center">
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={brand.width}
                        height={brand.height}
                        className="mx-auto h-10 w-auto"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;