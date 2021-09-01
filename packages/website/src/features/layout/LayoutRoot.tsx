import { theme.size.makeRem } from "@htc-website/components";
import { FooterNav, HeaderNav } from "@htc-website/components/content";
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
            right: ${theme.size.makeRem(20)};
            bottom: ${theme.size.makeRem(20)};
            z-index: 1000;
            border-radius: ${theme.size.makeRem(8)};
            padding: ${theme.size.makeRem(32)} ${theme.size.makeRem(32)};
            background: white;
            border: ${theme.size.makeRem(3)} solid hotpink;
            font-family: "Muli";
            max-width: ${theme.size.makeRem(400)};
            text-align: center;
          `}
        >
          <div
            css={css`
              font-size: ${theme.size.makeRem(18)};
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
