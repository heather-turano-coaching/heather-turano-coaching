import { GatsbyLinkProps } from "gatsby";
import React, { FC, ReactNode, memo } from "react";

import NavBarLink, { StyledListItem, StyledNavLinkGatsby } from "./NavBarLink";

type NavBarLinkGatsbyProps = Pick<GatsbyLinkProps<undefined>, "to"> & {
  children?: ReactNode;
};

const NavBarLinkGatsby: FC<NavBarLinkGatsbyProps> = ({
  children,
  ...restProps
}) => {
  return (
    <StyledListItem>
      <StyledNavLinkGatsby {...restProps}>
        <NavBarLink>{children}</NavBarLink>
      </StyledNavLinkGatsby>
    </StyledListItem>
  );
};

export default memo(NavBarLinkGatsby);
