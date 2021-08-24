import { makeDesktopStyles, makeFontWeight, makeRem } from "@htc/theme";
import { Button, Typography } from "@material-ui/core";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { rgba } from "polished";
import { useCallback } from "react";
import { useRef } from "react";
import { FC, ReactNode, useState } from "react";
import { css } from "styled-components";

type CookiesConsentProps = {
  namespace: string;
  consentCookieName?: string;
  title?: string;
  description: ReactNode;
  expiresInDays?: number;
};

export const CookiesConsent: FC<CookiesConsentProps> = ({
  namespace,
  consentCookieName = "consent",
  description,
  expiresInDays = 365,
  title = "We Use Cookies",
  children
}) => {
  const { pathname } = useRouter();
  const cookieName = useRef(`${namespace}_${consentCookieName}`);
  const [didConsent, setDidConsent] = useState<"true" | "false" | undefined>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof Cookies.get(cookieName.current) !== "undefined"
      ? Cookies.get(cookieName.current)
      : undefined
  );

  const handleAccept = useCallback(() => {
    Cookies.set(cookieName.current, "true", { expires: expiresInDays });
    setDidConsent("true");
  }, [expiresInDays]);

  const handleDecline = useCallback(() => {
    Cookies.set(cookieName.current, "false", { expires: expiresInDays });
    setDidConsent("false");
  }, [expiresInDays]);

  // a route has been restricted
  if (pathname.includes("/links")) {
    return null;
  }

  if (typeof didConsent === "undefined") {
    // a decision hasn't been made
    return (
      <div
        css={css`
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          height: auto;
          z-index: 100;
          background: ${rgba("#fff", 0.93)};
          padding: ${makeRem(32)};
          box-shadow: 0 0 17px rgb(205, 215, 216);

          ${({ theme }) => css`
            ${makeDesktopStyles(theme)} {
              width: ${makeRem(360)};
              left: initial;
              right: ${makeRem(40)};
              bottom: ${makeRem(40)};
              border-radius: ${makeRem(4)};
            }
          `}
        `}
      >
        <div
          css={css`
            margin-bottom: ${makeRem(20)};
          `}
        >
          <Typography
            variant="h4"
            component="div"
            css={css`
              && {
                margin-bottom: ${makeRem(20)};
                font-weight: ${makeFontWeight("semiBold")};
              }
            `}
          >
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;

            & > * {
              margin-left: ${makeRem(16)} !important;
            }
          `}
        >
          <Button onClick={handleDecline} variant="text">
            Decline
          </Button>
          <Button onClick={handleAccept} variant="contained" color="primary">
            Accept
          </Button>
        </div>
      </div>
    );
  }

  // a decision was false
  if (didConsent === "false") {
    return null;
  }

  // consented to cookies
  // scripting here
  return <>{children}</>;
};
