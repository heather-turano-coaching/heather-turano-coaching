import { Typography } from "@htc/components";
import Image from "next/image";
import React, { FC } from "react";
import { css } from "styled-components";

export const EventsEmtpy: FC = () => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        ${({ theme }) => css`
          min-height: ${theme.size.makeRem(260)};
          background: ${theme.palette.common.white};
          padding: ${theme.size.makeRem(32)};
        `}
        width: 100%;
        text-align: center;
      `}
    >
      <div>
        <Image
          src="/images/lotus-flower.png"
          alt="a lotus flower"
          width={40}
          height={40}
        />
        <Typography variant="h4" component="p" color="textPrimary">
          No upcoming events
        </Typography>
        <Typography
          variant="body1"
          css={css`
            max-width: 50ch;
          `}
        >
          Unfortunately, there aren&apos;t any new events scheduled. Check back
          soon or add your email address below to be alerted when more become
          available!
        </Typography>
      </div>
    </div>
  );
};
