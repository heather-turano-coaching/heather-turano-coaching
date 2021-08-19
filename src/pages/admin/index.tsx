import { AdminPage } from "@htc/features/admin";
import { withPage, withSSRAuthentication } from "@htc/features/page";
import { GetServerSideProps } from "next";

export default withPage(AdminPage);

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSSRAuthentication({
    context
  });
