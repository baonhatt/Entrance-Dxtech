import * as React from "react";
import { LearnMoreButton } from "./LearnMoreButton";

interface ServiceCardProps {
  title: string[];
  image: string;
  imageAlt: string;
  highlighted?: boolean;
  lightTheme?: boolean;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  textBtn?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  image,
  imageAlt,
  highlighted = false,
  lightTheme = false,
  bgColor = "bg-white",
  textColor = "text-black",
  borderColor = "border-zinc-900",
}) => {
  return (
    <article className={`flex ${bgColor} ${textColor} justify-between items-center p-12 border border-solid ${borderColor} rounded-[45px] shadow-[0_5px_0_#191A23] max-sm:flex-col max-sm:gap-8 max-sm:p-8`}>
      <div className="flex flex-col gap-24 max-sm:gap-10">
        <div className="flex flex-col gap-1">
          {title.map((line, index) => (
            <h3
              key={index}
              className={`px-2 py-0 text-3xl ${
                highlighted ? "bg-[var(--mylime)]" : "bg-white"
              } rounded-lg max-sm:text-2xl`}
            >
              {line}
            </h3>
          ))}
        </div>
        <div
          className={`flex gap-4 items-center text-xl ${lightTheme ? "text-black" : "text-white"}`}
        >
          <LearnMoreButton theme={lightTheme ? "light" : "dark"} />
        </div>
      </div>
      <img
        src={image}
        alt={imageAlt}
        className="h-auto w-[210px] max-sm:w-full max-sm:h-auto"
      />
    </article>
  );
};