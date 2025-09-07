"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TokenSaleSection: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: () => "249.35M",
          },
        },
      },
    },
    labels: ["Financial Overhead", "Bonus & found", "IT Infrastructure", "Gift Code Inventory"],
    colors: ["#F5A623", "#38A169", "#4F7EFF", "#E53E3E"],
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: ["#718096"],
      },
    },
  };

  const chartSeries = [73, 55, 38, 20.93];

  return (
    <section className="relative z-10 bg-white dark:bg-gray-900 py-16">
      <div className="container">
        <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-8 py-12 sm:px-14 sm:py-16 lg:px-8 xl:px-14">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[520px] lg:mb-0">
                <span className="mb-3 block text-lg font-bold uppercase text-blue-600 dark:text-blue-400 sm:text-xl">
                  TOKEN
                </span>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-[45px]">
                  Token Sale
                </h2>
                <p className="mb-6 text-lg font-medium text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
                </p>
                <div className="mb-8 space-y-4">
                  <div className="flex items-center justify-between rounded-lg bg-white dark:bg-gray-900 p-4 shadow-sm">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">Total Supply</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">249.35M</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white dark:bg-gray-900 p-4 shadow-sm">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">Soft Cap</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">$25,000</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white dark:bg-gray-900 p-4 shadow-sm">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">Hard Cap</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">$50,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[400px] text-center lg:mr-0">
                <ReactApexChart
                  options={chartOptions}
                  series={chartSeries}
                  type="radialBar"
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a724e50e-fbb3-4160-a0b9-a80b67c8a067-crypto-demo-nextjstemplates-com/assets/svgs/token-sale-shape-15.svg?"
        alt="token sale shape"
        width={500}
        height={400}
        className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 opacity-50"
      />
    </section>
  );
};

export default TokenSaleSection;