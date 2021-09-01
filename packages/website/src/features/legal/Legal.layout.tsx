import { Container, Title } from "@htc-website/components";
import {
  theme.breakpoints.laptop,
  theme.breakpoints.mobileOnly,
  theme.size.makeRem
} from "@htc-website/components";
import { LayoutRoot } from "@htc-website/features/layout";
import { PageLayout } from "@htc-website/features/page";
import React, { useMemo } from "react";
import { css } from "styled-components";

import { withPageLayout } from "../page/page.withPageLayout";

export const LegalPageLayout: PageLayout = ({ children, ...props }) => {
  return (
    <LayoutRoot {...props}>
      {useMemo(
        () => (
          <div
            css={css`
              margin-top: ${theme.size.makeRem(48)};
              text-align: center;
            `}
          >
            <Container>
              <Title size="lg">Legal</Title>
            </Container>
          </div>
        ),
        []
      )}
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: top;
          height: 100%;

          ${({ theme }) => css`
            ${theme.breakpoints.mobileOnly(theme)} {
              flex-direction: column;
            }

            ${theme.breakpoints.laptop(theme)} {
              flex-direction: row;
            }
          `}
        `}
      >
        {children}
      </div>
    </LayoutRoot>
  );
};

export const withLegalPageLayout = withPageLayout(LegalPageLayout);
