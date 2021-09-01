import { Title } from "@htc/components";
import React, { useMemo } from "react";
import { FC } from "react";
import { css } from "styled-components";

export const BlogSection: FC<{ title: string }> = ({ title, children }) => {
  return (
    <div
      css={css`
        & + & {
          margin-top: ${({ theme }) => theme.size.makeRem(200)};
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
