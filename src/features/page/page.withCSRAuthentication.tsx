import {
  UserProfile,
  WithPageAuthRequiredProps,
  withPageAuthRequired
} from "@auth0/nextjs-auth0";
import React, { FC } from "react";

import {
  DefaultPageComponentProps,
  FeaturePageComponent,
  PageComponentProps
} from "./page.model";
import { withPage } from "./page.withPage";
import { PageLoading } from "./PageLoading";

export const withCSRAuthentication = <
  P extends PageComponentProps &
    WithPageAuthRequiredProps = DefaultPageComponentProps & {
    user: UserProfile;
  }
>(
  FeaturePageComponent: FeaturePageComponent<P>
): FC<P> => {
  return function WithCSRAuthentication(props: P) {
    const ComponentWithLayout = withPage(FeaturePageComponent);

    const AuthenicatedComponentWithLayout = withPageAuthRequired(
      ComponentWithLayout,
      {
        // eslint-disable-next-line react/display-name
        onRedirecting: () => <PageLoading />,
        returnTo:
          typeof window !== "undefined" ? window.location.pathname : undefined
      }
    );
    return <AuthenicatedComponentWithLayout {...props} />;
  };
};
