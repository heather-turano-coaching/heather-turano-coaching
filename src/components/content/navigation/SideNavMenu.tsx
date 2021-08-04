import { getEndpoint } from "@htc/lib/endpoint";
import { IWebPage } from "@htc/lib/server/contentful";
import { ContentfulPagination } from "@htc/lib/server/contentful/contentful.types.custom";
import { makeRem } from "@htc/theme";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useMemo } from "react";
import styled, { css } from "styled-components";
import useSWR from "swr";

import { SideNavVariants } from "./side-nav.utils";
import { SideNavMenuItem } from "./SideNavMenuItem";

const variants: SideNavVariants = {
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
  const { asPath } = useRouter();
  const { data } = useSWR<ContentfulPagination<IWebPage>>(
    getEndpoint({
      root: "/pages"
    })
  );

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
          {data?.items.map((webPageItem) => {
            if (webPageItem.fields.displayInNavbar) {
              return (
                <SideNavMenuItem
                  key={webPageItem.sys.id}
                  label={webPageItem.fields.navbarLabel}
                  disableLink={
                    webPageItem.fields.url === "index"
                      ? asPath.startsWith("/home")
                      : asPath.startsWith(`/${webPageItem.fields.url}`)
                  }
                  href={
                    webPageItem.fields.url === "index"
                      ? "/"
                      : webPageItem.fields.url
                  }
                />
              );
            }
            return null;
          })}
        </motion.ul>
      </StyledMenuSection>
      {useMemo(
        () => (
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
        ),
        []
      )}
      {/* <StyledMenuSection>
        <motion.ul
          variants={variants}
          css={css`
            width: ${makeRem(300)};
          `}
        >
          <SideNavMenuItem label="contact me" href="/contact-me" />
        </motion.ul>
      </StyledMenuSection> */}
    </div>
  );
};
