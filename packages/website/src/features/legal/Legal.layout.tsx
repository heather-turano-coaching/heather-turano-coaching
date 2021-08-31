import { Container, Title } from "@htc/components/atomic";
import { LayoutRoot } from "@htc/features/layout";
import { PageLayout } from "@htc/features/page";
import { makeDesktopStyles, makeMobileStyles, makeRem } from "@htc/theme";
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
              margin-top: ${makeRem(48)};
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
            ${makeMobileStyles(theme)} {
              flex-direction: column;
            }

            ${makeDesktopStyles(theme)} {
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
