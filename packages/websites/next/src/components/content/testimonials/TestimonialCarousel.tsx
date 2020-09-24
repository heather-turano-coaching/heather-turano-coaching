import { Carousel, CarouselFooter } from "@heather-turano-coaching/components";
import { makeSize } from "@heather-turano-coaching/design-system";
import { ITestimonials } from "lib/contentful";
import React, { FC, useState } from "react";
import styled from "styled-components";

import { TestimonialContent } from "./TestimonialContent";

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

const StyledContainer = styled.div`
  height: ${makeSize({ custom: 760 })};

  & > * {
    height: 100%;
  }
`;

export const TestimonialCarousel: FC<{ testimonials: ITestimonials[] }> = ({
  testimonials
}) => {
  const [currentEntry, setCurrentEntry] = useState<number>(0);
  const goToEntry = (index: number) => setCurrentEntry(index);

  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};
