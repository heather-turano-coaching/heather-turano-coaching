import React, { FC } from "react";
import styled from "styled-components";

import { makeOutset, makeResponsive } from "../../design-system";
import { Layout } from "../../design-system";

interface FormContainerProps {
  layout?: Layout;
}

const StyledFormContainer = styled.div<FormContainerProps>`
  width: 100%;
  ${makeOutset({ vertical: 20, horizontal: "auto" })}

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: makeOutset({ vertical: 32, horizontal: "auto" })
  })}
`;

export const FormContainer: FC<FormContainerProps> = ({
  layout = "stacked",
  children
}) => <StyledFormContainer layout={layout}>{children}</StyledFormContainer>;
