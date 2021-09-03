import React, { FC } from "react";

import { PageProps } from "./page.model";

export function withPageLayout<P = Record<string, unknown>>(
  FuncComponent: FC<P>
) {
  return function WithPageLayout(PageComponent: FC<PageProps<P>>) {
    return function PageLayout(props: PageProps<P>) {
      return (
        <FuncComponent {...props}>
          <PageComponent {...props} />
        </FuncComponent>
      );
    };
  };
}
