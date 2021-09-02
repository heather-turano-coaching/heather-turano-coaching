import React, { FC } from "react";
import styled from "styled-components";

import {
  FontProperties,
  makeColor,
  makeInset,
  makeReset,
  makeRhythm,
  makeSize,
  makeSpace
} from "../design-system";
import { createImageBorder } from "../theme";
import { CSSBody1, CSSCaption, CSSH2, CSSH4 } from "../typography2";

const contentLineHeight: FontProperties["fontSize"] = "sm";

const StyledContent = styled.section`
  display: block;
  ${makeInset({ top: 0, bottom: { custom: 30 }, horizontal: 0 })};

  & > div.content {
    * {
      box-sizing: border-box;
    }

    h1 {
      ${CSSH2};
      ${makeRhythm({ fontSize: contentLineHeight, top: 3, bottom: 1 })};
      line-height: 1.2;
      color: ${makeColor({ fixed: "dark" })};

      & + h2 {
        ${makeRhythm({ fontSize: contentLineHeight, top: 2, bottom: 1 })};
      }
    }

    h2 {
      ${CSSH4};
      ${makeRhythm({ fontSize: contentLineHeight, top: 3, bottom: 1 })};
      line-height: 1.2;
      font-weight: 600;
      font-family: "Muli";
      color: ${makeColor({ fixed: "dark" })};
    }

    p {
      ${CSSBody1}
      ${makeRhythm({ fontSize: contentLineHeight, top: 1, bottom: 0 })};
    }

    ol,
    ul {
      ${makeRhythm({ fontSize: contentLineHeight, top: 1, bottom: 1 })};
      ${makeInset({ horizontal: 60 })};
    }

    a {
      ${makeReset("anchor")};
      display: inline;
      background: ${makeColor({
        scalable: { color: "accent", scale: 3 }
      })};
      text-decoration: underline;
      text-decoration-color: ${makeColor({
        scalable: { color: "gray", scale: 0 }
      })};
      transition: background 0.15s ease-in-out;

      &:hover {
        background: ${makeColor({
          scalable: { color: "accent", scale: 2 }
        })};
      }

      &:visited {
        color: ${makeColor({ scalable: { color: "gray" } })};
      }
    }

    li {
      ${CSSBody1};
    }

    img {
      max-width: 100%;
      ${createImageBorder({ scalable: { color: "primary" } })}
    }

    figure {
      ${makeReset("figure")};
      ${makeRhythm({ fontSize: contentLineHeight, top: 1, bottom: 1 })};
      background: ${makeColor({ scalable: { color: "light", scale: 2 } })};

      figcaption {
        ${makeInset({ top: 16, bottom: 16 })};
        text-align: center;
        ${CSSCaption};
      }
    }

    blockquote {
      ${makeReset("blockquote")};
      position: relative;
      ${makeRhythm({ fontSize: contentLineHeight, top: 1, bottom: 1 })};
      background: ${makeColor({ scalable: { color: "primary", scale: 3 } })};
      ${makeInset({ horizontal: 32, vertical: 32 })};
      margin-left: ${makeSpace("md")};
      margin-right: ${makeSpace("md")};
      ${CSSCaption};
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: ${makeSize({ custom: 4 })};
        background: ${makeColor({ scalable: { color: "primary" } })};
      }
    }
  }
`;

export const Content: FC<{ htmlContent?: string }> = ({
  htmlContent,
  children
}) => (
  <StyledContent>
    {htmlContent ? (
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    ) : (
      <div className="content">{children}</div>
    )}
  </StyledContent>
);
