import { Hero } from "@htc/components/content";
import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import { Container } from "@material-ui/core";
import React from "react";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";
import { EventsPageProps } from "./events.utils";
import { EventsFuture } from "./EventsFuture";
import { EventsPast } from "./EventsPast";
import { EventsSection } from "./EventsSection";

export const EventsPage: PageComponent<EventsPageProps> = ({
  contentfulPageData: {
    fields: {
      hero: { fields: heroFields }
    }
  },
  pastEvents,
  futureEvents
}) => {
  return (
    <>
      <Meta pageTitle="Events" />
      <Hero {...heroFields} hideGradient />
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

EventsPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};
