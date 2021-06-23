import { getEndpoint } from "@htc/lib/endpoint";
import { IWebPage } from "@htc/lib/server/contentful";
import { ContentfulPagination } from "@htc/lib/server/contentful/contentful.types.custom";
import { makeRem } from "@htc/theme";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { useMemo } from "react";
import styled, { css } from "styled-components";
import useSWR from "swr";

import { SideNavMenuItem } from "./SideNavMenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const StyledMenuSection = styled.div`
  padding-top: ${makeRem(32)};
  margin-top: ${makeRem(32)};

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.palette.noir.light};
  }
`;

export const SideNavMenu: FC = () => {
  const { data } = useSWR<ContentfulPagination<IWebPage>>(
    getEndpoint({
      root: "/pages"
    })
  );

  const DynamicSection = useMemo(() => {
    if (!data) {
      return null;
    }
    return data.items.map(
      (webPageItem) =>
        webPageItem.fields.displayInNavbar && (
          <SideNavMenuItem
            key={webPageItem.sys.id}
            label={webPageItem.fields.navbarLabel}
            href={
              webPageItem.fields.url === "index" ? "/" : webPageItem.fields.url
            }
          />
        )
    );
  }, [data]);

  return (
    <div
      css={css`
        padding-left: ${makeRem(20)};
        padding-right: ${makeRem(20)};
      `}
    >
      <StyledMenuSection>
        <motion.ul
          variants={variants}
          css={css`
            width: ${makeRem(300)};
          `}
        >
          {DynamicSection}
        </motion.ul>
      </StyledMenuSection>
      <StyledMenuSection>
        <motion.ul
          variants={variants}
          css={css`
            width: ${makeRem(300)};
          `}
        >
          <SideNavMenuItem label="free consultation" href="/free-consult" />
        </motion.ul>
      </StyledMenuSection>
      <StyledMenuSection>
        <motion.ul
          variants={variants}
          css={css`
            width: ${makeRem(300)};
          `}
        >
          <SideNavMenuItem label="contact me" href="/contact-me" />
        </motion.ul>
      </StyledMenuSection>
    </div>
  );
};
