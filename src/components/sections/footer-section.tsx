import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

const DiscordIcon = () => (
    <svg width="20" height="15" viewBox="0 0 20 15" className="fill-current">
        <path d="M16.9038 0.00762939H3.09C1.385 0.00762939 0 1.39263 0 3.09763V11.9126C0 13.6176 1.385 15.0026 3.09 15.0026H13.8825L16.485 13.0651L17.5125 14.9951L20 10.3701L17.925 9.17013V3.09763C17.925 1.39263 16.54 0.00762939 14.835 0.00762939H16.9038ZM5.28 10.1951C4.4275 10.1951 3.73 9.49763 3.73 8.64513C3.73 7.79263 4.4275 7.09513 5.28 7.09513C6.1325 7.09513 6.83 7.79263 6.83 8.64513C6.83 9.49763 6.1325 10.1951 5.28 10.1951ZM9.9525 12.0126C8.8325 12.0126 8.3525 11.2326 8.3525 11.2326L8.6825 10.7451C8.6825 10.7451 9.0725 11.2476 9.8775 11.2476C10.575 11.2476 11.085 10.8226 11.085 10.2251V10.1351C9.69 9.94013 7.7025 10.4351 7.7025 8.16263C7.7025 6.78263 8.8025 5.81763 10.47 5.81763C12.3525 5.81763 13.4375 6.81263 13.4375 8.21513C13.4375 10.1526 11.6625 10.7751 10.0575 10.7751L9.9525 12.0126V12.0126ZM12.6375 10.1951C11.785 10.1951 11.0875 9.49763 11.0875 8.64513C11.0875 7.79263 11.785 7.09513 12.6375 7.09513C13.49 7.09513 14.1875 7.79263 14.1875 8.64513C14.1875 9.49763 13.49 10.1951 12.6375 10.1951Z"></path>
        <path d="M11.0849 9.38763C11.7149 9.38763 12.2249 8.87763 12.2249 8.24763C12.2249 7.61763 11.7149 7.10763 11.0849 7.10763C10.4549 7.10763 9.94492 7.61763 9.94492 8.24763C9.94492 8.87763 10.4549 9.38763 11.0849 9.38763Z"></path>
    </svg>
);

const TwitterIcon = () => (
    <svg width="20" height="17" viewBox="0 0 20 17" className="fill-current">
        <path d="M19.1843 2.15833C18.5159 2.45833 17.8043 2.65833 17.061 2.75833C17.826 2.29167 18.426 1.575 18.7043 0.708333C17.9893 1.14167 17.1893 1.45833 16.346 1.625C15.661 0.908333 14.7043 0.466667 13.6393 0.466667C11.6043 0.466667 9.946 2.13333 9.946 4.16667C9.946 4.45833 9.9776 4.74167 10.0393 5.01667C6.73926 4.85833 3.826 3.35 1.83926 1.05833C1.48926 1.68333 1.296 2.4 1.296 3.175C1.296 4.44167 1.946 5.55833 2.91093 6.2C2.326 6.18333 1.7776 6.025 1.296 5.76667V5.81667C1.296 7.55 2.53926 8.99167 4.196 9.325C3.86093 9.41667 3.50426 9.45833 3.13093 9.45833C2.90426 9.45833 2.68926 9.43333 2.476 9.39167C2.93926 10.8 4.226 11.8333 5.78926 11.8667C4.56093 12.825 2.98926 13.4167 1.28093 13.4167C0.989265 13.4167 0.704265 13.4 0.410932 13.3583C1.98926 14.3583 3.876 14.9667 5.926 14.9667C13.6226 14.9667 17.5126 8.55833 17.5126 3.01667C17.5126 2.85 17.5043 2.68333 17.496 2.525C18.3109 1.95 18.896 1.225 19.346 0.416667L19.1843 2.15833Z"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
        <path d="M19 0H1C0.4 0 0 0.4 0 1V19C0 19.6 0.4 20 1 20H19C19.6 20 20 19.6 20 19V1C20 0.4 19.6 0 19 0ZM6 17H3V8H6V17ZM4.5 6.2C3.5 6.2 2.7 5.4 2.7 4.4C2.7 3.4 3.5 2.6 4.5 2.6C5.5 2.6 6.3 3.4 6.3 4.4C6.3 5.4 5.5 6.2 4.5 6.2ZM17 17H14V11.4C14 10.1 13 9.3 11.9 9.3C10.9 9.3 10 10.1 10 11.3V17H7V8H10V9.6C10.5 8.6 11.6 8 12.8 8C15.1 8 17 9.8 17 12.5V17Z"></path>
    </svg>
);

