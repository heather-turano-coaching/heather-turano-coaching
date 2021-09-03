import React, { FC } from "react";
import { css } from "styled-components";

import { ColorKeys, ColorVariants, themePaletteDefaults } from "../theme";
import { Typography } from "../typography2";
import { PaletteBlock } from "./PaletteBlock";

export const Palette: FC = () => {
  return (
    <ul>
      {Object.entries(themePaletteDefaults).map(([color, colorVariants]) => {
        return (
          <li key={color}>
            <div>
              <Typography
                variant="h5"
                component="div"
                css={css`
                  text-transform: capitalize;
                  margin-top: ${({ theme }) => theme.size.makeRem(48)};
                `}
              >
                {color}
              </Typography>
            </div>
            <ul
              css={css`
                display: flex;
              `}
            >
              {Object.entries(colorVariants).map(
                ([colorVariant, colorVariantValue], i) =>
                  colorVariant !== "contrast" && (
                    <li
                      key={`${color}_${colorVariant}_${i}`}
                      css={css`
                        flex: 1;
                      `}
                    >
                      <PaletteBlock
                        bgColor={color as ColorKeys}
                        bgColorVariant={colorVariant as ColorVariants}
                      >
                        <div>
                          <Typography
                            color={color as ColorKeys}
                            colorVariant="contrast"
                          >
                            {colorVariant}
                          </Typography>
                          <Typography
                            color={color as ColorKeys}
                            colorVariant="contrast"
                          >
                            {colorVariantValue}
                          </Typography>
                        </div>
                      </PaletteBlock>
                    </li>
                  )
              )}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
