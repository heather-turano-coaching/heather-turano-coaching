import {
  Carousel,
  CarouselFooter
} from "@heather-turano-coaching/core/components";
import { makeSize } from "@heather-turano-coaching/core/design-system";
import {
  makeMobileStyles,
  makeRem
} from "@heather-turano-coaching/core/dist/src/theme";
import { ITestimonials } from "@heather-turano-coaching/domain";
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
