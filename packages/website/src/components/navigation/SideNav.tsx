import { theme.size.makeRem } from "@htc-website/components";
import { Menu } from "@htc-website/icons";
import { SvgIcon } from "@material-ui/core";
import { motion } from "framer-motion";
import { lighten } from "polished";
import React, { FC, useRef } from "react";
import { css } from "styled-components";

import { SideNavProvider, useSideNavContext } from "./SideNav.context";
import { useDimensions } from "./SideNav.use-dimensions";
import { SideNavMenu } from "./SideNavMenu";

const sidebar = {
  open: () => ({
    width: theme.size.makeRem(300),
    boxShadow: "0 0 10px 3px rgb(207 207 207 / 50%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }),
  closed: {
    width: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const SideNavContent: FC = () => {
  const { isOpen, handleToggle } = useSideNavContext();

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      css={css`
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
      `}
    >
      <motion.div
        variants={sidebar}
        css={css`
          position: absolute;
          height: 100%;
          right: 0;
          top: 0;
          background: ${({ theme }) =>
            lighten(0.4, theme.palette.secondary.dark)};
        `}
      >
        <SideNavMenu />
      </motion.div>

      <button
        onClick={handleToggle}
        css={css`
          outline: none;
          border: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: pointer;
          position: absolute;
          top: 18px;
          right: ${theme.size.makeRem(24)};
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: transparent;
          color: ${({ theme }) => theme.palette.secondary.dark};
        `}
      >
        <SvgIcon>
          <Menu />
        </SvgIcon>
      </button>
    </motion.nav>
  );
};

export const SideNav: FC = () => {
  return (
    <SideNavProvider>
      <SideNavContent />
    </SideNavProvider>
  );
};
