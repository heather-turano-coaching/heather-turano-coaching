import { Title } from "@htc/components/atomic";
import { IBlockTestimonial } from "@htc/lib/contentful";
import React, { FC } from "react";
import { css } from "styled-components";

import { TestimonialCarousel } from "./BlockTestimonialCarousel";

export const BlockTestimonial: FC<IBlockTestimonial> = ({
  fields: { block, testimonialEntries }
}) => {
  return (
    <div>
      <Title size="lg">{block.fields.title}</Title>
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
