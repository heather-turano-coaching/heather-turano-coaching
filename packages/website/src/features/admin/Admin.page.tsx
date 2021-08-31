import { useUser } from "@auth0/nextjs-auth0";
import { FeaturePageComponent } from "@htc/features/page";

import { withAdminPageLayout } from "./Admin.layout";

export const AdminPage: FeaturePageComponent = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Welcome, {user ? user.name : "-- --"}</h1>
      {/* <a href="/api/auth/logout?returnTo=/admin/sign-in">sign out</a> */}
    </>
  );
};

AdminPage.withPageLayout = withAdminPageLayout;
