import * as React from "react";

function SvgCornerUpRight(props: React.SVGProps<SVGSVGElement>) {
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
      className="corner-up-right_svg__feather corner-up-right_svg__feather-corner-up-right"
      {...props}
    >
      <path d="M15 14l5-5-5-5" />
      <path d="M4 20v-7a4 4 0 014-4h12" />
    </svg>
  );
}

export default SvgCornerUpRight;
