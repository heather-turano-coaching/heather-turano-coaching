import styled from "styled-components";

import { PageStandalone } from "./PageStandalone";

const StyledPageStandalone = styled.div`
  color: #fff;
  text-align: center;
  display: block;
  margin-top: ${({ theme }) => theme.size.makeRem(48)};
`;

export function PageLoading() {
  return (
    <PageStandalone>
      <StyledPageStandalone>Authenticating...</StyledPageStandalone>
    </PageStandalone>
  );
}
