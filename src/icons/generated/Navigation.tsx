import * as React from "react";

function SvgNavigation(props: React.SVGProps<SVGSVGElement>) {
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
      className="navigation_svg__feather navigation_svg__feather-navigation"
      {...props}
    >
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  );
}

export default SvgNavigation;
