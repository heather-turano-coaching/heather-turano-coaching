import React, { FC } from "react";

import { FeaturePageComponent, PageProps } from "./page.model";

export const withPage = <P extends Record<string, unknown>>(
  FeaturePageComponent: FeaturePageComponent<PageProps<P>>
): FC<PageProps<P>> => {
  const ComponentWithLayout =
    FeaturePageComponent.withPageLayout(FeaturePageComponent);

  return function WithLayout(props: PageProps<P>) {
    const preview = props.preview || false;

    return <ComponentWithLayout {...props} preview={preview} />;
  };
};
