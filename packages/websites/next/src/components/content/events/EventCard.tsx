import { Button } from "@heather-turano-coaching/core/components";
import {
  makeDesktopStyles,
  makeMobileStyles,
  makeRem
} from "@heather-turano-coaching/core/theme";
import { Typography } from "@material-ui/core";
import { format } from "date-fns";
import { FC } from "react";
import { css } from "styled-components";

export type EventCardProps = {
  time: string;
  title: string;
  description: string;
  reserveLink: string;
  image: string;
  price: string;
  options: {
    video: boolean;
    ticketRequired: boolean;
  };
};

export const EventCard: FC<EventCardProps> = (props) => {
  const time = `${format(new Date(props.time), "p")} EST`;
  return (
    <div
      css={css`
        padding: ${makeRem(32)} 0;

        ${({ theme }) => css`
          ${makeDesktopStyles(theme)} {
            display: flex;
          }
        `}
      `}
    >
      <img
        src={props.image}
        alt={props.title}
        css={css`
          display: block;
          width: 100%;
          height: ${makeRem(144)};
          border-radius: ${makeRem(4)};
          object-fit: cover;

          ${({ theme }) => css`
            background-color: ${theme.palette.primary.light};
            ${makeMobileStyles(theme)} {
              margin-bottom: ${makeRem(24)};
            }

            ${makeDesktopStyles(theme)} {
              width: ${makeRem(144)};
              margin-right: ${makeRem(32)};
            }
          `}
        `}
      />
      <div
        css={css`
          flex: 1;
        `}
      >
        <Typography
          variant="subtitle2"
          color="textSecondary"
          css={css`
            font-weight: 700 !important;
          `}
        >
          {time}
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          css={css`
            && {
              margin: ${makeRem(4)} 0 ${makeRem(12)} 0;
            }
          `}
        >
          {props.title}
        </Typography>
        <Typography variant="body1">{props.description}</Typography>
      </div>
      <div>
        <Button
          href={props.reserveLink}
          styleType="secondary"
          label="Reserve"
        />
      </div>
    </div>
  );
};
