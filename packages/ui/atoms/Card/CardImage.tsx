import React from "react";
import Image from "next/image";
import { Typography } from "../Typography";
import { StarIcon } from "@/packages/icons ";
import { ICardImageProps } from "./card.interface";

export const CardImage = ({
  src,
  alt = "card-image",
  rating,
}: ICardImageProps) => {
  return (
    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-gray/40 bg-secondary">
      {src && (
        <div className="size-full bg-white flex justify-center items-center overflow-hidden">
          <Image
            width={0}
            height={0}
            src={src}
            alt={alt}
            className="text-white size-full object-cover"
          />
        </div>
      )}

      {rating && (
        <div className="absolute right-0 bottom-0 rounded-tl-xl rounded-br-xl bg-primary text-primary-active py-1 px-2 flex gap-1 justify-center items-center">
          <Typography weight="bold">{rating}</Typography>
          <StarIcon className="fill-primary-active" />
        </div>
      )}
    </div>
  );
};
