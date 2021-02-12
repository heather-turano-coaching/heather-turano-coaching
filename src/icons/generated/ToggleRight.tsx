import * as React from "react";

function SvgToggleRight(props: React.SVGProps<SVGSVGElement>) {
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
      className="toggle-right_svg__feather toggle-right_svg__feather-toggle-right"
      {...props}
    >
      <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
      <circle cx={16} cy={12} r={3} />
    </svg>
  );
}

export default SvgToggleRight;
