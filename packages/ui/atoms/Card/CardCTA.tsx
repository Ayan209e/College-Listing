import React from "react";
import { Button } from "../Button";
import { HOME } from "@/packages/core ";

export const CardCTA = ({ link }: { link?: string }) => {
  return <Button className="m-6 mt-0 text-primary-active hover:text-primary">{HOME.FEATURED_SECTION.READ_MORE}</Button>;
};
