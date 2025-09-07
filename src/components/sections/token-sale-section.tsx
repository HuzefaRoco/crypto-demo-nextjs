"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const saleData = [
  { percent: 73, label: "Financial Overhead", color: "#3758F9" },
  { percent: 55, label: "Bonus & found", color: "#F29C1F" },
  { percent: 38, label: "it infastrueture", color: "#20CB92" },
  { percent: 20.93, label: "Gift Code Inventory", color: "#F859A8" },
];

const TokenSaleSection = () => {
    
  const series = saleData.map(item => item.percent);
  const chartColors = saleData.map(item => item.color);

  const options: ApexOptions = {
    chart: {
      type: "radialBar",
      height: 390,
      width: 390,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '35%',
        },
        track: {
          background: "transparent",
        },
        dataLabels: {
          show: false,
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    colors: chartColors,
    labels: saleData.map(item => item.label),
    legend: {
      show: false,
    },
  };

  return (
    <section className="relative z-10">
      <div className="container">
        <div className="rounded-lg bg-secondary px-8 py-12 sm:px-14 sm:py-16 lg:px-8 xl:px-14">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto mb-12 flex items-center justify-center sm:h-[390px] sm:w-[390px] lg:mb-0">
                <ReactApexChart options={options} series={series} type="radialBar" height={390} width={390} />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-left">
                <span className="mb-3 block text-lg font-bold uppercase text-primary sm:text-xl">
                  TOKEN
                </span>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-foreground md:text-[45px]">
                  Token Sale
                </h2>
                <p className="mb-10 text-base font-medium text-muted-foreground sm:text-lg lg:text-base xl:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum tellus at lectus pulvinar, id auctor felis iaculis. In vestibulum neque sem, at dapibus justo facilisis in.
                </p>

                <div className="space-y-5">
                  {saleData.map((item, index) => (
                    <div key={index} className="flex items-center justify-center lg:justify-start">
                      <div
                        className="relative mr-4 h-9 w-9 shrink-0 rounded-full border-4"
                        style={{ borderColor: item.color }}
                      >
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-foreground">
                          {item.percent}%
                        </span>
                      </div>
                      <p className="text-lg font-medium capitalize text-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 -z-10 -translate-y-1/2">
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