const YoutubeIcon = () => (
    <svg width="20" height="14" viewBox="0 0 20 14" className="fill-current">
        <path d="M18.8415 5.25367C18.5649 2.6775 16.9202 0.766333 14.3312 0.4705C11.8349 -0.158333 8.16492 -0.158333 5.66859 0.4705C3.07859 0.766333 1.43492 2.6775 1.15825 5.25367C0.5 8.12867 0.5 8.87867 1.15825 11.7537C1.43492 14.3308 3.07859 16.241 5.66859 16.5368C8.16492 17.1657 11.8349 17.1657 14.3312 16.5368C16.9212 16.241 18.5649 14.3298 18.8415 11.7537C19.5 8.87867 19.5 8.12867 18.8415 5.25367ZM8.33325 12.25V4.75L13.3333 8.5L8.33325 12.25Z"></path>
    </svg>
);


const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="h-9 w-9 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
    >
        {children}
    </a>
);


const FooterSection = () => {
    return (
        <footer className="bg-secondary pt-20 lg:pt-24">
            <div className="container mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-12">
                    <div className="lg:col-span-5 xl:col-span-4">
                        <Link href="/" className="mb-8 inline-block">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/logo-1.svg?"
                                alt="Crypto"
                                width={110}
                                height={29}
                            />
                        </Link>
                        <p className="mb-8 max-w-[340px] text-base font-medium text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae quam nec ante fringilla vel at erat convallis elit.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#"><DiscordIcon /></SocialLink>
                            <SocialLink href="#"><TwitterIcon /></SocialLink>
                            <SocialLink href="#"><LinkedinIcon /></SocialLink>
                            <SocialLink href="#"><YoutubeIcon /></SocialLink>
                        </div>
                    </div>

                    <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
                         <div className="sm:col-span-1">
                            <h3 className="mb-6 text-lg font-semibold text-foreground">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">What is ico</Link></li>
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">Roadmap</Link></li>
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">Whitepaper</Link></li>
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">Social Network</Link></li>
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">Join Us Now</Link></li>
                            </ul>
                        </div>
                        
                        <div className="sm:col-span-1">
                            <h3 className="mb-6 text-lg font-semibold text-foreground">Supports</h3>
                            <ul className="space-y-3">
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">Setting & Privacy</Link></li>
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">Help & Support</Link></li>
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">24/7 Supports</Link></li>
                                <li><Link href="#" className="inline-block text-base font-medium text-muted-foreground hover:text-primary">On Point FAQ</Link></li>
                            </ul>
                        </div>

                        <div className="sm:col-span-1">
                            <h3 className="mb-6 text-lg font-semibold text-foreground">News & Post</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#" className="block mb-2 text-base font-medium text-foreground hover:text-primary">
                                        Laboris nisi aliquip dium exiuliym commo cons...
                                    </Link>
                                    <p className="flex items-center text-sm font-medium text-muted-foreground">
                                        <CalendarDays className="mr-2 h-4 w-4" /> Aug 21 2024
                                    </p>
                                </li>
                                <li>
                                    <Link href="#" className="block mb-2 text-base font-medium text-foreground hover:text-primary">
                                        Expenses as material bre mate insisted buildi...
                                    </Link>
                                    <p className="flex items-center text-sm font-medium text-muted-foreground">
                                        <CalendarDays className="mr-2 h-4 w-4" /> Aug 21 2024
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 border-t border-border py-8">
                <p className="text-center text-base text-muted-foreground">
                    © Crypto - All Rights Reserved, Crafted by Next.js Templates
                </p>
            </div>
        </footer>
    );
};

export default FooterSection;