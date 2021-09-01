import { PageLayout, withPageLayout } from "@htc-website/features/page";
import { Typography, makeFontWeight } from "@htc/components";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

import { LegalPageLayout } from "./Legal.layout";
import { LegalDocProps } from "./LegalDoc.page";

export const ActiveLink = styled.a<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.size.makeRem(50)};
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

      ${theme.breakpoints.mobileOnly} {
        &::before {
          content: "";
          left: 0;
          right: 0;
          bottom: 0;
          height: ${theme.size.makeRem(2)};
        }
      }

      ${theme.breakpoints.laptop} {
        padding-left: ${theme.size.makeRem(24)} !important;
        &::before {
          content: "";
          left: 0;
          top: 0;
          bottom: 0;
          width: ${theme.size.makeRem(4)};
        }
      }

      & > * {
        font-weight: ${makeFontWeight("bold")} !important;
      }
    `}

  ${({ theme }) => css`
    ${theme.breakpoints.laptop} {
      justify-content: flex-start;
      padding-left: ${theme.size.makeRem(20)};
      padding-right: ${theme.size.makeRem(20)};

      & > * {
        font-size: ${theme.size.makeRem(18)} !important;
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
          display: flex;
          justify-content: space-evenly;

          ${({ theme }) => css`
            padding: ${theme.size.makeRem(20)};
            padding-top: 0;
            margin-bottom: ${theme.size.makeRem(40)};

            ${theme.breakpoints.laptop} {
              flex-direction: column;
              justify-content: flex-start;
              min-width: ${theme.size.makeRem(240)};
              max-width: 20%;
              margin-right: ${theme.size.makeRem(40)};
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
                ${theme.breakpoints.laptop} {
                  &:not(:first-child) {
                    margin-top: ${theme.size.makeRem(16)};
                  }
                }
              `}
            `}
          >
            <Link href={route.href} passHref>
              <ActiveLink isActive={route.href.includes(props.legalDoc.slug)}>
                <Typography variant="body1">{route.title}</Typography>
              </ActiveLink>
            </Link>
          </li>
        ))}
      </ul>
      <div
        css={css`
          ${({ theme }) => css`
            padding-left: ${theme.size.makeRem(36)};
            padding-right: ${theme.size.makeRem(36)};

            ${theme.breakpoints.laptop} {
              max-width: ${theme.size.makeRem(740)};
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
