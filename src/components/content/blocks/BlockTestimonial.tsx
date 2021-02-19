import { IBlockTestimonial } from "@htc/lib/contentful";
import { makeDesktopStyles, makeRem, makeRetinaStyles } from "@htc/theme";
import React, { FC } from "react";
import { css } from "styled-components";

import { BlockSimple } from "./BlockSimple";
import { TestimonialCarousel } from "./BlockTestimonialCarousel";

export const BlockTestimonial: FC<IBlockTestimonial> = ({
  fields: { block, testimonialEntries }
}) => {
  return (
    <div>
      <BlockSimple {...block} />
      <div
        css={css`
          width: 100%;
          max-width: 100%;
          position: relative;
          justify-content: center;
          display: flex;
        `}
      >
        <TestimonialCarousel testimonials={testimonialEntries} />
      </div>
    </div>
  );
};
