import { cn } from "@/packages/core ";
import Image from "next/image";
import React from "react";
import { Typography } from "../Typography";

export const ReviewCard = ({
  img,
  name,
  college,
  testimonial,
}: {
  img?: string;
  name: string;
  college: string;
  testimonial: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 overflow-hidden rounded-xl border p-4 z-20",
        "border-gray/30 bg-white hover:bg-gray/20"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {img ? (
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img || ""}
          />
        ) : (
          <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-secondary" />
        )}

        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <Typography variant="xs" className="text-gray">
            {college}
          </Typography>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{testimonial}</blockquote>
    </figure>
  );
};
