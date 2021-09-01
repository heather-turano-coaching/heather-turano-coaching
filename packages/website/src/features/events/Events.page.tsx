import { makeRem } from "@htc-website/components";
import { Hero } from "@htc-website/components/content";
import {
  ContentfulPageProps,
  FeaturePageComponent
} from "@htc-website/features/page";
import { EBEventsResponse } from "@htc-website/lib/eventbrite";
import { Container } from "@material-ui/core";
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

EventsPage.withPageLayout = withEventsPageLayout;
