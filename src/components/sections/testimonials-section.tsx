"use client";

import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  designation: string;
  content: string;
  image: string;
};

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Jason Keys",
    designation: "CEO & Founder @ Dreampeet.",
    content:
      "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-990302-image-01.jpg?",
  },
  {
    id: 2,
    name: "Mariya Merry",
    designation: "CEO & Founder @ Betex.",
    content:
      "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-163878-image-03.jpg?",
  },
  {
    id: 3,
    name: "Andria Jolly",
    designation: "CEO & Founder @ CryptoX.",
    content:
      "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-826669-image-04.jpg?",
  },
  {
    id: 4,
    name: "Devid Willium",
    designation: "CEO & Founder @ Coinbase.",
    content:
      "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-990302-image-01.jpg?",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-full px-4 md:w-1/2">
    <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 sm:p-10 md:p-8 xl:p-10 dark:bg-[#131B4D]">
      {/* Decorative shape */}
      <div className="absolute top-0 right-0 z-[-1]">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/testimonial-shape-17.svg?"
          alt="shape"
          width={254}
          height={182}
          className="h-auto w-auto"
        />
      </div>

      {/* Author info */}
      <div className="mb-8 flex items-center">
        <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-sm">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full">
          <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white">{testimonial.name}</h3>
          <p className="text-body-color-2 text-sm font-medium dark:text-white">{testimonial.designation}</p>
        </div>
      </div>

      {/* Testimonial content */}
      <p className="text-body-color-2 dark:text-body-color text-base leading-snug font-medium">
        {testimonial.content}
      </p>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonial" className="bg-light-bg pt-[120px] pb-20 dark:bg-[#14102C]">
    <div className="container">
      <div className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20" data-wow-delay="0s">
        <span className="text-primary mb-3 text-lg font-bold uppercase sm:text-xl">TESTIMONIALS</span>
        <h2 className="mb-3 text-3xl leading-tight font-bold text-black md:text-[45px] dark:text-white">
          What Our Client Say's
        </h2>
        <p className="text-body-color-2 dark:text-body-color text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <div className="-mx-4 flex flex-wrap">
        {testimonialData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
