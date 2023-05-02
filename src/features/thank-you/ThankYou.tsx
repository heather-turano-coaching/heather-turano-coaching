import React, { FC, ReactNode } from "react";

import { Title } from "@htc/components/atomic";
import styled from "styled-components";
import { makeRem } from "@htc/theme";
import { Container } from "@material-ui/core";

export type ThankYouProps = {
  title: string;
  children: ReactNode;
};

const SDiv = styled("div")`
  padding: ${makeRem(32)};
  max-width: 60ch;
  margin: 0 auto;
  text-align: center;
  min-height: 70vh;

  p + p {
    margin-top: ${makeRem(16)};
  }
`;

export const ThankYou: FC<ThankYouProps> = ({ title, children }) => {
  return (
    <Container>
      <SDiv>
        <Title size="lg">{title}</Title>
        {children}
      </SDiv>
    </Container>
  );
};
