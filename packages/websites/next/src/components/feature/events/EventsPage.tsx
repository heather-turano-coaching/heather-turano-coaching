import { gql } from "@apollo/client";
import { Title } from "@heather-turano-coaching/core/dist/src/components";
import { Events } from "@heather-turano-coaching/domain";
import { Container } from "@material-ui/core";
import { HeroImage } from "components/content/heros";
import { IPageEvents } from "lib/contentful";
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
        {events.events.map((item) => (
          <div key={item.name.text}>{item.name.text}</div>
        ))}
      </div>
    </>
  );
};

EventsPage.getPageLayout = (page) => <LayoutRoot>{page}</LayoutRoot>;
