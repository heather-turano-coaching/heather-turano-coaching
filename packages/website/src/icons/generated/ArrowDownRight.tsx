import * as React from "react";

function SvgArrowDownRight(props: React.SVGProps<SVGSVGElement>) {
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
      className="arrow-down-right_svg__feather arrow-down-right_svg__feather-arrow-down-right"
      {...props}
    >
      <path d="M7 7l10 10M17 7v10H7" />
    </svg>
  );
}

export default SvgArrowDownRight;
