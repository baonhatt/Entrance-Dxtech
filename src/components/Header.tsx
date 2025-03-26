import React from "react";
import { CustomButton } from "./CustomButton";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-24 py-12">
      <div className="flex-1 pr-8">
        <h1 className="text-4xl font-space-grotesk font-bold text-[varr(--myblack)] mb-4">
          Navigating the digital landscape for success
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <CustomButton width="w-[264px]" bgColor="bg-black" text="text-white" title="Book a consultation" />
      </div>

      <div className="flex-1 ">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/9c6e7b8415d7aadbf35b88283ae233f0b97fcef0?placeholderIfAbsent=true"
          alt="Digital Marketing"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </header>
  );
};
