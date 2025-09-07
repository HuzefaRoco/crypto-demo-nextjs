import React from 'react';
import { Shield, Award, Globe, Lock, DollarSign, TrendingUp } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: Award,
    title: "Early Bonus",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: Globe,
    title: "Universal Access",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: DollarSign,
    title: "Low Cost",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    icon: TrendingUp,
    title: "Several Profit",
    description: "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="bg-background pb-16 pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
          <span className="mb-3 block text-lg font-bold uppercase text-primary sm:text-xl">
            CRYPTO FEATURE
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-foreground md:text-[45px]">
            Best Features
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mx-auto mb-14 max-w-[370px] text-center">
                  <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-foreground sm:text-3xl lg:text-xl xl:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="text-base font-medium text-muted-foreground sm:text-lg lg:text-base xl:text-lg">
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