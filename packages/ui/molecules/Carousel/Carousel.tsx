"use client";

import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { CarouselRoot } from "./CarouselRoot";
import { CarouselContent } from "./CarouselContent";
import { CarouselItem } from "./CaroselItem";
import { CarouselNext, CarouselPrevious } from "./CarouselActions";
import { cn } from "@/packages/core ";
import { Typography } from "../../atoms";
import { ICarouselProps } from "./carousel.interface";

export const Carousel = ({ items }: ICarouselProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <CarouselRoot
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            key={item.id || index}
            onClick={item.onclick}
            item={item}
          />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselRoot>
  );
};
