"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const saleData = [
  { percent: 73, label: "Financial Overhead", color: "var(--chart-3)" },
  { percent: 55, label: "Bonus & Found", color: "var(--chart-3)" },
  { percent: 38, label: "IT Infrastructure", color: "var(--chart-3)" },
  { percent: 20.93, label: "Gift Code Inventory", color: "var(--chart-2)" },
];

const TokenSaleSection: React.FC = () => {
  const series = saleData.map((item) => item.percent);
  const colors = saleData.map((item) => item.color);

  const options: ApexOptions = {
    chart: {
      type: "pie",
      height: 349,
      toolbar: { show: false },
      background: "transparent", // ensures background matches section
    },
    labels: saleData.map((item) => item.label),
    colors: colors,
    legend: { show: false },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Number(val).toFixed(1)}%`,
      style: { colors: ["var(--card-foreground)"] }, // text adapts to theme
    },
  };

  return (
    <section className="relative z-10 bg-[var(--background)] text-[var(--foreground)]">
      <div className="container">
        <div className="rounded-lg px-8 py-12 sm:px-14 sm:py-16 lg:px-8 xl:px-14 bg-[var(--card)] text-[var(--card-foreground)]">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Chart */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto mb-12 flex items-center justify-center sm:h-[390px] sm:w-[390px] lg:mb-0">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="pie"
                  height={349}
                  width={415}
                />
              </div>
            </div>

            {/* Token Details */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <span className="mb-3 text-lg font-bold uppercase text-[var(--primary)]">
                  TOKEN
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-tight text-[var(--foreground)] md:text-[45px]">
                  Token Sale
                </h2>
                <p className="text-lg font-medium text-[var(--muted)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  condimentum tellus at lectus pulvinar, id auctor felis iaculis. In
                  vestibulum neque sem, at dapibus justo facilisis in.
                </p>
              </div>

              <div className="space-y-4">
                {saleData.map((item, idx) => (
                  <p key={idx} className="flex items-center gap-4">
                    <span
                      className="h-6 w-6 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="text-lg font-medium text-[var(--muted)]">
                      {item.percent}% {item.label}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute -top-32 right-0 -z-10">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/token-sale-shape-15.svg?"
          alt="shape"
          width={200}
          height={436}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
};

export default TokenSaleSection;
