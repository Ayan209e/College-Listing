import React from "react";

export const SearchIcon = ({
  height = 36,
  width = 36,
  color = "white",
  stroke = 2,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 28.5C23.1274 28.5 28.5 23.1274 28.5 16.5C28.5 9.87258 23.1274 4.5 16.5 4.5C9.87258 4.5 4.5 9.87258 4.5 16.5C4.5 23.1274 9.87258 28.5 16.5 28.5Z"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 31.5L24.975 24.975"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
