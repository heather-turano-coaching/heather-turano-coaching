import { gql } from "@apollo/client";
import { Title } from "@heather-turano-coaching/core/dist/src/components";
import { Events } from "@heather-turano-coaching/domain";
import { Container } from "@material-ui/core";
import { EventCard, EventGroup } from "components/content/events";
import { HeroImage } from "components/content/heros";
import { IPageEvents } from "lib/contentful";
import { aggregateListByDay } from "lib/dates";
import { PageComponent } from "lib/page";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";

export const EventsPageQuery = gql`
  query EventsQuery {
    events {
      events {
        name {
          text
        }
        summary
        start {
          local
        }
      }
    }
  }
`;

export type EventsPageProps = {
  pageContent: IPageEvents;
  events: Events;
};

export const EventsPage: PageComponent<EventsPageProps> = ({
  pageContent: { fields },
  events
}) => {
  const aggregatedEvents = aggregateListByDay(events.events, "start.local");

  return (
    <>
      <Meta pageTitle="Events" />
      <HeroImage
        title={fields.heroTitle}
        subTitle={fields.heroSubtitle}
        img={fields.heroImage.fields.file.url}
        imgAlt={fields.heroImage.fields.title}
      />
      <Container>
        <Title size="lg">Upcoming Events</Title>
      </Container>
      <div>
        {Object.entries(aggregatedEvents).map(([dayValue, day]) => (
          <EventGroup date={day.formattedDate} key={`${dayValue}_${day.date}`}>
            {day.items.map((event) => (
              <EventCard title={event.name.text} key={event.url} />
            ))}
          </EventGroup>
        ))}
      </div>
      <Container>
        <Title size="lg">Past Events</Title>
      </Container>
    </>
  );
};

EventsPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};
