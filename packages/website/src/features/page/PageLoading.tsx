import { css } from "styled-components";

import { PageStandalone } from "./PageStandalone";

export function PageLoading() {
  return (
    <PageStandalone>
      <span
        css={css`
          color: #fff;
          text-align: center;
          display: block;
          margin-top: ${({ theme }) => theme.size.makeRem(48)};
        `}
      >
        Authenticating...
      </span>
    </PageStandalone>
  );
}
