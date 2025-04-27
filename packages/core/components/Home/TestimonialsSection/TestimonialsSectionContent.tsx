import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/packages/core ";
import { Marquee, ReviewCard } from "@/packages/ui ";
import { TestimonialSectionAnimation } from "./TestimonialSectionAnimation";
import { TESTIMONIAL_IMAGES_BASE_PATH } from "@/packages/core/constants/urls.constants ";

export const TestimonialsSectionContent = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 3);
  const secondRow = testimonials.slice(
    testimonials.length / 3,
    (2 * testimonials.length) / 3
  );
  const thirdRow = testimonials.slice((2 * testimonials.length) / 3);

  const getTestimonialImage = (index: number) => {
    return `${TESTIMONIAL_IMAGES_BASE_PATH}/${index}.png`;
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((testimonial, index) => (
          <ReviewCard
            key={testimonial.name}
            {...testimonial}
            img={getTestimonialImage(index + 1)}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((testimonial, index) => (
          <ReviewCard
            key={testimonial.name}
            {...testimonial}
            img={getTestimonialImage(index + 1 + testimonials.length / 3)}
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((testimonial, index) => (
          <ReviewCard
            key={testimonial.name}
            {...testimonial}
            img={getTestimonialImage(index + 1 + (2 * testimonials.length) / 3)}
          />
        ))}
      </Marquee>

      <TestimonialSectionAnimation />
    </div>
  );
};
