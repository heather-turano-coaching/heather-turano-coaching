import { Typography } from "@htc/components";
import React, { FC } from "react";
import { css } from "styled-components";

export type EventsSectionDateProps = {
  date: string;
};

export const EventsSectionDate: FC<EventsSectionDateProps> = ({
  date,
  children
}) => (
  <li
    css={css`
      & + & {
        margin-top: ${({ theme }) => theme.size.makeRem(64)};
      }
    `}
  >
    <Typography variant="h5" component="h4">
      {date}
    </Typography>
    <ul
      css={css`
        background-color: ${({ theme }) => theme.palette.common.white};
      `}
    >
      {children}
    </ul>
  </li>
);
