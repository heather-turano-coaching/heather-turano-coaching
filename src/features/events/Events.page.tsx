import { Hero } from "@htc/components/content";
import { EBEventsResponse } from "@htc/lib/eventbrite";
import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import { Container } from "@material-ui/core";
import React from "react";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { EventsFuture } from "./EventsFuture";
import { EventsPast } from "./EventsPast";
import { EventsSection } from "./EventsSection";

export type EventsPageProps = {
  futureEvents: EBEventsResponse;
  pastEvents: EBEventsResponse;
};

export const EventsPage: PageComponent<EventsPageProps> = ({
  contentfulPageData: {
    fields: { hero }
  },
  pastEvents,
  futureEvents
}) => {
  return (
    <>
      {hero && <Hero {...hero.fields} hideGradient />}
      <div
        css={css`
          background-color: ${({ theme }) => theme.palette.light.light};
          padding-top: ${makeRem(60)};
          padding-bottom: ${makeRem(60)};
        `}
      >
        <Container maxWidth="md">
          <EventsSection title="Upcoming Events">
            <EventsFuture events={futureEvents} />
          </EventsSection>
          <EventsSection title="Past Events">
            <EventsPast events={pastEvents} />
          </EventsSection>
        </Container>
      </div>
    </>
  );
};

EventsPage.getPageLayout = function getPageLayout(page, { preview }) {
  return <LayoutRoot preview={preview}>{page}</LayoutRoot>;
};
