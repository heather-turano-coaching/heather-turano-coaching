import * as React from "react";

function SvgRotateCcw(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rotate-ccw_svg__feather rotate-ccw_svg__feather-rotate-ccw"
      {...props}
    >
      <path d="M1 4v6h6" />
      <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
    </svg>
  );
}

export default SvgRotateCcw;
