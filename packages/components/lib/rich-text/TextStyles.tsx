import styled, { css } from "styled-components";

import { makeFontWeight } from "../theme";

export const TextStyles = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    * {
      box-sizing: border-box;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    a {
      text-decoration: underline;
      font-weight: ${makeFontWeight("bold")};
      ${({ theme }) => css`
        color: ${theme.palette.primary.dark};
      `};
    }

    p,
    li {
      font-family: "Muli";
      font-size: ${theme.size.makeRem(16)};
      line-height: ${theme.size.makeRem(16 * 2)};

      & + p {
        margin-top: ${theme.size.makeRem(16 * 2)};
      }
    }

    strong {
      font-weight: ${makeFontWeight("extraBold")};
    }

    h1 {
      font-size: ${theme.size.makeRem(32)};
      font-family: "Montserrat";
      font-weight: ${makeFontWeight("semiBold")};
      margin-top: ${theme.size.makeRem(16 * 5)};
      margin-bottom: ${theme.size.makeRem(16 * 2)};
    }

    h2 {
      font-size: ${theme.size.makeRem(24)};
      font-family: "Montserrat";
      font-weight: ${makeFontWeight("semiBold")};
      margin-top: ${theme.size.makeRem(16 * 3)};
      margin-bottom: ${theme.size.makeRem(16 * 1)};
    }

    ul,
    ol {
      margin-top: ${theme.size.makeRem(16)};
      margin-bottom: ${theme.size.makeRem(16 * 3)};
      margin-left: ${theme.size.makeRem(16 * 3)};

      li {
        padding: 0 ${theme.size.makeRem(16)};

        & + li {
          margin-top: ${theme.size.makeRem(4)};
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
      margin: ${theme.size.makeRem(48)} ${theme.size.makeRem(32)};
      background: ${({ theme }) => theme.palette.light.light};
      padding: ${theme.size.makeRem(40)} ${theme.size.makeRem(40)};
      font-weight: 500;
      font-size: ${theme.size.makeRem(18)};
      box-shadow: 0 0 16px 8px rgba(219, 219, 219, 0.5);
    }

    figure {
      width: 100%;
      padding: 0;
      margin: ${theme.size.makeRem(24)} 0;

      figcaption {
        text-align: center;
        padding: ${theme.size.makeRem(4)};
        font-size: ${theme.size.makeRem(12)};
        font-family: "Muli";
        background: ${theme.palette.light.light};
      }
    }
  `}
`;
