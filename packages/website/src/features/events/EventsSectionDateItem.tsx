import styled from "styled-components";

export const EventsSectionDateItem = styled.li`
  padding: 0 ${({ theme }) => theme.size.makeRem(32)};

  &:not(:last-child) {
    & > * {
      border-bottom: ${({ theme }) => `1px solid ${theme.palette.light.main}`};
    }
  }
`;
