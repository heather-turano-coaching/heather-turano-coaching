import { makeRem } from "@htc-website/components";
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
            right: ${makeRem(20)};
            bottom: ${makeRem(20)};
            z-index: 1000;
            border-radius: ${makeRem(8)};
            padding: ${makeRem(32)} ${makeRem(32)};
            background: white;
            border: ${makeRem(3)} solid hotpink;
            font-family: "Muli";
            max-width: ${makeRem(400)};
            text-align: center;
          `}
        >
          <div
            css={css`
              font-size: ${makeRem(18)};
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
