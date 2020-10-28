import {
  Image,
  SectionCopy,
  makeFlex
} from "@heather-turano-coaching/core/components";
import {
  makeColor,
  makeInset,
  makeResponsive,
  makeSize
} from "@heather-turano-coaching/core/design-system";
import { ITestimonials } from "@heather-turano-coaching/domain";
import { RichText } from "components/atomic";
import React, { FC } from "react";
import styled from "styled-components";

const StyledTestimonialContent = styled.div`
  ${makeInset({ top: 80, bottom: 120, horizontal: 80 })};
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  ${makeFlex("row", "center", "center")};

  & > .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    img {
      object-fit: cover;
    }
  }
`;

const StyledTesimonialTextConatiner = styled.div`
  ${makeInset({ vertical: 40, horizontal: 0 })};
  border-top: ${makeSize({ custom: 1 })} solid ${makeColor({ fixed: "light" })};
  border-bottom: ${makeSize({ custom: 1 })} solid
    ${makeColor({ fixed: "light" })};
  position: relative;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: makeInset({ vertical: 40, horizontal: 40 })
  })}

  p {
    font-style: italic !important;
  }
`;

export const TestimonialContent: FC<ITestimonials> = ({
  fields: { testimonialDescription, image, maskingOpacity }
}) => (
  <StyledTestimonialContent>
    <Image
      src={image.fields.file.url}
      alt="happy"
      manualHeight="100%"
      mask
      maskColor={{ scalable: { color: "gray", scale: 0 } }}
      maskOpacity={maskingOpacity / 100}
    />
    <SectionCopy>
      <StyledTesimonialTextConatiner>
        <RichText
          richText={testimonialDescription}
          copyProps={{
            variant: "body1"
          }}
        />
      </StyledTesimonialTextConatiner>
    </SectionCopy>
  </StyledTestimonialContent>
);
