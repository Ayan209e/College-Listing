import { MouseEvent, useEffect, useState } from "react";
import { IUserButtonEventsReturn } from "./button.interface";

export const useButtonEvents = ({
  onClick,
}: {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}): IUserButtonEventsReturn => {
  const [buttonRipples, setButtonRipples] = useState<
    Array<{ x: number; y: number; size: number; key: number }>
  >([]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    onClick?.(event);
  };

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, key: Date.now() };
    setButtonRipples((prevRipples) => [...prevRipples, newRipple]);
  };

  useEffect(() => {
    if (buttonRipples.length > 0) {
      const lastRipple = buttonRipples[buttonRipples.length - 1];
      const timeout = setTimeout(() => {
        setButtonRipples((prevRipples) =>
          prevRipples.filter((ripple) => ripple.key !== lastRipple.key)
        );
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [buttonRipples]);

  return {
    handleClick,
    buttonRipples,
  };
};
