import React from "react";
import { IButtonRipples } from "./button.interface";
import { cn } from "@/packages/core ";

export const ButtonRipples = ({
  buttonRipples,
  rippleColor,
}: {
  buttonRipples: IButtonRipples[];
  rippleColor?: string;
}) => {
  return (
    <span className="pointer-events-none absolute inset-0">
      {buttonRipples.map((ripple) => (
        <span
          className={cn(
            "absolute animate-rippling rounded-full opacity-30",
            rippleColor
          )}
          key={ripple.key}
          style={{
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            top: `${ripple.y}px`,
            left: `${ripple.x}px`,
            transform: `scale(0)`,
          }}
        />
      ))}
    </span>
  );
};
