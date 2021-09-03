import {
  Typography,
  makeFontWeight,
  themePaletteDefaults
} from "@htc/components";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC, memo } from "react";
import { useMemo } from "react";
import { css } from "styled-components";

import { SideNavVariants } from "./side-nav.utils";
import { useSideNavContext } from "./SideNav.context";

console.log(Typography, makeFontWeight, themePaletteDefaults, motion);

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
          color: themePaletteDefaults.secondary.dark
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
      <Link href={href}>
        <a onClick={handleToggle}>
          <Typography
            variant="body2"
            css={css`
              font-weight: inherit;
              text-transform: uppercase;
              width: 100%;
            `}
          >
            {label}
          </Typography>
        </a>
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
        margin-bottom: ${({ theme }) => theme.size.makeRem(20)};
        display: flex;
        align-items: center;
        cursor: ${disableLink ? "cursor" : "initial"};
      `}
    >
      {disableLink ? PlainContent : LinkContent}
    </motion.li>
  );
});
