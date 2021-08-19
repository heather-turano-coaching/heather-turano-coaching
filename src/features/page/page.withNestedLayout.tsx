import React, { FC } from "react";

import { FeaturePageComponent } from "./page.model";

export const withNestedLayout = <
  P extends Record<string, unknown> = Record<string, unknown>
>(
  NestedLayoutComponent: FC<P>,
  PageComponent: FeaturePageComponent<P>
): FC<P> => {
  return function NestedLayout(props) {
    return (
      <NestedLayoutComponent {...props}>
        <PageComponent {...props} />
      </NestedLayoutComponent>
    );
  };
};
