import { getEndpoint } from "@htc/lib/endpoint";
import { INavbar } from "@htc/lib/server/contentful";
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
  const { data } = useSWR<INavbar>(
    getEndpoint({
      root: "/navigation/side"
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
          {data?.fields.group1?.map((page) => (
            <SideNavMenuItem
              key={page.sys.id}
              label={page.fields.navbarLabel}
              disableLink={
                page.fields.url === "index"
                  ? asPath.startsWith("/home")
                  : asPath.startsWith(`/${page.fields.url}`)
              }
              href={page.fields.url === "index" ? "/" : page.fields.url}
            />
          ))}
        </motion.ul>
      </StyledMenuSection>
      {useMemo(
        () =>
          data?.fields.group2 && (
            <StyledMenuSection>
              <motion.ul
                variants={variants}
                css={css`
                  width: ${makeRem(300)};
                `}
              >
                {data?.fields.group2?.map((page) => (
                  <SideNavMenuItem
                    key={page.sys.id}
                    label={page.fields.navbarLabel}
                    disableLink={
                      page.fields.url === "index"
                        ? asPath.startsWith("/home")
                        : asPath.startsWith(`/${page.fields.url}`)
                    }
                    href={page.fields.url === "index" ? "/" : page.fields.url}
                  />
                ))}
              </motion.ul>
            </StyledMenuSection>
          ),
        [asPath, data?.fields.group2]
      )}
      {useMemo(
        () =>
          data?.fields.group3 && (
            <StyledMenuSection>
              <motion.ul
                variants={variants}
                css={css`
                  width: ${makeRem(300)};
                `}
              >
                {data?.fields.group3?.map((page) => (
                  <SideNavMenuItem
                    key={page.sys.id}
                    label={page.fields.navbarLabel}
                    disableLink={
                      page.fields.url === "index"
                        ? asPath.startsWith("/home")
                        : asPath.startsWith(`/${page.fields.url}`)
                    }
                    href={page.fields.url === "index" ? "/" : page.fields.url}
                  />
                ))}
              </motion.ul>
            </StyledMenuSection>
          ),
        [asPath, data?.fields.group3]
      )}
      {useMemo(
        () =>
          data?.fields.group4 && (
            <StyledMenuSection>
              <motion.ul
                variants={variants}
                css={css`
                  width: ${makeRem(300)};
                `}
              >
                {data?.fields.group4?.map((page) => (
                  <SideNavMenuItem
                    key={page.sys.id}
                    label={page.fields.navbarLabel}
                    disableLink={
                      page.fields.url === "index"
                        ? asPath.startsWith("/home")
                        : asPath.startsWith(`/${page.fields.url}`)
                    }
                    href={page.fields.url === "index" ? "/" : page.fields.url}
                  />
                ))}
              </motion.ul>
            </StyledMenuSection>
          ),
        [asPath, data?.fields.group4]
      )}
    </div>
  );
};
