export const ArrowLeft = ({
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
        d="M28.5 16H7.5"
        className={className}
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6.66669L7.5 16L18 25.3334"
        className={className}
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
