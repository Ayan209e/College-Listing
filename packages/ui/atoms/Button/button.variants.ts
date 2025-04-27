import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex items-center justify-center gap-3 text-white transition-all duration-300 relative cursor-pointer overflow-hidden rounded-lg  transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-active",
        secondary: "bg-secondary text-white",
        outline:
          "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white",
        ghost: "text-primary hover:text-primary-active",
      },
      size: {
        xl: "px-12 py-4 text-xl",
        lg: "px-10 py-3 text-md",
        md: "px-8 py-2 text-md",
        sm: "px-6 py-1 text-sm",
        xs: "px-4 py-[2px] text-sm",
      },
      shape: {
        square: "rounded-",
        circle: "rounded-full border-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "square",
    },
  }
);
