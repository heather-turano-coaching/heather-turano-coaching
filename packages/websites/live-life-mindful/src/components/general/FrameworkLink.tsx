import { GatsbyLinkProps, Link } from "gatsby";
import React, { FC } from "react";

export const FrameworkLink: FC<GatsbyLinkProps<{}>> = ({
  children,
  ref,
  to,
  ...restProps
}) => (
  <Link
    {...restProps}
    to={`${to}/`}
    style={{ textDecoration: "none", display: "inline-block" }}
  >
    {children}
  </Link>
);
