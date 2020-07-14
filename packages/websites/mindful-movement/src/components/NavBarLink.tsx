import { Typography } from "@heather-turano-coaching/components";
import { makeOutset, makeReset } from "@heather-turano-coaching/design-system";
import { Link } from "gatsby";
import React, { FC, ReactNode, memo } from "react";
import styled, { css } from "styled-components";

export const StyledListItem = styled.li`
  ${makeReset("list")}
`;

const CSSNavLink = css`
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  align-self: stretch;
  ${makeOutset({ horizontal: 12 })};
`;

export const StyledNavLinkGatsby = styled(Link)`
  ${CSSNavLink}
`;

export const StyledNavLinkAnchor = styled.a`
  ${CSSNavLink}
  text-decoration: none;
`;

const NavBarLink: FC<{ children: ReactNode }> = ({ children }) => (
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
);

export default memo(NavBarLink);
