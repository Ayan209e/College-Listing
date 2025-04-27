import React, { forwardRef } from "react";
import { cn } from "@/packages/core ";
import { ITypographyProps } from "./typography.interface";

export const Typography = forwardRef<HTMLDivElement, ITypographyProps>(
  (
    {
      variant = "md",
      weight = "regular",
      fontStyle = "normal",
      uppercase = false,
      children,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-transparent",
          {
            "text-7xl": variant === "heading",
            "text-5xl": variant === "subheading",
            "text-4xl": variant === "4xl",
            "text-3xl": variant === "3xl",
            "text-2xl": variant === "2xl",
            "text-xl": variant === "xl",
            "text-lg": variant === "lg",
            "text-base": variant === "md",
            "text-sm": variant === "sm",
            "text-xs": variant === "xs",
            "text-[10px] leading-3": variant === "2xs",
          },
          {
            "font-normal": weight === "regular",
            "font-medium": weight === "medium",
            "font-bold": weight === "bold",
          },
          {
            italic: fontStyle === "italic",
            underline: fontStyle === "underline",
          },
          {
            uppercase: uppercase,
          },
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Typography.displayName = "Typography";
