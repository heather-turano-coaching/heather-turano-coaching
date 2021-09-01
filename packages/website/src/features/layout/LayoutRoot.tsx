import { FooterNav, HeaderNav } from "@htc-website/components";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useCallback } from "react";
import { css } from "styled-components";

export const LayoutRoot: FC<{
  preview: boolean | undefined;
  hideNavBar?: boolean;
}> = ({ children, preview = false, hideNavBar = false }) => {
  const { push } = useRouter();
  const handleExitPreviewMode = useCallback(() => {
    push(`/api/preview/clear?redirectTo=${window.location.pathname}`);
  }, [push]);

  return (
    <>
      <HeaderNav hideNavBar={hideNavBar} />
      {children}
      <FooterNav />
      {preview && (
        <div
          css={css`
            position: fixed;
            ${({ theme }) => css`
              right: ${theme.size.makeRem(20)};
              bottom: ${theme.size.makeRem(20)};
              border-radius: ${theme.size.makeRem(8)};
              padding: ${theme.size.makeRem(32)} ${theme.size.makeRem(32)};
              border: ${theme.size.makeRem(3)} solid hotpink;
              max-width: ${theme.size.makeRem(400)};
            `}

            z-index: 1000;

            background: white;
            font-family: "Muli";
            text-align: center;
          `}
        >
          <div
            css={css`
              font-size: ${({ theme }) => theme.size.makeRem(18)};
            `}
          >
            You are currently viewing this site in <strong>PREVIEW</strong>{" "}
            mode.
          </div>
          <br />
          <button onClick={handleExitPreviewMode}>Exit Preview Mode</button>
        </div>
      )}
    </>
  );
};
