import { AdminPage } from "@htc-website/features/admin";
import { withPage, withSSRAuthentication } from "@htc-website/features/page";
import { GetServerSideProps } from "next";

export default withPage(AdminPage);

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSSRAuthentication({
    context
  });
