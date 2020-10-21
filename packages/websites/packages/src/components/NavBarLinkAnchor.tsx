import { HTMLAnchor } from "@heather-turano-coaching/core/components";
import React, { FC, memo } from "react";

import NavBarLink, { StyledListItem, StyledNavLinkAnchor } from "./NavBarLink";

const NavBarLinkAnchor: FC<HTMLAnchor> = ({ children, ...restProps }) => {
  return (
    <StyledListItem>
      <StyledNavLinkAnchor {...restProps}>
        <NavBarLink>{children}</NavBarLink>
      </StyledNavLinkAnchor>
    </StyledListItem>
  );
};

export default memo(NavBarLinkAnchor);
