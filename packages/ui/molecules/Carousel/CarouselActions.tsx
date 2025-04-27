import React from "react";
import { cn } from "@/packages/core ";
import { Button } from "../../atoms";
import { useCarousel } from "./carousel.helper";
import { ArrowLeft, ArrowRight } from "@/packages/icons ";

// Carousel Previous
export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      className={cn(
        "absolute size-10 rounded-full bg-black flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none",
        orientation === "horizontal"
          ? "-left-5 top-1/2 -translate-y-1/2"
          : "-top-5 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft height="24" className="stroke-white" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
});

// Carousel Next
export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      className={cn(
        "absolute size-10 rounded-full bg-black flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none",
        orientation === "horizontal"
          ? "-right-5 top-1/2 -translate-y-1/2"
          : "-bottom-5 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight height="24" className="stroke-white" />
      <span className="sr-only">Next slide</span>
    </button>
  );
});

CarouselPrevious.displayName = "CarouselPrevious";
CarouselNext.displayName = "CarouselNext";
