import React from "react";

export const CrossIcon = ({ height = 24, width = 24, color = "white", stroke = 2}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M18.75 5.25L5.25 18.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth={stroke}
      />
      <path
        d="M18.75 18.75L5.25 5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth={stroke}
      />
    </svg>
  );
};
