import { Button, Typography, makeFontWeight } from "@htc/components";
import Cookies from "js-cookie";
import { rgba } from "polished";
import React, { useCallback } from "react";
import { useRef } from "react";
import { FC, ReactNode, useState } from "react";
import { css } from "styled-components";

type CookiesConsentProps = {
  namespace: string;
  consentCookieName?: string;
  title?: string;
  description: ReactNode;
  expiresInDays?: number;
  disableOnRoutes?: string[];
};

export const CookiesConsent: FC<CookiesConsentProps> = ({
  namespace,
  consentCookieName = "consent",
  description,
  expiresInDays = 365,
  title = "We Use Cookies",
  children
}) => {
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
  // if (pathname.includes("/links")) {
  //   return null;
  // }

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
          box-shadow: 0 0 17px rgb(205, 215, 216);

          ${({ theme }) => css`
            padding: ${theme.size.makeRem(16)} ${theme.size.makeRem(32)};
            ${theme.breakpoints.laptop} {
              width: ${theme.size.makeRem(360)};
              left: initial;
              right: ${theme.size.makeRem(40)};
              bottom: ${theme.size.makeRem(40)};
              border-radius: ${theme.size.makeRem(4)};
            }
          `}
        `}
      >
        <div
          css={css`
            margin-bottom: ${({ theme }) => theme.size.makeRem(20)};
          `}
        >
          <Typography
            variant="h4"
            css={css`
              && {
                ${({ theme }) => css`
                  margin-bottom: ${theme.size.makeRem(20)};
                  font-weight: ${makeFontWeight("semiBold")};

                  ${theme.breakpoints.mobileOnly} {
                    font-size: ${theme.size.makeRem(18)};
                  }
                `}
              }
            `}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            css={css`
              && {
                ${({ theme }) => css`
                  ${theme.breakpoints.mobileOnly} {
                    font-size: ${theme.size.makeRem(12)};
                  }
                `}
              }
            `}
          >
            {description}
          </Typography>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;

            & > * {
              margin-left: ${({ theme }) => theme.size.makeRem(16)} !important;
            }
          `}
        >
          <Button onClick={handleDecline} variant="text" color="dark">
            Decline
          </Button>
          <Button onClick={handleAccept} variant="filled" color="primary">
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
