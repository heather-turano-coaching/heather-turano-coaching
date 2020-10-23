import { HTCTheme, makeTheme } from "@heather-turano-coaching/core/theme";
import { FooterNav, HeaderNav } from "components/content/navigation";
import { SWRProvider } from "lib/swr.provider";
import React, { FC } from "react";

const theme = makeTheme();

console.log(theme);
console.log("APPPPPPPPP");

const Providers: FC = ({ children }) => (
  <HTCTheme appTheme={theme}>
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
