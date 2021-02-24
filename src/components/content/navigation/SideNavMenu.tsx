import { makeRem } from "@htc/theme";
import { motion } from "framer-motion";
import React, { FC } from "react";
import styled, { css } from "styled-components";

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

export const SideNavMenu: FC = () => (
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
        <SideNavMenuItem />
        <SideNavMenuItem />
        <SideNavMenuItem />
        <SideNavMenuItem />
        <SideNavMenuItem />
        <SideNavMenuItem />
      </motion.ul>
    </StyledMenuSection>
    <StyledMenuSection>
      <motion.ul
        variants={variants}
        css={css`
          width: ${makeRem(300)};
        `}
      >
        <SideNavMenuItem />
      </motion.ul>
    </StyledMenuSection>
    <StyledMenuSection>
      <motion.ul
        variants={variants}
        css={css`
          width: ${makeRem(300)};
        `}
      >
        <SideNavMenuItem label="contact me" />
      </motion.ul>
    </StyledMenuSection>
  </div>
);
