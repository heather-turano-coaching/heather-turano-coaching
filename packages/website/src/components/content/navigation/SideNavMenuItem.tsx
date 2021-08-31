import { makeFontWeight, makeRem } from "@htc/theme";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC, memo } from "react";
import { useMemo } from "react";
import { themePalette } from "src/theme/theme.config.palette";
import { css } from "styled-components";

import { SideNavVariants } from "./side-nav.utils";
import { useSideNavContext } from "./SideNav.context";

const variants: SideNavVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
};

export const SideNavMenuItem: FC<{
  label: string;
  href: string;
  disableLink?: boolean;
}> = memo(function SideNavMenuItem({ label, href, disableLink = false }) {
  const { handleToggle } = useSideNavContext();

  const whileHoverAndTab = useMemo(() => {
    if (!disableLink) {
      return {
        whileHover: {
          scale: 0.95,
          color: themePalette.secondary.dark
        },
        whileTap: { scale: 1.02 }
      };
    }
    return {};
  }, [disableLink]);

  const PlainContent = useMemo(
    () => (
      <Typography
        variant="body2"
        css={css`
          font-weight: ${makeFontWeight("bold")};
          text-transform: uppercase;
          color: ${({ theme }) => theme.palette.secondary.dark};
        `}
      >
        {label}
      </Typography>
    ),
    [label]
  );

  const LinkContent = useMemo(
    () => (
      <Link href={href} passHref>
        <Typography
          variant="body2"
          component="a"
          onClick={handleToggle}
          css={css`
            font-weight: inherit;
            text-transform: uppercase;
            width: 100%;
          `}
        >
          {label}
        </Typography>
      </Link>
    ),
    [handleToggle, href, label]
  );

  return (
    <motion.li
      variants={variants}
      {...whileHoverAndTab}
      css={css`
        list-style: none;
        margin-bottom: ${makeRem(20)};
        display: flex;
        align-items: center;
        cursor: ${disableLink ? "cursor" : "initial"};
      `}
    >
      {disableLink ? PlainContent : LinkContent}
    </motion.li>
  );
});
