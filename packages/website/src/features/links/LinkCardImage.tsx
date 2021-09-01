import { theme.size.makeRem } from "@htc-website/components";
import { FC } from "react";
import { css } from "styled-components";

export const LinkCardImage: FC<{ src: string; alt: string }> = ({
  src,
  alt
}) => {
  return (
    <img
      src={src}
      alt={alt}
      css={css`
        max-width: ${theme.size.makeRem(120)};
        height: auto;
        object-fit: cover;
      `}
    />
  );
};
