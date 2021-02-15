import { Title } from "@htc/components/atomic";
import { Hero } from "@htc/components/content";
import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import { Container } from "@material-ui/core";
import React from "react";
import styled, { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";
import { EventsPageProps } from "./events.utils";

const StyledUl = styled.ul`
  &:not(:last-child) {
    margin-bottom: ${makeRem(200)};
  }
  &:last-of-type {
    margin-bottom: ${makeRem(300)};
  }
`;
// const StyledLi = styled.li`
//   padding: 0 ${makeRem(32)};

//   &:not(:last-child) {
//     & > * {
//       border-bottom: ${({ theme }) => `1px solid ${theme.palette.light.main}`};
//     }
//   }
// `;
export const EventsPage: PageComponent<EventsPageProps> = ({
  contentfulPageData: {
    fields: {
      hero: { fields: heroFields }
    }
  }
}) => {
  // const aggEventsFuture = aggregateListByDay(
  //   futureEvents.events,
  //   "start.local"
  // );
  // const aggEventsPast = aggregateListByDay(pastEvents.events, "start.local");

  /**
   * @todo
   * Dyanmically fetch the events
   */

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
          <Title size="lg">Upcoming Events</Title>
          <StyledUl>
            {/* {Object.entries(aggEventsFuture).map(([dayValue, day]) => (
              <EventGroup
                date={day.formattedDate}
                key={`${dayValue}_${day.date}`}
              >
                {day.items.map((event) => (
                  <StyledLi key={event.url}>
                    <EventCard
                      title={event.name.text}
                      time={event.start.local}
                      endTime={event.end.local}
                      description={event.summary}
                      image={event.logo.url}
                      reserveLink={event.url}
                      isFree={event.is_free}
                    />
                  </StyledLi>
                ))}
              </EventGroup>
            ))} */}
          </StyledUl>
          <Title size="lg">Past Events</Title>
          <StyledUl>
            {/* {Object.entries(aggEventsPast).map(([dayValue, day]) => (
              <EventGroup
                date={day.formattedDate}
                key={`${dayValue}_${day.date}`}
              >
                {day.items.map((event) => (
                  <StyledLi key={event.url}>
                    <EventCard
                      title={event.name.text}
                      time={event.start.local}
                      endTime={event.end.local}
                      description={event.summary}
                      image={event.logo.url}
                      reserveLink={event.url}
                      isFree={event.is_free}
                      isPastEvent
                    />
                  </StyledLi>
                ))}
              </EventGroup>
            ))} */}
          </StyledUl>
        </Container>
      </div>
    </>
  );
};

EventsPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};
