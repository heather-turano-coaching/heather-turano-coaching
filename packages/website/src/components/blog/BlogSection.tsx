import { Title } from "@htc-website/components";
import { makeRem } from "@htc-website/components";
import React, { useMemo } from "react";
import { FC } from "react";
import { css } from "styled-components";

export const BlogSection: FC<{ title: string }> = ({ title, children }) => {
  return (
    <div
      css={css`
        & + & {
          margin-top: ${makeRem(200)};
        }
      `}
    >
      {useMemo(
        () => (
          <Title size="lg" copy={title} />
        ),
        [title]
      )}
      {children}
    </div>
  );
};
