import * as React from "react";

function SvgNavigation2(props: React.SVGProps<SVGSVGElement>) {
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
      className="navigation-2_svg__feather navigation-2_svg__feather-navigation-2"
      {...props}
    >
      <path d="M12 2l7 19-7-4-7 4 7-19z" />
    </svg>
  );
}

export default SvgNavigation2;
