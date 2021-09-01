import { makeRem } from "@htc-website/components";
import styled from "styled-components";

export const EventsSectionDateItem = styled.li`
  padding: 0 ${makeRem(32)};

  &:not(:last-child) {
    & > * {
      border-bottom: ${({ theme }) => `1px solid ${theme.palette.light.main}`};
    }
  }
`;
