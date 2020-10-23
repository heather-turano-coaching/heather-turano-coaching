import React, { FC } from "react";
import { css } from "styled-components";

import { FontWeights } from "./theme.types";

export const FontLinks: FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Muli:300i,400i,100,200,300,400,500,600,700,800,900&display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
};

export const FontImports = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Muli:300i,400i,100,200,300,400,500,600,700,800,900");
`;

export const fontWeightValues: { [key in FontWeights]: number } = {
  light: 200,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};
