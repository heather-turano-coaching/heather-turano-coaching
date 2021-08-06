import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import React from "react";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { LinkCard } from "./LinkCard";

export const LinksPage: PageComponent = () => {
  return (
    <div
      css={css`
        ${({ theme }) => css`
          background-color: ${theme.palette.light.main};
        `}
        padding-top: ${makeRem(28)};
        padding-bottom: ${makeRem(28)};
        padding-left: ${makeRem(16)};
        padding-right: ${makeRem(16)};
      `}
    >
      <LinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
        important
      />
      <LinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <LinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <LinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <LinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <LinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <LinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
    </div>
  );
};

LinksPage.getPageLayout = function getPageLayout(page, { preview }) {
  return (
    <LayoutRoot preview={preview} hideNavBar>
      {page}
    </LayoutRoot>
  );
};
