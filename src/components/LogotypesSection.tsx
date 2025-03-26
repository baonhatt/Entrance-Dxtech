import React from "react";

export const LogotypesSection: React.FC = () => {
  const logos = [
    "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/3f90ec7caf9dd0ee68720f6f2bfe1ad583fed90f?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/0ac3a5d43252dd820d7f692a75aab9a0a7ff8a5e?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/31efcd8ff31815e0b623babc5eaa8edce2f52ee9?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/5388f00d3918b4c127c3a77838ae9a4e202e144a?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/b5345aca9d7319e3a15e2421abdbc876258f0cea?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/827da0d3cd762ce38f8c40f50226629b24dd2ed1?placeholderIfAbsent=true",
  ];

  return (
    <section className="flex justify-around items-center flex-wrap px-10 py-8">
      {logos.map((logo, index) => (
        <div key={index} className="w-32 mx-4 my-2">
          <img
            src={logo}
            alt={`Partner Logo ${index + 1}`}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      ))}
    </section>
  );
};
