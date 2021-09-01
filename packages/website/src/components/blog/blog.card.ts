import { css } from "styled-components";

export const BlogCardShadow = css`
  box-shadow: 0 0 10px 3px rgba(207, 207, 207, 0.5);
  border-radius: ${({ theme }) => theme.size.makeRem(4)};
`;
