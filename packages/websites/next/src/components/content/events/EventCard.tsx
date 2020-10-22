import { FC } from "react";

export type EventCardProps = {
  time: string;
  title: string;
  intro: string;
  reserveLink: string;
  image: string;
  price: string;
  options: {
    video: boolean;
    ticketRequired: boolean;
  };
};

export const EventCard: FC<EventCardProps> = (props) => {
  return <div>{props.title}</div>;
};
