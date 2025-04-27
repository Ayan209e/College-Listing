export const ArrowRight = ({
  className = "stroke-white",
  width = "36",
  height = "32",
}: {
  className?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 16H28.5"
        className={className}
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6.66666L28.5 16L18 25.3333"
        className={className}
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
