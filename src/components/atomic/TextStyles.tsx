import { makeFontWeight, makeRem } from "@htc/theme";
import styled, { css } from "styled-components";

export const TextStyles = styled.div`
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }

  p {
    font-family: "Muli";
    font-size: ${makeRem(16)};
    line-height: ${makeRem(16 * 2)};

    & + p {
      margin-top: ${makeRem(16 * 2)};
    }
  }

  strong {
    font-weight: ${makeFontWeight("extraBold")};
  }

  h1 {
    ${({ theme }) => css`
      font-size: ${
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        theme.typography.h3.fontSize
      };
      font-family: ${theme.typography.h3.fontFamily};
      font-weight: ${theme.typography.h3.fontWeight};
    `};
    margin-top: ${makeRem(16 * 5)};
    margin-bottom: ${makeRem(16 * 2)};
  }

  h2 {
    ${({ theme }) => css`
      font-size: ${
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        theme.typography.h4.fontSize
      };
      font-family: ${theme.typography.h4.fontFamily};
      font-weight: ${theme.typography.h4.fontWeight};
    `};
    margin-top: ${makeRem(16 * 3)};
    margin-bottom: ${makeRem(16 * 1)};
  }

  ul,
  ol {
    margin-top: ${makeRem(16)};
    margin-bottom: ${makeRem(16 * 3)};
    margin-left: ${makeRem(16 * 3)};

    li {
      padding: 0 ${makeRem(16)};

      & + li {
        margin-top: ${makeRem(4)};
      }
    }
  }

  ul {
    li {
      list-style-type: disc;
    }
  }

  ol {
    li {
      list-style-type: decimal;
    }
  }

  blockquote {
    margin: ${makeRem(48)} ${makeRem(32)};
    background: ${({ theme }) => theme.palette.light.light};
    padding: ${makeRem(40)} ${makeRem(40)};
    font-weight: 500;
    font-size: ${makeRem(18)};
    box-shadow: 0 0 16px 8px rgba(219, 219, 219, 0.5);
  }

  figure {
    width: 100%;
    padding: 0;
    margin: ${makeRem(24)} 0;

    figcaption {
      text-align: center;
      padding: ${makeRem(4)};
      ${({ theme }) => css`
        font-size: ${
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          theme.typography.caption.fontSize
        };
        font-family: ${theme.typography.caption.fontFamily};
        background: ${theme.palette.light.light};
      `};
    }
  }

  img {
    display: block;
    width: 100%;
  }
`;
