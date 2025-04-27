import { ClassValue } from "clsx";

export type TypographyVariant =
  | "heading"
  | "subheading"
  | "4xl"
  | "3xl"
  | "2xl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs"
  | "2xs";

export type TypographyWeight = "regular" | "medium" | "bold";

export type TypographyStyle = "italic" | "underline";

export interface ITypographyProps {
  uppercase?: boolean;
  children: React.ReactNode;
  className?: ClassValue;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  fontStyle?: TypographyStyle;
}
