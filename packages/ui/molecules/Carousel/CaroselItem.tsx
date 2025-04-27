import React from "react";
import { cn } from "@/packages/core ";
import { useCarousel } from "./carousel.helper";
import { ICarouselItemProps } from "./carousel.interface";
import { Typography } from "../../atoms";

export const CarouselItem = React.forwardRef<
  HTMLButtonElement,
  ICarouselItemProps & React.HTMLAttributes<HTMLButtonElement>
>(({ item, className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <button
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "flex justify-center items-center gap-2",
        "basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[15%] w-full p-3",
        "min-w-0 shrink-0 grow-0 basis-full border border-gray bg-white mx-2 md:mx-3 rounded-lg hover:bg-gray/15 transition-all duration-150",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center aspect-square justify-center text-black gap-3">
        {item.image && (
          <div className="h-2/3 w-full overflow-hidden flex items-center justify-center object-contain">
            {React.isValidElement(item.image) ? item.image : null}
          </div>
        )}
        <div className="flex flex-col items-center ">
          <Typography weight="bold" uppercase>
            {item.title}
          </Typography>
          {item.description && (
            <Typography variant="sm">{item.description}</Typography>
          )}
        </div>
      </div>
    </button>
  );
});
CarouselItem.displayName = "CarouselItem";
