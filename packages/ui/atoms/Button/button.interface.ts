import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

type TButtonIconPosition = "left" | "right";
type TButtonShape = "square" | "circle";
type TButtonSize = "xl" | "lg" | "md" | "sm" | "xs";
export type TButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: TButtonIconPosition;
  shape?: TButtonShape;
  size?: TButtonSize;
  variant?: TButtonVariant;
  rippleColor?: string;
}

export interface IButtonRipples {
  x: number;
  y: number;
  size: number;
  key: number;
}

export interface IUserButtonEventsReturn {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonRipples: IButtonRipples[];
}
