"use client";

import Image from "next/image";

const NewsletterSection = () => {
  return (
    <section className="relative z-10 py-20 lg:py-[100px]">
      <div className="container">
        <div className="relative overflow-hidden rounded-lg bg-secondary px-8 py-12 sm:px-12 md:p-[70px]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-[45px]">
                Newsletter
              </h2>
              <p className="mb-10 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed lg:text-base xl:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                vitae quam nec ante aliquet fringilla vel at erat.
              </p>
              <form>
                <input
                  className="w-full rounded-md border border-border bg-background px-5 py-3 text-base text-muted-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus-visible:shadow-none"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  type="submit"
                  className="mt-5 w-full rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp lg:ml-auto lg:text-right"
                data-wow-delay=".5s"
              >
                <Image
                  alt="shape"
                  width={377}
                  height={300}
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/newsletter-shape-20.svg?"
                  className="hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;