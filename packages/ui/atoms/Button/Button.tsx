"use client";
import React from "react";
import { cn } from "@/packages/core ";
import { IButtonProps } from "./button.interface";
import { buttonVariants } from "./button.variants";
import { useButtonEvents } from "./useButtonEvents";
import { ButtonRipples } from "./ButtonRipples";

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      children,
      disabled = false,
      icon,
      iconPosition = "right",
      onClick,
      shape = "square",
      size = "md",
      variant = "primary",
      rippleColor = "bg-primary",
      ...props
    },
    ref
  ) => {
    const { handleClick, buttonRipples } = useButtonEvents({ onClick });

    return (
      <button
        className={cn(buttonVariants({ variant, size, shape }), className)}
        disabled={disabled}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <div className="flex w-full h-full items-center justify-center bg-transparent gap-2">
          {icon && iconPosition === "left" ? (
            <div className="bg-transparent">{icon}</div>
          ) : null}
          {children}
          {icon && iconPosition === "right" ? (
            <div className="bg-transparent">{icon}</div>
          ) : null}
        </div>
        {variant === "primary" ? (
          <ButtonRipples
            buttonRipples={buttonRipples}
            rippleColor={rippleColor}
          />
        ) : null}
      </button>
    );
  }
);
