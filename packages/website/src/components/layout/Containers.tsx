import { makeRem } from "@heather-turano-coaching/core/theme";
import { Container, ContainerProps } from "@material-ui/core";
import { FC } from "react";
import { css } from "styled-components";

export const BlockVertSpacing = 100;
export const ProgramVertSpacing = 60;

export const BlockContainer: FC<ContainerProps> = ({
  children,
  maxWidth = "md",
  ...restProps
}) => (
  <Container
    maxWidth={maxWidth}
    {...restProps}
    css={css`
      padding-top: ${makeRem(BlockVertSpacing)};
      padding-bottom: ${makeRem(BlockVertSpacing)};
    `}
  >
    {children}
  </Container>
);

export const ProgramContainer: FC<ContainerProps> = ({
  children,
  maxWidth = "md",
  ...restProps
}) => (
  <Container
    maxWidth={maxWidth}
    {...restProps}
    css={css`
      &:not(:last-child) {
        padding-bottom: ${makeRem(ProgramVertSpacing)};
      }
    `}
  >
    {children}
  </Container>
);
