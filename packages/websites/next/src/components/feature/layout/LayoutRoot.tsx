import { HTCTheme } from "@heather-turano-coaching/core/dist/src/theme";
import { FooterNav, HeaderNav } from "components/content/navigation";
import { SWRProvider } from "lib/swr.provider";
import React, { FC } from "react";

export const LayoutRoot: FC = ({ children }) => (
  <SWRProvider>
    <HTCTheme>
      <HeaderNav />
      {children}
      <FooterNav />
    </HTCTheme>
  </SWRProvider>
);
