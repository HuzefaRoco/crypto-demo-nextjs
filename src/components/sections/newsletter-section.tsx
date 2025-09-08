"use client";

import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setEmail("");
  };

  return (
    <section className="relative z-10 py-28 lg:py-36 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-[var(--secondary)]/10 backdrop-blur-md p-10 sm:p-12 md:p-16 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg sm:text-xl text-[var(--muted-foreground)]">
              Stay updated with the latest news, updates, and crypto insights. 
              Enter your email below and never miss a beat.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 w-full rounded-full border border-[var(--input)] bg-[var(--background)] px-6 py-4 text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--primary)] px-8 py-4 text-[var(--primary-foreground)] font-semibold hover:bg-[var(--primary)/90] transition shadow-md"
            >
              Subscribe
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-center text-[var(--primary)] font-medium">
              Thank you for subscribing!
            </p>
          )}
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-[var(--primary)]/20 rounded-full -z-10 animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--primary)]/20 rounded-full -z-10 animate-bounce-slow delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default NewsletterSection;
