import React, { FC } from "react";

import { FeaturePageComponent, PageComponentProps } from "./page.model";

export const withPage = <P extends Record<string, unknown>>(
  FeaturePageComponent: FeaturePageComponent<P>
): FC<P & PageComponentProps> => {
  const ComponentWithLayout =
    FeaturePageComponent.withPageLayout(FeaturePageComponent);

  return function WithLayout(props: P & PageComponentProps) {
    const preview = props.preview || false;

    return <ComponentWithLayout {...props} preview={preview} />;
  };
};
