import React from "react";
import { CardImage } from "./CardImage";
import { ICardProps } from "./card.interface";
import { CardHeader } from "./CardHeader";
import { CardCTA } from "./CardCTA";

export const Card = ({
  name,
  location,
  fees,
  rating,
  stream,
  imageSrc,
  link,
}: ICardProps) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md bg-white scale-[0.85] sm:scale-100">
      <CardImage alt={name} rating={rating} src={imageSrc} />

      <CardHeader
        name={name}
        location={location}
        fees={fees}
        stream={stream}
        link={link}
      />

      <CardCTA link={link} />
    </div>
  );
};
