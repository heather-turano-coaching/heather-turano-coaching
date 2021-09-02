import { Button, Group, Typography } from "@htc/components";
import { differenceInHours, format } from "date-fns";
import React, { FC } from "react";
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
        ${({ theme }) => css`
          padding: ${theme.size.makeRem(32)} 0;

          ${theme.breakpoints.laptop} {
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

          object-fit: cover;

          ${({ theme }) => css`
            height: ${theme.size.makeRem(144)};
            border-radius: ${theme.size.makeRem(4)};
            background-color: ${theme.palette.primary.light};

            ${theme.breakpoints.mobileOnly} {
              margin-bottom: ${theme.size.makeRem(24)};
            }

            ${theme.breakpoints.laptop} {
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
            ${theme.breakpoints.mobileOnly} {
              & > .subHeader {
                margin-bottom: ${theme.size.makeRem(16)};
              }
            }

            ${theme.breakpoints.laptop} {
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
          color="dark"
          className="subHeader"
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
                ${theme.breakpoints.mobileOnly} {
                  margin-bottom: ${theme.size.makeRem(16)};
                }

                ${theme.breakpoints.laptop} {
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
            ${theme.breakpoints.mobileOnly} {
              text-align: center;
              margin-top: ${theme.size.makeRem(60)};
            }

            ${theme.breakpoints.laptop} {
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
              component="a"
              color="primary"
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
              ${theme.breakpoints.mobileOnly} {
                text-align: center;
                margin-top: ${theme.size.makeRem(32)};
              }

              ${theme.breakpoints.laptop} {
              }
            `}
          `}
        ></div> */}
      </div>
    </div>
  );
};
