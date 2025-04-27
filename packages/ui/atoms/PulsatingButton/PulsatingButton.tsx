import { cn } from "@/packages/core ";
import React from "react";
import { IPulsatingButtonProps } from "./pulsating-button.interface";

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  IPulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "#49c5b685",
      duration = "1.5s",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className="relative flex cursor-pointer items-center justify-center rounded-lg bg-primary hover:bg-primary-active px-4 py-2 text-center text-primary-foreground transition-all duration-300 text-white hover:scale-105"
        style={
          {
            "--pulse-color": pulseColor,
            "--duration": duration,
          } as React.CSSProperties
        }
        {...props}
      >
        <div className={cn("relative z-10", className)}>{children}</div>
        <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
      </button>
    );
  }
);

PulsatingButton.displayName = "PulsatingButton";
