import { theme.size.makeRem } from "@htc-website/components";
import styled from "styled-components";

export const EventsSectionDateItem = styled.li`
  padding: 0 ${theme.size.makeRem(32)};

  &:not(:last-child) {
    & > * {
      border-bottom: ${({ theme }) => `1px solid ${theme.palette.light.main}`};
    }
  }
`;
