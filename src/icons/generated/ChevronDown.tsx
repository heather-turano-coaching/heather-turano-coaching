import * as React from "react";

function SvgChevronDown(props: React.SVGProps<SVGSVGElement>) {
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
      className="chevron-down_svg__feather chevron-down_svg__feather-chevron-down"
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default SvgChevronDown;
