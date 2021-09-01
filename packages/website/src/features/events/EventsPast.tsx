import { EBEventsResponse } from "@htc-website/lib/eventbrite";
import { aggregateListByDay } from "@htc-website/utils";
import React, { FC, useMemo } from "react";

import { EventCard } from "./EventCard";
import { EventsSectionDate } from "./EventsSectionDate";
import { EventsSectionDateItem } from "./EventsSectionDateItem";

export const EventsPast: FC<{ events: EBEventsResponse }> = ({ events }) => {
  const aggEventsPast = useMemo(
    () => aggregateListByDay(events.events, "start.local"),
    [events.events]
  );

  const pastEvents = useMemo(
    () => Object.entries(aggEventsPast).reverse(),
    [aggEventsPast]
  );

  return (
    <>
      {useMemo(
        () =>
          pastEvents.map(([dayValue, day]) => (
            <EventsSectionDate
              date={day.formattedDate}
              key={`${dayValue}_${day.date}`}
            >
              {day.items.map((event) => (
                <EventsSectionDateItem key={event.url}>
                  <EventCard
                    title={event.name.text}
                    time={event.start.local}
                    endTime={event.end.local}
                    description={event.description.text}
                    image={event.logo.url}
                    reserveLink={event.url}
                    isFree={event.is_free}
                    isPastEvent
                  />
                </EventsSectionDateItem>
              ))}
            </EventsSectionDate>
          )),
        [pastEvents]
      )}
    </>
  );
};
