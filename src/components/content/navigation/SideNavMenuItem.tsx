import { makeRem } from "@htc/theme";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { css } from "styled-components";

const variants = {
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
      y: { stiffness: 1000 }
    }
  }
};

export const SideNavMenuItem: FC<{ label?: string }> = ({ label }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 1.02 }}
      css={css`
        list-style: none;
        margin-bottom: ${makeRem(20)};
        display: flex;
        align-items: center;
        cursor: pointer;
      `}
    >
      <Typography
        variant="body2"
        component="div"
        css={css`
          font-weight: inherit;
          text-transform: uppercase;
        `}
      >
        {label || "-- --"}
      </Typography>
    </motion.li>
  );
};
