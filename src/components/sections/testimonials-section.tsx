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
    content: "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-990302-image-01.jpg?",
  },
  {
    id: 2,
    name: "Mariya Merry",
    designation: "CEO & Founder @ Betex.",
    content: "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-163878-image-03.jpg?",
  },
  {
    id: 3,
    name: "Andria Jolly",
    designation: "CEO & Founder @ CryptoX.",
    content: "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-826669-image-04.jpg?",
  },
  {
    id: 4,
    name: "Devid Willium",
    designation: "CEO & Founder @ Coinbase.",
    content: "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-990302-image-01.jpg?",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="w-full px-4 md:w-1/2">
      <div className="relative mb-12 rounded-lg bg-[#F3F6FF] p-8 sm:p-10 lg:p-8 xl:p-10">
        <div className="mb-8 flex items-center">
          <div className="h-[90px] w-[90px] flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={90}
              height={90}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="ml-6">
            <h3 className="mb-1 text-xl font-bold text-foreground sm:text-2xl">
              {testimonial.name}
            </h3>
            <p className="text-base font-medium text-muted-foreground">
              {testimonial.designation}
            </p>
          </div>
        </div>
        <blockquote className="relative">
          <p className="text-base italic leading-relaxed text-muted-foreground">
            {testimonial.content}
          </p>
        </blockquote>
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/testimonial-shape-17.svg?"
          alt="shape"
          width={160}
          height={130}
          className="absolute bottom-0 right-0 -z-10"
        />
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonial" className="relative z-10 pt-20 pb-30">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 inline-block text-lg font-bold uppercase text-primary sm:text-xl">
            TESTIMONIALS
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-foreground md:text-[45px]">
            What Our Client Say's
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
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
};

export default TestimonialsSection;