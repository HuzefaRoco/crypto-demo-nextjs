import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Larry Diamond",
    role: "Chief Executive Officer",
    company: "Clarity Ventures",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-990302-image-01.jpg?",
    testimonial: "This platform has completely revolutionized how we handle cryptocurrency transactions. The security features and user interface are top-notch. Highly recommended for any business looking to integrate crypto payments.",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Smith",
    role: "Tech Lead",
    company: "Crypto Solutions",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-163878-image-03.jpg?",
    testimonial: "The development experience is fantastic. Clean code, excellent documentation, and responsive support team. This template saved us months of development time.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Product Manager", 
    company: "Digital Finance",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-826669-image-04.jpg?",
    testimonial: "Outstanding performance and reliability. Our customers love the seamless experience, and we've seen significant improvements in conversion rates since implementing this solution.",
    rating: 5
  },
  {
    id: 4,
    name: "David Brown",
    role: "CTO",
    company: "Blockchain Innovations",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-990302-image-01.jpg?",
    testimonial: "The best crypto platform we've used. Excellent security, great performance, and the community support is amazing. It's perfect for both beginners and advanced users.",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white dark:bg-gray-900 pb-16 pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-blue-600 dark:text-blue-400 sm:text-xl">
            TESTIMONIALS
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-[45px]">
            What Our Client Say's
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mx-auto mb-10 max-w-[550px]">
                <div className="relative rounded-lg bg-gray-50 dark:bg-gray-800 p-8 shadow-lg">
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                    "{testimonial.testimonial}"
                  </p>

                  <div className="absolute -top-3 left-8">
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-blue-600 dark:text-blue-400"
                    >
                      <path d="M10.2 0C4.57 0 0 4.57 0 10.2c0 3.36 1.64 6.34 4.16 8.2l2.63-2.63c-1.52-1.12-2.5-2.9-2.5-4.93 0-3.36 2.73-6.09 6.09-6.09h1.82c1.01 0 1.82-.81 1.82-1.82S11.21 0 10.2 0zm13.6 0c-5.63 0-10.2 4.57-10.2 10.2 0 3.36 1.64 6.34 4.16 8.2l2.63-2.63c-1.52-1.12-2.5-2.9-2.5-4.93 0-3.36 2.73-6.09 6.09-6.09h1.82c1.01 0 1.82-.81 1.82-1.82S24.81 0 23.8 0z" />
                    </svg>
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

export default TestimonialsSection;