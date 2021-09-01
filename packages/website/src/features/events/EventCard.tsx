import {
  Group,
  theme.breakpoints.laptop,
  theme.breakpoints.mobileOnly,
  theme.size.makeRem
} from "@htc/components";
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
  isPastEvent?: boolean;
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
        padding: ${theme.size.makeRem(32)} 0;

        ${({ theme }) => css`
          ${theme.breakpoints.laptop(theme)} {
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
          height: ${theme.size.makeRem(144)};
          border-radius: ${theme.size.makeRem(4)};
          object-fit: cover;

          ${({ theme }) => css`
            background-color: ${theme.palette.primary.light};
            ${theme.breakpoints.mobileOnly(theme)} {
              margin-bottom: ${theme.size.makeRem(24)};
            }

            ${theme.breakpoints.laptop(theme)} {
              width: ${theme.size.makeRem(144)};
              margin-right: ${theme.size.makeRem(32)};
            }
          `}
        `}
      />
      <div
        css={css`
          flex: 1;
          ${({ theme }) => css`
            ${theme.breakpoints.mobileOnly(theme)} {
              & > .subHeader {
                margin-bottom: ${theme.size.makeRem(16)};
              }
            }

            ${theme.breakpoints.laptop(theme)} {
              & > .subHeader {
                margin-bottom: ${theme.size.makeRem(8)};
              }
              margin-right: ${theme.size.makeRem(32)};
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
                ${theme.breakpoints.mobileOnly(theme)} {
                  margin-bottom: ${theme.size.makeRem(16)};
                }

                ${theme.breakpoints.laptop(theme)} {
                  margin: ${theme.size.makeRem(4)} 0 ${theme.size.makeRem(16)} 0;
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
            ${theme.breakpoints.mobileOnly(theme)} {
              text-align: center;
              margin-top: ${theme.size.makeRem(60)};
            }

            ${theme.breakpoints.laptop(theme)} {
            }
          `}
        `}
      >
        <Group>
          {/* <Button variant="text" color="primary" size="medium">
            Learn more
          </Button> */}
          {!props.isPastEvent && (
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
          )}
        </Group>
        {/* <div
          css={css`
            ${({ theme }) => css`
              ${theme.breakpoints.mobileOnly(theme)} {
                text-align: center;
                margin-top: ${theme.size.makeRem(32)};
              }

              ${theme.breakpoints.laptop(theme)} {
              }
            `}
          `}
        ></div> */}
      </div>
    </div>
  );
};
