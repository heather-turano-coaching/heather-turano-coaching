import { Carousel, CarouselFooter } from "@htc/components/atomic";
import { makeSize } from "@htc/core/design-system";
import { ITestimonials } from "@htc/domain";
import { makeMobileStyles, makeRem } from "@htc/theme";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { fullScreenSansNavbar } from "../navigation";
import { TestimonialContent } from "./BlockTestimonialContent";

export interface Testimonial {
  customerDescription: string;
  customerLocation: string;
  testimonialDescription: {
    testimonialDescription: string;
  };
  image: {
    file: {
      url: string;
    };
  };
  maskingOpacity: number;
}

const StyledFooter = styled.div`
  position: absolute;
  bottom: ${makeSize({ custom: 40 })};
  left: 0;
  right: 0;
`;

export const TestimonialCarousel: FC<{ testimonials: ITestimonials[] }> = ({
  testimonials
}) => {
  const [currentEntry, setCurrentEntry] = useState<number>(0);
  const goToEntry = (index: number) => setCurrentEntry(index);

  return (
    <div
      css={css`
        ${({ theme }) => css`
          ${makeMobileStyles(theme)} {
            height: ${fullScreenSansNavbar};
          }
        `}
        height: ${makeRem(800)};

        & > * {
          height: 100%;
        }
      `}
    >
      <Carousel>
        <TestimonialContent {...testimonials[currentEntry]} />
        <StyledFooter>
          <CarouselFooter
            entries={testimonials}
            currentEntry={currentEntry}
            goToEntry={goToEntry}
            activeColor={{ fixed: "light" }}
          />
        </StyledFooter>
      </Carousel>
    </div>
  );
};
