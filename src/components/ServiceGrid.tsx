import * as React from "react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: ["Search engine", "optimization"],
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/66c4117bc4aca4db1a2462128b4379245109c885",
    imageAlt: "Search engine optimization illustration",
    highlighted: true,
    bgColor: "bg-[var(--mygray)]",
    textColor: "text-black",
    borderColor: "border-zinc-900",
    textBtn: "text-black",
  },
  {
    title: ["Pay-per-click", "advertising"],
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/178f7edc080e092b5ef99595102f51f9d6a34174",
    imageAlt: "Pay-per-click advertising illustration",
    bgColor: "bg-[var(--mylime)]",
    textColor: "text-black",
    borderColor: "border-black",
    textBtn: "text-black",
  },
  {
    title: ["Social Media", "Marketing"],
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5943707a1d1cc008f17b78c03b49024ca973ea98",
    imageAlt: "Social media marketing illustration",
    lightTheme: true,
    bgColor: "bg-black",
    textColor: "text-black",
    borderColor: "border-zinc-900",
    textBtn: "text-white",
  },
  {
    title: ["Email", "Marketing"],
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b59b5b96ee95ab33fb0ed3a8bc03673e57e6835",
    imageAlt: "Email marketing illustration",
    highlighted: true,
    bgColor: "bg-[var(--mygray)]",
    textColor: "text-black",
    borderColor: "border-black",
  },
  {
    title: ["Content", "Creation"],
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e5afe71333639e45563589ca62ee74dad05c9e54",
    imageAlt: "Content creation illustration",
    bgColor: "bg-[var(--mygray)]",
    textColor: "text-black",
    borderColor: "border-black",
  },
  {
    title: ["Analytics and", "Tracking"],
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb6950a4877d9f80d6aafed6004fe569af3e556",
    imageAlt: "Analytics and tracking illustration",
    highlighted: true,
    lightTheme: true,
    bgColor: "bg-black",
    textColor: "text-white",
    borderColor: "border-zinc-900",
  },
];

export const ServiceGrid: React.FC = () => {
  return (
    <section className="grid gap-10 pb-24 grid-cols-[repeat(2,1fr)] max-md:px-12 max-md:py-0 max-md:grid-cols-[1fr] max-sm:px-5 max-sm:py-0">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          image={service.image}
          imageAlt={service.imageAlt}
          highlighted={service.highlighted}
          lightTheme={service.lightTheme}
          bgColor={service.bgColor}
          textColor={service.textColor}
          borderColor={service.borderColor}
        />
      ))}
    </section>
  );
};

export default ServiceGrid;