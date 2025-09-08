"use client";

import Image from "next/image";
import React from "react";

const AppStoreIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.3394 13.2C19.3681 12.33 19.1681 11.51 18.7294 10.74C18.2907 9.97003 17.6594 9.35003 16.8994 8.99003C16.1107 8.61003 15.2281 8.51003 14.3681 8.71003C13.7281 8.16003 12.9607 7.82003 12.1394 7.74003C11.3394 7.64003 10.5194 7.81003 9.77942 8.23003C8.42075 9.00003 7.61942 10.45 7.66942 11.96C8.59942 12.43 9.40075 12.63 10.3594 12.59C11.1607 12.53 12.0194 12.23 12.7294 11.77C12.7894 11.78 12.8307 11.78 12.8894 11.77C12.9481 13.43 12.1981 14.93 10.9794 15.86C11.6681 16.29 12.4594 16.47 13.2694 16.42C14.2894 16.35 15.2281 15.91 15.9394 15.24C16.4594 15.71 16.8781 16.28 17.1594 16.92C17.5894 16.63 18.0681 16.26 18.5294 15.8C17.7694 14.77 17.5281 13.46 17.8894 12.22C18.3994 12.28 18.9107 12.59 19.3394 13.2Z"
      fill="currentColor"
    />
    <path
      d="M12.9806 6.48003C13.4806 5.88003 13.7693 5.12003 13.8093 4.31003C13.0693 4.41003 12.2693 4.75003 11.6406 5.28003C11.1693 5.82003 10.8706 6.53003 10.8106 7.31003C11.5993 7.37003 12.4093 7.03003 12.9806 6.48003Z"
      fill="currentColor"
    />
  </svg>
);

const PlayStoreIcon = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.42969 0.428467L16.401 6.88375L12.5868 10.7166L5.42969 0.428467Z" fill="currentColor" />
    <path d="M5.14285 23.5713L16.2286 17.2284L12.5143 13.2856L5.14285 23.5713Z" fill="currentColor" />
    <path d="M20.5701 13.714L17.7129 11.7583L4.85576 2.05688C4.41148 1.78545 3.86862 1.95688 3.81148 2.47116L3.85576 21.5712C3.85576 22.0426 4.3272 22.3712 4.77005 22.1426L20.5701 13.714Z" fill="currentColor" />
    <path d="M20.5701 13.714L16.4001 16.8854L12.5858 13.0526L16.2287 10.9426L20.5701 13.714Z" fill="currentColor" />
  </svg>
);

const AppDownloadSection = () => {
  return (
    <section className="section-padding bg-[var(--background)]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-3 block text-lg font-bold uppercase text-[var(--primary)]">
                Download Our App
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-[var(--color-text-dark)] md:text-[45px] dark:text-white">
                The choice is yours, we've got you covered
              </h2>
              <p className="mb-9 text-base font-medium text-[var(--muted-foreground)] dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, nisl ut viverra porttitor, dolor sem lacinia orci, et pretium quam mi a eros sed molestie est.
              </p>
              <div className="-mx-3 flex flex-wrap items-center">
                <div className="w-full px-3 sm:w-1/2 mb-3 sm:mb-0">
                  <a
                    href="#"
                    aria-label="Download on the App Store"
                    className="flex w-full items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-4 text-base font-semibold text-[var(--primary-foreground)] transition duration-300 hover:opacity-90 dark:bg-[var(--primary-dark)] dark:text-[var(--primary-foreground-dark)]"
                  >
                    <span className="mr-3"><AppStoreIcon /></span>
                    App Store
                  </a>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <a
                    href="#"
                    aria-label="Download on Google Play Store"
                    className="flex w-full items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-4 text-base font-semibold text-[var(--primary-foreground)] transition duration-300 hover:opacity-90 dark:bg-[var(--primary-dark)] dark:text-[var(--primary-foreground-dark)]"
                  >
                    <span className="mr-3"><PlayStoreIcon /></span>
                    Play Store
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative text-center lg:text-right overflow-hidden">
              <div className="relative z-10 inline-block">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-917869-app-image.png"
                  alt="app image"
                  width={488}
                  height={553}
                />
              </div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-142542-app-image-2.png"
                alt="app image"
                width={504}
                height={553}
                className="absolute bottom-0 right-0 -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
