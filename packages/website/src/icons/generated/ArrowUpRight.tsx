import * as React from "react";

function SvgArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
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
      className="arrow-up-right_svg__feather arrow-up-right_svg__feather-arrow-up-right"
      {...props}
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default SvgArrowUpRight;
