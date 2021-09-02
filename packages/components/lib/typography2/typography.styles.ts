import { css } from "styled-components";

import { makeFontWeight } from "../theme";

export const CSSH1 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.h1.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.h1.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.h1.fontSize)};
    margin: ${theme.size.makeRem(theme.typ.h1.margin[0])}
      ${theme.size.makeRem(theme.typ.h1.margin[1])};
    line-height: ${theme.typ.h1.lineHeight};
  `}
`;
export const CSSH2 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.h2.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.h2.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.h2.fontSize)};
    margin: ${theme.size.makeRem(theme.typ.h2.margin[0])}
      ${theme.size.makeRem(theme.typ.h2.margin[1])};
    line-height: ${theme.typ.h2.lineHeight};
  `}
`;
export const CSSH3 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.h3.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.h3.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.h3.fontSize)};
    margin: ${theme.size.makeRem(theme.typ.h3.margin[0])}
      ${theme.size.makeRem(theme.typ.h3.margin[1])};
    line-height: ${theme.typ.h3.lineHeight};
  `}
`;
export const CSSH4 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.h4.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.h4.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.h4.fontSize)};
    margin: ${theme.size.makeRem(theme.typ.h4.margin[0])}
      ${theme.size.makeRem(theme.typ.h4.margin[1])};
    line-height: ${theme.typ.h4.lineHeight};
  `}
`;
export const CSSH5 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.h5.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.h5.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.h5.fontSize)};
    margin: ${theme.size.makeRem(theme.typ.h5.margin[0])}
      ${theme.size.makeRem(theme.typ.h5.margin[1])};
    line-height: ${theme.typ.h5.lineHeight};
  `}
`;
export const CSSH6 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.h6.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.h6.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.h6.fontSize)};
    margin: ${theme.size.makeRem(theme.typ.h6.margin[0])}
      ${theme.size.makeRem(theme.typ.h6.margin[1])};
    line-height: ${theme.typ.h6.lineHeight};
  `}
`;
export const CSSSubtitle1 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.subtitle1.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.subtitle1.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.subtitle1.fontSize)};
    margin: ${theme.size.makeRem(theme.typ.subtitle1.margin[0])}
      ${theme.size.makeRem(theme.typ.subtitle1.margin[1])};
    line-height: ${theme.typ.subtitle1.lineHeight};
  `}
`;
export const CSSSubtitle2 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.subtitle2.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.subtitle2.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.subtitle2.fontSize)};
    margin: ${theme.size.makeRem(theme.typ.subtitle2.margin[0])}
      ${theme.size.makeRem(theme.typ.subtitle2.margin[1])};
    line-height: ${theme.typ.subtitle2.lineHeight};
  `}
`;
export const CSSBody1 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.body1.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.body1.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.body1.fontSize)};
    line-height: ${theme.typ.body1.lineHeight};
  `}
`;
export const CSSBody2 = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.body2.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.body2.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.body2.fontSize)};
    line-height: ${theme.typ.body2.lineHeight};
  `}
`;
export const CSSOverline = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.overline.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.overline.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.overline.fontSize)};
    line-height: ${theme.typ.overline.lineHeight};
    text-transform: uppercase;
  `}
`;
export const CSSCaption = css`
  ${({ theme }) => css`
    font-family: ${theme.typ.caption.fontFamily};
    font-weight: ${makeFontWeight(theme.typ.caption.fontWeight)};
    font-size: ${theme.size.makeRem(theme.typ.caption.fontSize)};
    line-height: ${theme.typ.caption.lineHeight};
  `}
`;
