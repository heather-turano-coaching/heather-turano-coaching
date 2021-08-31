import * as React from "react";

function SvgChevronsDown(props: React.SVGProps<SVGSVGElement>) {
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
      className="chevrons-down_svg__feather chevrons-down_svg__feather-chevrons-down"
      {...props}
    >
      <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
    </svg>
  );
}

export default SvgChevronsDown;
