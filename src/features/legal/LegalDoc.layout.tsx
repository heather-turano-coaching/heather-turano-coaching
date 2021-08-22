import { PageLayout, withPageLayout } from "@htc/features/page";
import {
  makeDesktopStyles,
  makeFontWeight,
  makeMobileStyles,
  makeRem
} from "@htc/theme";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

import { LegalPageLayout } from "./Legal.layout";
import { LegalDocProps } from "./LegalDoc.page";

export const ActiveLink = styled.a<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${makeRem(50)};
  width: 100%;
  text-transform: capitalize;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.palette.primary.dark};
      position: relative;

      &::before {
        background: ${theme.palette.primary.dark};
        display: block;
        position: absolute;
      }

      ${makeMobileStyles(theme)} {
        &::before {
          content: "";
          left: 0;
          right: 0;
          bottom: 0;
          height: ${makeRem(2)};
        }
      }

      ${makeDesktopStyles(theme)} {
        padding-left: ${makeRem(24)} !important;
        &::before {
          content: "";
          left: 0;
          top: 0;
          bottom: 0;
          width: ${makeRem(4)};
        }
      }

      & > * {
        font-weight: ${makeFontWeight("bold")} !important;
      }
    `}

  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      justify-content: flex-start;
      padding-left: ${makeRem(20)};
      padding-right: ${makeRem(20)};

      & > * {
        font-size: ${makeRem(18)} !important;
      }
    }
  `}
`;

const LegalDocPageLayout: PageLayout<LegalDocProps> = ({
  children,
  ...props
}) => {
  return (
    <LegalPageLayout preview={props.preview}>
      <ul
        css={css`
          width: 100%;
          padding: ${makeRem(20)};
          display: flex;
          justify-content: space-evenly;
          margin-bottom: ${makeRem(40)};

          ${({ theme }) => css`
            padding-top: 0;
            ${makeDesktopStyles(theme)} {
              flex-direction: column;
              justify-content: flex-start;
              min-width: ${makeRem(240)};
              max-width: 20%;
              margin-right: ${makeRem(40)};
              border-right: 1px solid ${theme.palette.light.main};
            }
          `}
        `}
      >
        {props.legalDocRoutes.map((route) => (
          <li
            key={route.href}
            css={css`
              width: 100%;
              ${({ theme }) => css`
                ${makeDesktopStyles(theme)} {
                  &:not(:first-child) {
                    margin-top: ${makeRem(16)};
                  }
                }
              `}
            `}
          >
            <Link href={route.href} passHref>
              <ActiveLink isActive={route.href.includes(props.legalDoc.slug)}>
                <Typography variant="body1" component="div">
                  {route.title}
                </Typography>
              </ActiveLink>
            </Link>
          </li>
        ))}
      </ul>
      <div
        css={css`
          ${({ theme }) => css`
            padding-left: ${makeRem(36)};
            padding-right: ${makeRem(36)};

            ${makeDesktopStyles(theme)} {
              max-width: ${makeRem(740)};
            }
          `}
        `}
      >
        {children}
      </div>
    </LegalPageLayout>
  );
};

export const withLegalDocPageLayout = withPageLayout(LegalDocPageLayout);
