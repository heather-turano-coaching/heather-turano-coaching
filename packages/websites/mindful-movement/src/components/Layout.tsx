import React, { FC } from "react";

import { NavBar } from "./NavBar";
import NavBarLink from "./NavBarLink";
import { NavBarSection } from "./NavBarSection";
import { NavLogo } from "./NavLogo";

export const Layout: FC = ({ children }) => (
  <div id="htc-root">
    <NavBar>
      <NavBarSection>
        <NavLogo />
      </NavBarSection>
      <NavBarSection component="ul" collapse>
        <NavBarLink to="#about" variant="anchor">
          About
        </NavBarLink>
        <NavBarLink to="#who-we-are" variant="anchor">
          Who we are
        </NavBarLink>
        <NavBarLink to="#pricing" variant="anchor">
          Pricing
        </NavBarLink>
        <NavBarLink to="#schedule" variant="anchor">
          Schedule
        </NavBarLink>
      </NavBarSection>
    </NavBar>
    {children}
  </div>
);
