import React from "react";
import { ICardHeaderProps } from "./card.interface";
import { Typography } from "../Typography";

export const CardHeader = ({
  name,
  location,
  fees,
  stream,
  link,
}: ICardHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 p-6 text-black">
      <Typography weight="bold" variant="xl">
        {name}
      </Typography>
      <Typography className="text-gray">{location}</Typography>
      <div className="flex justify-between items-center">
        <Typography variant="sm" className="text-secondary">
          {fees}
        </Typography>
        <Typography className="text-gray">{stream}</Typography>
      </div>
    </div>
  );
};
