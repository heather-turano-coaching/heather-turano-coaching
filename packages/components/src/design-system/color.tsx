import React, { FC } from "react";
import { ColorHex } from "@heather-turano-coaching/design-system";
import styled from "styled-components";

interface ColorCardProps {
  color: ColorHex;
  name: string;
}

type ColorCardTuple = [
  ColorCardProps,
  ColorCardProps,
  ColorCardProps,
  ColorCardProps
];

export interface ColorPaletteProps {
  scalable?: [
    ColorCardTuple,
    ColorCardTuple,
    ColorCardTuple,
    ColorCardTuple,
    ColorCardTuple
  ];
  fixed?: [[ColorCardProps, ColorCardProps]];
}

const StyledColorPalette = styled.div`
  padding: 2rem;
  background: #f2f2f2;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: top;
    overflow: hidden;
    border-radius: 0.25rem;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);

    &:not(:first-child):not(:last-child) {
      margin: 2rem 0;
    }

    & > * {
      flex: 1;
    }
  }
`;

export const ColorPalette: FC<ColorPaletteProps> = ({ scalable, fixed }) => (
  <StyledColorPalette>
    {scalable &&
      scalable.map((colorBlocks, index) => (
        <div key={index.toString()}>
          {colorBlocks.map((colorCard) => (
            <ColorCard key={colorCard.color} {...colorCard} />
          ))}
        </div>
      ))}
    {fixed &&
      fixed.map((colorBlocks, index) => (
        <div key={index.toString()}>
          {colorBlocks.map((colorCard) => (
            <ColorCard key={colorCard.color} {...colorCard} />
          ))}
        </div>
      ))}
  </StyledColorPalette>
);

const StyledColorBlock = styled.div<{ backgroundColor: string }>`
  height: 10rem;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const StyledColorDetails = styled.div`
  padding: 0.875rem;
  background: #fff;

  div {
    line-height: 1.4;
    font-family: system-ui;

    &:first-child {
      font-size: 1rem;
      font-weight: 600;
    }

    &:last-child {
      font-size: 0.75rem;
      font-weight: 400;
      font-style: italic;
      color: #959595;
      text-transform: uppercase;
      margin-top: 0.25rem;
    }
  }
`;

const StyledColorCard = styled.div``;

export const ColorCard: FC<ColorCardProps> = ({
  color: backgroundColor,
  name
}) => (
  <StyledColorCard>
    <StyledColorBlock backgroundColor={backgroundColor} />
    <StyledColorDetails>
      <div>{name}</div>
      <div>{backgroundColor}</div>
    </StyledColorDetails>
  </StyledColorCard>
);
