import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { CustomButton } from "./CustomButton";
import { SectionHeader } from "./SectionHeader";
import Dot from "../assets/icons/DotSlider.svg"
import DotActive from "../assets/icons/DotSliderActive.svg"
const testimonials = [
  {
    id: 1,
    quote: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    quote: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 3,
    quote: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
];

export const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
 
  const settings = {
      centerMode: true,
      centerPadding: '20%',
      slidesToShow: 1,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
      customPaging: (i:any  ) => (
          <img
              src={i === currentSlide ? DotActive : Dot}
              alt=""
              className="w-24 h-24 gap-1 px-1 transition-all duration-300 mt-8"
          />
      ),
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  centerPadding: '30px',
              },
          },
      ],
  };
  return (
    <div className="w-full px-24 pb-10">
       <SectionHeader title="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
       <section className=" py-[10rem] rounded-[45px] w-full bg-[var(--myblack)] min-h-[625px] max-sm:px-0 max-sm:py-10">
       <Slider {...settings}>
              {testimonials.map((testimonial) => (
                  <div key={testimonial.id}>
                      <div className="relative max-w-2xl mx-auto p-9 border border-[var(--mylime)] rounded-[45px] text-white">
                          <p className="text-lg">
                              {testimonial.quote}
                          </p>


                      </div>
                          <div className="mt-6 relative text-left pl-[7rem] text-center">
                              <p className="text-[var(--mylime)] font-bold">{testimonial.author}</p>
                              <p className="text-gray-400 text-sm">{testimonial.position}</p>
                          </div>
                  </div>
              ))}
          </Slider>
       </section>
          
      </div>
  );
}

export default TestimonialSlider;