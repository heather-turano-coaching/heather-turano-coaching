import React from "react";

import { HeaderNav, MainNavItem } from "./HeaderNav";

export default {
  component: HeaderNav,
  title: "Basic|HeaderNav"
};

const navItems: MainNavItem[] = [
  {
    label: "Home",
    route: "/home"
  },
  {
    label: "About",
    route: "/about"
  },
  {
    label: "Services",
    route: "/services"
  },
  {
    label: "Blog",
    route: "blog.livelifemindful.com"
  }
];

export const base = () => <HeaderNav navItems={navItems} />;
export const withCustomHomeRoute = () => (
  <HeaderNav homeRoute="/home" navItems={navItems} />
);
