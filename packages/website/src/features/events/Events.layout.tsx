import { LayoutRoot } from "@htc-website/features/layout";
import { WithPageLayout } from "@htc/components";
import React from "react";

import { EventsPageProps } from "./Events.page";

export const withEventsPageLayout: WithPageLayout<EventsPageProps> = (
  PageComponent
) => {
  return function EventsPageLayout(props) {
    return (
      <LayoutRoot {...props}>
        <PageComponent {...props} />
      </LayoutRoot>
    );
  };
};
