import React from 'react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Decentralized Finance (DeFi)",
    excerpt: "Explore how DeFi is revolutionizing traditional finance and what it means for the future of money.",
    author: "Juhan Ahamed",
    date: "Aug 21 2024",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-470561-a0ca7f2ce7b15da5c3c4bb79e6856ab013fce446-970x430.jpg?"
  },
  {
    id: 2,
    title: "Understanding Blockchain Technology",
    excerpt: "A comprehensive guide to understanding how blockchain works and its real-world applications.",
    author: "Juhan Ahamed", 
    date: "Aug 18 2024",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-990857-dbd12e983d6827bf7923b41d837d298c0aefcd9e-740x340.jpg?"
  },
  {
    id: 3,
    title: "Crypto Investment Strategies for 2024",
    excerpt: "Learn effective strategies for investing in cryptocurrency and managing your digital asset portfolio.",
    author: "Juhan Ahamed",
    date: "Aug 15 2024", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-422553-a1a9953626f4825024108e8199395a3aab2a8930-860x480.png?"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="bg-white dark:bg-gray-900 pb-16 pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-blue-600 dark:text-blue-400 sm:text-xl">
            LATEST NEWS
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-[45px]">
            Recent News & Blogs
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {blogPosts.map((post) => (
            <div key={post.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <div className="relative h-[250px] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    <a href="#" className="transition-colors duration-300">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;