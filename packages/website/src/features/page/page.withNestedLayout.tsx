import React, { FC } from "react";

import { PageProps } from "./page.model";

export const withNestedLayout = <P extends Record<string, unknown>>(
  NestedLayoutComponent: FC<PageProps<P>>,
  PageComponent: FC<PageProps<P>>
) => {
  return function NestedLayout(props: PageProps<P>) {
    return (
      <NestedLayoutComponent {...props}>
        <PageComponent {...props} />
      </NestedLayoutComponent>
    );
  };
};
