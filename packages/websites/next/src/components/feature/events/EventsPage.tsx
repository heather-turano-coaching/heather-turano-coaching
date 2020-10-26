import { gql } from "@apollo/client";
import { Title } from "@heather-turano-coaching/core/dist/src/components";
import { makeRem } from "@heather-turano-coaching/core/dist/src/theme";
import { Events } from "@heather-turano-coaching/domain";
import { Container } from "@material-ui/core";
import { EventCard, EventGroup } from "components/content/events";
import { HeroImage } from "components/content/heros";
import { IPageEvents } from "lib/contentful";
import { aggregateListByDay } from "lib/dates";
import { PageComponent } from "lib/page";
import styled, { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";

export const EventsPageQuery = gql`
  query EventsQuery {
    events {
      events {
        summary
        url
        logo {
          url
        }
        name {
          text
        }
        start {
          local
        }
        end {
          local
        }
        is_free
      }
    }
  }
`;

export type EventsPageProps = {
  pageContent: IPageEvents;
  events: Events;
};

const StyledUl = styled.ul`
  &:not(:last-child) {
    margin-bottom: ${makeRem(100)};
  }
  &:last-of-type {
    margin-bottom: ${makeRem(200)};
  }
`;
const StyledLi = styled.li`
  padding: 0 ${makeRem(32)};

  &:not(:last-child) {
    & > * {
      border-bottom: ${({ theme }) => `1px solid ${theme.palette.light.main}`};
    }
  }
`;
export const EventsPage: PageComponent<EventsPageProps> = ({
  pageContent: { fields },
  events
}) => {
  const aggregatedEvents = aggregateListByDay(events.events, "start.local");

  return (
    <div>
      <Meta pageTitle="Events" />
      <HeroImage
        title={fields.heroTitle}
        subTitle={fields.heroSubtitle}
        img={fields.heroImage.fields.file.url}
        imgAlt={fields.heroImage.fields.title}
      />
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
            {Object.entries(aggregatedEvents).map(([dayValue, day]) => (
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
            ))}
          </StyledUl>
          <Title size="lg">Past Events</Title>
        </Container>
      </div>
    </div>
  );
};

EventsPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};
