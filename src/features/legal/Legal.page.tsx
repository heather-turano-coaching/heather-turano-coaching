import { Container } from "@htc/components/atomic";
import { makeDesktopStyles, makeRem } from "@htc/theme";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

import { FeaturePageComponent } from "../page";
import { withLegalPageLayout } from "./Legal.layout";

const StyledCard = styled.a`
  padding: ${makeRem(32)};
  box-shadow: 0 0 17px rgb(205, 215, 216);
  min-height: ${makeRem(240)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${makeRem(4)};

  ${({ theme }) => css`
    min-width: 100%;

    ${makeDesktopStyles(theme)} {
      min-width: 33.333%;
      transform: scale(1);

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
            padding: ${makeRem(48)} 0 ${makeRem(64)};
            ${makeDesktopStyles(theme)} {
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
      </div>
    </Container>
  );
};

LegalPage.withPageLayout = withLegalPageLayout;
