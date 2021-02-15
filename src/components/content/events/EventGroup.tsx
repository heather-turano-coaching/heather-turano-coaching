import { Typography } from "@material-ui/core";
import { FC } from "react";
import { css } from "styled-components";

export type EventGroupProps = {
  date: string;
};

export const EventGroup: FC<EventGroupProps> = ({ date, children }) => (
  <li>
    <Typography variant="h4">{date}</Typography>
    <ul
      css={css`
        background-color: ${({ theme }) => theme.palette.common.white};
      `}
    >
      {children}
    </ul>
  </li>
);