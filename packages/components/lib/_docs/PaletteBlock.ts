import styled, { css } from "styled-components";

import { ColorKeys, ColorVariants } from "../theme";

export const PaletteBlock = styled.div<{
  bgColor: ColorKeys;
  bgColorVariant: ColorVariants;
}>`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${({ theme, bgColor, bgColorVariant }) => {
    return css`
      padding-top: ${theme.size.makeRem(12)};
      padding-bottom: ${theme.size.makeRem(12)};
      padding-left: ${theme.size.makeRem(12)};
      background-color: ${theme.palette[bgColor][bgColorVariant]};
    `;
  }}
`;
