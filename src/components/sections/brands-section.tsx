import Image from "next/image";

const brandsData = [
  {
    name: "uideck",
    href: "https://uideck.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/uideck-6.svg",
    width: 152,
    height: 40,
  },
  {
    name: "tailgrids",
    href: "https://tailgrids.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/tailgrids-8.svg",
    width: 170,
    height: 40,
  },
  {
    name: "lineicons",
    href: "https://lineicons.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/lineicons-10.svg",
    width: 165,
    height: 40,
  },
  {
    name: "ayroui",
    href: "https://ayroui.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/ayroui-12.svg",
    width: 156,
    height: 40,
  },
  {
    name: "plainadmin",
    href: "https://plainadmin.com/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/plainadmin-14.svg",
    width: 170,
    height: 40,
  },
];

const BrandsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="border-y border-border py-12 sm:py-16">
          {/* Section Heading */}
          <h2 className="mb-12 text-center text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">
            Trusted by <span className="text-primary">20,000+</span>{" "}
            companies
          </h2>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {brandsData.map((brand, index) => (
              <a
                key={index}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-auto items-center justify-center 
                           opacity-70 grayscale transition 
                           hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="h-10 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;