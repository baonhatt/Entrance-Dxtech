import React from "react";
import { CustomButton } from "./CustomButton";

export const NavigationBar: React.FC = () => {
  const navigationItems = [
    "About us",
    "Services",
    "Use Cases",
    "Pricing",
    "Blog",
  ];

  return (
    <nav className="flex justify-between items-center px-24 py-10">
      <div className="w-[219px] h-[30px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/d2eef3e9dc483883a93f54e4c6382bab825162c3?placeholderIfAbsent=true"
          alt="Company Logo"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="flex items-center text-xl space-x-12">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-700 font-medium transition-colors"
          >
            {item}
          </a>
        ))}
        <CustomButton bgColor="" text="text-black" title="Request a quote" border="border border-black" />
      </div>
    </nav>
  );
};
