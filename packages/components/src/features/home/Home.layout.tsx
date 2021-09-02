import React from "react";

import { WithPageLayout } from "../../../lib";
import { LayoutRoot } from "../layout";
import { HomePageProps } from "./Home.page";

export const withHomePageLayout: WithPageLayout<HomePageProps> = (
  PageComponent
) => {
  return function HomePageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};
