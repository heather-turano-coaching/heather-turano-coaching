import {
  UserProfile,
  WithPageAuthRequiredProps,
  withPageAuthRequired
} from "@auth0/nextjs-auth0";
import {
  FeaturePageComponent,
  PageLoading,
  PageProps,
  withPage
} from "@htc/components";
import React, { FC } from "react";

export const withCSRAuthentication = <
  P extends PageProps & WithPageAuthRequiredProps = PageProps & {
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
