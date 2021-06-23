import * as React from "react";

function SvgSkipForward(props: React.SVGProps<SVGSVGElement>) {
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
      className="skip-forward_svg__feather skip-forward_svg__feather-skip-forward"
      {...props}
    >
      <path d="M5 4l10 8-10 8V4zM19 5v14" />
    </svg>
  );
}

export default SvgSkipForward;
