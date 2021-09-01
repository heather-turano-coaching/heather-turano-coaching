import { RichText } from "@htc-website/components";
import {
  makeDesktopStyles,
  makeMobileStyles,
  makeRem,
  makeTabletStyles
} from "@htc-website/components";
import { ChevronLeft, ChevronRight } from "@htc-website/icons";
import { ITestimonials } from "@htc-website/lib/server/contentful";
import { SvgIcon, Typography } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

const StyledNavButton = styled.button`
  position: absolute;
  transform: translate(0, 50%);
  height: ${makeRem(48)};
  width: ${makeRem(48)};
  border-radius: ${makeRem(8)};
  border: 0;
  background: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  cursor: pointer;

  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  `}
`;

export const TestimonialCarousel: FC<{ testimonials: ITestimonials[] }> = ({
  testimonials
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div
          css={css`
            max-width: 100%;
            margin: ${makeRem(8)};
            width: ${makeRem(600)};
            min-height: ${makeRem(1000)};
            box-shadow: 17px 88px 60px -100px rgb(79 94 120 / 18%),
              -1px 2px 20px -7px rgb(79 94 120 / 10%);
            border-radius: ${makeRem(2)};
            position: relative;

            ${({ theme }) => css`
              ${makeTabletStyles(theme)} {
                min-height: ${makeRem(900)};
              }
              ${makeDesktopStyles(theme)} {
                min-height: ${makeRem(860)};
              }
            `}
          `}
        >
          <div
            css={css`
              height: ${makeRem(280)};
              border-top-left-radius: inherit;
              border-top-right-radius: inherit;
              overflow: hidden;
              position: relative;
            `}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                css={css`
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  top: 0;
                `}
                key={page}
                initial={{
                  scale: 1.2,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                exit={{
                  y: 1.2,
                  opacity: 0
                }}
                transition={{
                  scale: { type: "spring", duration: 10 },
                  opacity: { type: "spring", duration: 1 }
                }}
              >
                <img
                  src={testimonials[imageIndex].fields.image.fields.file.url}
                  alt={testimonials[imageIndex].fields.image.fields.title}
                  css={css`
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    border-radius: inherit;
                    object-fit: cover;
                    object-position: center center;
                  `}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              position: relative;
            `}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                initial={{
                  y: 40,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                exit={{
                  y: 40,
                  opacity: 0
                }}
                transition={{
                  top: { type: "spring", duration: 1 },
                  opacity: { type: "spring", duration: 0.5 }
                }}
                css={css`
                  position: absolute;
                `}
              >
                <div
                  css={css`
                    ${({ theme }) => css`
                      ${makeMobileStyles(theme)} {
                        padding-left: ${makeRem(32)};
                        padding-right: ${makeRem(32)};
                        padding-top: ${makeRem(72)};
                        padding-bottom: ${makeRem(32)};
                      }
                      ${makeTabletStyles(theme)} {
                        padding-left: ${makeRem(32)};
                        padding-right: ${makeRem(32)};
                        padding-top: ${makeRem(48)};
                        padding-bottom: ${makeRem(72)};
                      }
                    `}
                  `}
                >
                  <Typography variant="overline">
                    {testimonials[imageIndex].fields.customerLocation}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="p"
                    css={css`
                      margin-bottom: ${makeRem(32)};
                    `}
                  >
                    {testimonials[imageIndex].fields.customerDescription}
                  </Typography>
                  <RichText
                    richText={
                      testimonials[imageIndex].fields.testimonialDescription
                    }
                    copyProps={{
                      variant: "body1"
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <StyledNavButton
            css={css`
              top: ${makeRem(280 - 48)};
              left: ${makeRem(36)};

              ${({ theme }) => css`
                ${makeDesktopStyles(theme)} {
                  left: -${makeRem(72)};
                }
              `}
            `}
            onClick={() => paginate(-1)}
          >
            <SvgIcon color="inherit">
              <ChevronLeft />
            </SvgIcon>
          </StyledNavButton>
          <StyledNavButton
            css={css`
              top: ${makeRem(280 - 48)};
              right: ${makeRem(36)};

              ${({ theme }) => css`
                ${makeDesktopStyles(theme)} {
                  right: -${makeRem(72)};
                }
              `}
            `}
            onClick={() => paginate(1)}
          >
            <SvgIcon color="inherit">
              <ChevronRight />
            </SvgIcon>
          </StyledNavButton>
        </div>
      </AnimatePresence>
    </>
  );
};
