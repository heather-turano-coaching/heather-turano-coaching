import { Typography } from "@material-ui/core";
import React, { FC } from "react";

export type EventGroupProps = {
  date: string;
};

export const EventGroup: FC<EventGroupProps> = ({ date, children }) => (
  <li>
    <Typography variant="h4">{date}</Typography>
    <ul>{children}</ul>
  </li>
);
