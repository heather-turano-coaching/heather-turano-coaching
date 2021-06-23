import { EBEventsResponse } from "@htc/lib/eventbrite";
import { aggregateListByDay } from "@htc/utils";
import React, { FC, useMemo } from "react";

import { EventCard } from "./EventCard";
import { EventsEmtpy } from "./EventsEmtpy";
import { EventsSectionDate } from "./EventsSectionDate";
import { EventsSectionDateItem } from "./EventsSectionDateItem";

export const EventsFuture: FC<{ events: EBEventsResponse }> = ({ events }) => {
  const aggEventsFuture = aggregateListByDay(events.events, "start.local");

  const futureEvents = useMemo(
    () => Object.entries(aggEventsFuture),
    [aggEventsFuture]
  );

  if (futureEvents.length === 0) {
    return <EventsEmtpy />;
  }

  return (
    <>
      {futureEvents.map(([dayValue, day]) => (
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
              />
            </EventsSectionDateItem>
          ))}
        </EventsSectionDate>
      ))}
    </>
  );
};
