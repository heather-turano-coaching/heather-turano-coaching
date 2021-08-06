import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import React from "react";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { BasicLinkCard } from "./BasicLinkCard";
import { BlogLinkCard } from "./BlogLinkCard";

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
      <BasicLinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
        important
      />
      <BlogLinkCard
        title="Allow Your Vision to Become Your Reality"
        subTitle="What if you could change it, do something different? Something that was more aligned with your passion, less stressful and you had time for joy? Would you change?"
        href="/blog"
        src="https://blog.heatherturanocoaching.com/content/images/2020/10/FK8A9495.jpg"
        alt="flying-with-toddler"
        overline="featured post"
      />
      <BlogLinkCard
        title="Allow Your Vision to Become Your Reality"
        subTitle="What if you could change it, do something different? Something that was more aligned with your passion, less stressful and you had time for joy? Would you change?"
        href="/blog"
        src="https://blog.heatherturanocoaching.com/content/images/2020/10/FK8A9495.jpg"
        alt="flying-with-toddler"
        overline="latest post"
      />
      <BasicLinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <BasicLinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <BasicLinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <BasicLinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <BasicLinkCard
        title="Important link card with sub-title"
        subTitle="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
        href="/blog"
      />
      <BasicLinkCard
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
