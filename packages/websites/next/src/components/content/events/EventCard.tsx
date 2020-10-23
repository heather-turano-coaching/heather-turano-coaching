import { Group } from "@heather-turano-coaching/core/components";
import {
  makeDesktopStyles,
  makeMobileStyles,
  makeRem
} from "@heather-turano-coaching/core/theme";
import { Button, Typography } from "@material-ui/core";
import { differenceInHours, format } from "date-fns";
import { FC } from "react";
import { css } from "styled-components";

export type EventCardProps = {
  time: string;
  endTime: string;
  title: string;
  description: string;
  reserveLink: string;
  image: string;
  // price: string;
  isFree: boolean;
  // options: {
  //   video: boolean;
  //   ticketRequired: boolean;
  // };
};

export const EventCard: FC<EventCardProps> = (props) => {
  const startDateTime = new Date(props.time);
  const time = `${format(new Date(props.time), "p")} EST`;

  const duration = differenceInHours(new Date(props.endTime), startDateTime);
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
          ${({ theme }) => css`
            ${makeMobileStyles(theme)} {
              & > .subHeader {
                margin-bottom: ${makeRem(16)};
              }
            }

            ${makeDesktopStyles(theme)} {
              & > .subHeader {
                margin-bottom: ${makeRem(8)};
              }
              margin-right: ${makeRem(32)};
            }
          `}
        `}
      >
        <Typography
          variant="subtitle2"
          color="textSecondary"
          className="subHeader"
          component="p"
          css={css`
            font-weight: 700 !important;
          `}
        >
          {time} | {duration} hour
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          css={css`
            && {
              ${({ theme }) => css`
                ${makeMobileStyles(theme)} {
                  margin-bottom: ${makeRem(16)};
                }

                ${makeDesktopStyles(theme)} {
                  margin: ${makeRem(4)} 0 ${makeRem(16)} 0;
                }
              `}
            }
          `}
        >
          {props.title}
        </Typography>
        <Typography variant="body1">{props.description}</Typography>
      </div>
      <div
        css={css`
          ${({ theme }) => css`
            ${makeMobileStyles(theme)} {
              text-align: center;
              margin-top: ${makeRem(60)};
            }

            ${makeDesktopStyles(theme)} {
            }
          `}
        `}
      >
        <Group>
          <Button variant="text" color="primary" size="medium">
            Learn more
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            href={props.reserveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve
          </Button>
        </Group>
        {/* <div
          css={css`
            ${({ theme }) => css`
              ${makeMobileStyles(theme)} {
                text-align: center;
                margin-top: ${makeRem(32)};
              }

              ${makeDesktopStyles(theme)} {
              }
            `}
          `}
        ></div> */}
      </div>
    </div>
  );
};
