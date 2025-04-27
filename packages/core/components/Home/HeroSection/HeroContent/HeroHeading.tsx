import React, { useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/packages/core/utils ";
import { Typography } from "@/packages/ui ";
import { HOME } from "@/packages/core/constants ";

export const HeroHeading = () => {
  const heading = HOME.HERO_SECTION.TITLE.split(" ");
  const styledWordIndices = [2, 3, 4];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".heading", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex gap-2">
      <Typography
        variant="heading"
        weight="bold"
        className="text-5xl md:text-7xl"
      >
        <div className="flex flex-wrap justify-center items-center gap-x-5">
          {heading.map((word, index) => (
            <div
              key={index}
              className={cn(
                styledWordIndices.includes(index)
                  ? "text-6xl md:text-8xl md:leading-[1.15] bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-primary to-secondary leading-snug"
                  : "",
                "heading"
              )}
            >
              {word}{" "}
            </div>
          ))}
        </div>
      </Typography>
    </div>
  );
};
