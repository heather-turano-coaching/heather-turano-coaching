import { makeRem } from "@htc/theme";
import { Typography } from "@material-ui/core";
import { FC } from "react";
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
        margin-top: ${makeRem(64)};
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
