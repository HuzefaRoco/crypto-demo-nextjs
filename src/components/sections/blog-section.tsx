import Image from 'next/image';
import Link from 'next/link';
import { User, CalendarDays } from 'lucide-react';

type BlogPost = {
  image: string;
  imageWidth: number;
  imageHeight: number;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  postUrl: string;
  authorUrl: string;
};

const blogPosts: BlogPost[] = [
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-470561-a0ca7f2ce7b15da5c3c4bb79e6856ab013fce446-970x430.jpg?',
    imageWidth: 970,
    imageHeight: 430,
    author: 'Juhan Ahamed',
    date: 'Aug 21 2024',
    title: 'Laboris nisi aliquip dium exiuliym commo cons.',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condime vel.',
    postUrl: '#',
    authorUrl: '#',
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-990857-dbd12e983d6827bf7923b41d837d298c0aefcd9e-740x340.jpg?',
    imageWidth: 740,
    imageHeight: 340,
    author: 'Juhan Ahamed',
    date: 'Aug 21 2024',
    title: 'Expenses as material bre mate insisted building',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condime vel.',
    postUrl: '#',
    authorUrl: '#',
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/images/next-422553-a1a9953626f4825024108e8199395a3aab2a8930-860x480.png?',
    imageWidth: 860,
    imageHeight: 480,
    author: 'Juhan Ahamed',
    date: 'Aug 21 2024',
    title: 'Quis nostrud exercitati ullamc laboris nisi aliquip',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condime vel.',
    postUrl: '#',
    authorUrl: '#',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-primary sm:text-xl">
            LATEST NEWS
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-foreground md:text-[45px]">
            Recent News & Blogs
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10 rounded-lg bg-card border border-border p-8 shadow-sm sm:p-9 md:p-7 xl:p-9">
                <Link
                  href={post.postUrl}
                  className="mb-7 block w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={post.image}
                    alt="blog"
                    width={post.imageWidth}
                    height={post.imageHeight}
                    className="w-full transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="mb-4 flex items-center">
                  <div className="mr-5 flex items-center">
                    <User className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                    <p className="text-sm font-medium text-muted-foreground">
                      <Link href={post.authorUrl} className="text-primary hover:underline">
                        {post.author}
                      </Link>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                    <p className="text-sm font-medium text-muted-foreground">{post.date}</p>
                  </div>
                </div>
                <h3>
                  <Link
                    href={post.postUrl}
                    className="mb-3 block text-xl font-bold text-foreground hover:text-primary transition-colors sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-6 text-base font-medium text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href={post.postUrl}
                  className="inline-block rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors btn-shadow"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;