import React from "react";
import {
  Search,
  Pen,
  Settings,
  Lock,
  DollarSign,
  TrendingUp,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    icon: Search,
    title: "Find & understand information",
    description:
      "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: Pen,
    title: "Create & summarize content",
    description:
      "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: Settings,
    title: "Automate your work",
    description:
      "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: Lock,
    title: "Security & Privacy",
    description:
      "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: DollarSign,
    title: "Low Cost",
    description:
      "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: TrendingUp,
    title: "Several Profit",
    description:
      "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="section-padding bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-[var(--primary)] sm:text-xl">
            Rocotal Features
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-[var(--color-text-dark)] dark:text-[var(--foreground)] md:text-[45px]">
            Reimagine your everyday work with AI.
          </h2>
          <p className="text-lg font-medium text-[var(--muted-foreground)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        {/* Features Grid */}
        <div className="-mx-4 flex flex-wrap">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mx-auto mb-14 max-w-[370px] text-center">
                  {/* Icon */}
                  <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]">
                    <Icon className="h-10 w-10" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-[var(--color-text-dark)] dark:text-[var(--foreground)] sm:text-3xl lg:text-xl xl:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="text-base font-medium text-[var(--muted-foreground)] sm:text-lg lg:text-base xl:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
