import { flexRow, makeRem } from "@htc/theme";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import { FC } from "react";
import { css } from "styled-components";

export const EventsEmtpy: FC = () => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        min-height: ${makeRem(260)};
        width: 100%;
        background: ${({ theme }) => theme.palette.common.white};
        ${flexRow("center", "center")};
        text-align: center;
        padding: ${makeRem(32)};
      `}
    >
      <div>
        <Image
          src="/images/lotus-flower.png"
          alt="a lotus flower"
          width={40}
          height={40}
        />
        <Typography variant="h4" component="p" color="textSecondary">
          No upcoming events
        </Typography>
        <Typography
          variant="body1"
          component="p"
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
