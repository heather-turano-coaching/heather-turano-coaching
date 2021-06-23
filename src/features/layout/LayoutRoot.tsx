import { FooterNav, HeaderNav } from "@htc/components/content";
import { SWRProvider } from "@htc/lib/swr";
import { HTCTheme } from "@htc/theme";
import React, { FC } from "react";

const Providers: FC = ({ children }) => (
  <HTCTheme>
    <SWRProvider>{children}</SWRProvider>
  </HTCTheme>
);

export const LayoutRoot: FC = ({ children }) => (
  <Providers>
    <HeaderNav />
    {children}
    <FooterNav />
  </Providers>
);
