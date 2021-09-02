import { AdminPage } from "@htc-website/features/admin";
import { withSSRAuthentication } from "@htc/auth";
import { withPage } from "@htc/components";
import { GetServerSideProps } from "next";

export default withPage(AdminPage);

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSSRAuthentication({
    context
  });
