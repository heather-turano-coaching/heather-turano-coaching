import { makeRem, makeRetinaStyles } from "@heather-turano-coaching/core/theme";
import { IBlockTestimonial } from "@heather-turano-coaching/domain";
import React, { FC } from "react";
import { css } from "styled-components";

import { BlockSimple } from "./BlockSimple";
import { TestimonialCarousel } from "./BlockTestimonialCarousel";

export const BlockTestimonial: FC<IBlockTestimonial> = ({
  fields: { block, testimonialEntries }
}) => {
  return (
    <div
      css={css`
        width: 100%;

        ${({ theme }) => css`
          ${makeRetinaStyles(theme)} {
            display: flex;
          }
        `}

        * {
          box-sizing: border-box;
        }
      `}
    >
      <div
        css={css`
          flex: 1;
          padding: 0 ${makeRem(40)};
        `}
      >
        <BlockSimple {...block} />
      </div>
      <TestimonialCarousel testimonials={testimonialEntries} />
    </div>
  );
};
