import { Image, RichText, SectionCopy } from "@htc-website/components";
import { flexRow, theme.size.makeRem } from "@htc-website/components";
import { makeInset, makeResponsive } from "@htc-website/design-system";
import { ITestimonials } from "@htc/contentful";
import { Container } from "@material-ui/core";
import React, { FC } from "react";
import styled, { css } from "styled-components";

const StyledTestimonialContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-left: ${theme.size.makeRem(32)};
  padding-right: ${theme.size.makeRem(32)};
  ${flexRow("center", "center")};

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

const StyledTesimonialTextConatiner = styled(Container)`
  position: relative;
  ${({ theme }) => css`
    color: ${theme.palette.common.white};
    border-top: ${theme.size.makeRem(2)} solid ${theme.palette.common.white};
    padding-top: ${theme.size.makeRem(32)};
    padding-bottom: ${theme.size.makeRem(32)};
    border-bottom: ${theme.size.makeRem(2)} solid ${theme.palette.common.white};
  `}

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
      <StyledTesimonialTextConatiner disableGutters>
        <RichText
          richText={testimonialDescription}
          copyProps={{
            variant: "body1",
            color: "inherit"
          }}
        />
      </StyledTesimonialTextConatiner>
    </SectionCopy>
  </StyledTestimonialContent>
);
