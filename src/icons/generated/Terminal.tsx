import * as React from "react";

function SvgTerminal(props: React.SVGProps<SVGSVGElement>) {
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
      className="terminal_svg__feather terminal_svg__feather-terminal"
      {...props}
    >
      <path d="M4 17l6-6-6-6M12 19h8" />
    </svg>
  );
}

export default SvgTerminal;
