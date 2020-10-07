import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { Children, FC, ReactElement } from "react";

export const ActiveLink: FC<LinkProps & {
  children: ReactElement<HTMLAnchorElement>;
}> = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || (props.as && asPath.includes(props.as.toString()))
      ? `active`
      : "";

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  );
};
