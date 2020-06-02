import React, { FC } from "react";

import { NavBar } from "./NavBar";
import NavBarLinkAnchor from "./NavBarLinkAnchor";
import { NavBarSection } from "./NavBarSection";
import { NavLogo } from "./NavLogo";

export const Layout: FC = ({ children }) => (
  <div id="htc-root">
    <NavBar>
      <NavBarSection>
        <NavLogo />
      </NavBarSection>
      <NavBarSection component="ul" collapse>
        <NavBarLinkAnchor href="#about">About</NavBarLinkAnchor>
        <NavBarLinkAnchor href="#who-we-are">Who we are</NavBarLinkAnchor>
        <NavBarLinkAnchor href="#pricing">Pricing</NavBarLinkAnchor>
        <NavBarLinkAnchor href="#schedule">Schedule</NavBarLinkAnchor>
      </NavBarSection>
    </NavBar>
    {children}
  </div>
);
