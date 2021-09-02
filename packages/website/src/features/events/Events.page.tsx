import { Hero } from "@htc-website/components";
import { EBEventsResponse } from "@htc-website/lib/eventbrite";
import { ContentfulPageProps, FeaturePageComponent } from "@htc/components";
import { Container } from "@htc/components";
import React from "react";
import { css } from "styled-components";

import { ContentfulSeo } from "../seo";
import { withEventsPageLayout } from "./Events.layout";
import { EventsFuture } from "./EventsFuture";
import { EventsPast } from "./EventsPast";
import { EventsSection } from "./EventsSection";

export type EventsPageProps = ContentfulPageProps<{
  futureEvents: EBEventsResponse;
  pastEvents: EBEventsResponse;
}>;

export const EventsPage: FeaturePageComponent<EventsPageProps> = ({
  contentfulPageData,
  pastEvents,
  futureEvents
}) => {
  const {
    fields: { hero }
  } = contentfulPageData;
  return (
    <>
      <ContentfulSeo contentfulPageData={contentfulPageData} />
      {hero && <Hero {...hero.fields} hideGradient />}
      <div
        css={css`
          ${({ theme }) => css`
            background-color: ${theme.palette.light.light};
            padding-top: ${theme.size.makeRem(60)};
            padding-bottom: ${theme.size.makeRem(60)};
          `}
        `}
      >
        <Container>
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

EventsPage.withPageLayout = withEventsPageLayout;
