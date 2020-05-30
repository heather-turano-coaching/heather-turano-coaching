import { Typography } from "@heather-turano-coaching/components";
import { makeOutset, makeReset } from "@heather-turano-coaching/design-system";
import { GatsbyLinkProps, Link } from "gatsby";
import React, { FC, ReactNode, memo, useMemo } from "react";
import styled from "styled-components";

type NavLinkProps = Pick<GatsbyLinkProps<undefined>, "to"> & {
  children?: ReactNode;
  variant: "gatsby-link" | "anchor";
};

const StyledListItem = styled.li`
  ${makeReset("list")}
`;

const StyledNavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  align-self: stretch;
  ${makeOutset({ horizontal: 12 })};
`;

const StyledNavAnchor = styled.div`
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  align-self: stretch;
  ${makeOutset({ horizontal: 12 })};
`;

const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  variant = "gatsby-link",
}) => {
  const Link = useMemo(
    () => (
      <>
        {typeof children === "string" && (
          <Typography
            variant="label"
            fontColor={{ scalable: { color: "secondary", scale: 0 } }}
            fontSize="sm"
          >
            {children}
          </Typography>
        )}
        {typeof children !== "string" && <>{children}</>}
      </>
    ),
    [children]
  );
  return (
    <StyledListItem>
      {variant === "gatsby-link" && (
        <StyledNavLink to={to} activeClassName="active">
          {Link}
        </StyledNavLink>
      )}
      {variant === "anchor" && <StyledNavAnchor>{Link}</StyledNavAnchor>}
    </StyledListItem>
  );
};

export default memo(NavLink);
