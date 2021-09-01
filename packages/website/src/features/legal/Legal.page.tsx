import {
  theme.breakpoints.laptop,
  theme.breakpoints.mobileOnly,
  theme.size.makeRem
} from "@htc-website/components";
import { Container, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

import { FeaturePageComponent } from "../page";
import { withLegalPageLayout } from "./Legal.layout";

const StyledCard = styled.a`
  padding: ${theme.size.makeRem(32)};
  box-shadow: 0 0 17px rgb(205, 215, 216);
  min-height: ${theme.size.makeRem(180)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.size.makeRem(4)};

  ${({ theme }) => css`
    min-width: 100%;
    transform: scale(1);

    ${theme.breakpoints.mobileOnly} {
      & + && {
        margin-top: ${theme.size.makeRem(32)};
      }
    }

    ${theme.breakpoints.laptop} {
      min-width: 33.333%;
      margin-left: ${theme.size.makeRem(16)};
      margin-right: ${theme.size.makeRem(16)};

      &:hover {
        transform: scale(1.1);
        transition: transform 0.15s ease-in-out;
      }
    }
  `}
`;

export const LegalPage: FeaturePageComponent = () => {
  return (
    <Container>
      <Typography
        variant="body1"
        css={css`
          && {
            text-align: center;
            max-width: ${theme.size.makeRem(700)};
            margin: 0 auto;
          }
        `}
      >
        Feel free to visit one of the links below to understand more about the
        legal parameters required and expected of our users while using{" "}
        <strong>heatherturanocoaching.com</strong>.
      </Typography>
      <div
        css={css`
          ${({ theme }) => css`
            padding: ${theme.size.makeRem(48)} 0 ${theme.size.makeRem(64)};
            ${theme.breakpoints.laptop} {
              display: flex;
              justify-content: center;
            }
          `}
        `}
      >
        <Link href="/legal/privacy-policy" passHref>
          <StyledCard>
            <Typography variant="h5" component="div">
              Privacy Policy
            </Typography>
          </StyledCard>
        </Link>
        <Link href="/legal/terms-of-service" passHref>
          <StyledCard>
            <Typography variant="h5" component="div">
              Terms of Service
            </Typography>
          </StyledCard>
        </Link>
      </div>
    </Container>
  );
};

LegalPage.withPageLayout = withLegalPageLayout;
