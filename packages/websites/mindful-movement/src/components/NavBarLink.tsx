import { Typography } from "@heather-turano-coaching/components";
import { makeOutset, makeReset } from "@heather-turano-coaching/design-system";
import { GatsbyLinkProps, Link } from "gatsby";
import React, { FC, ReactNode, memo } from "react";
import styled from "styled-components";

type NavLinkProps = Pick<GatsbyLinkProps<undefined>, "to"> & {
  children?: ReactNode;
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

const NavLink: FC<NavLinkProps> = ({ to, children }) => (
  <StyledListItem>
    <StyledNavLink to={to} activeClassName="active">
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
    </StyledNavLink>
  </StyledListItem>
);

export default memo(NavLink);
