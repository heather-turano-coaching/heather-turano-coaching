import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export const withSSRAuthentication = (
  getServerSideProps: GetServerSideProps | undefined = undefined
) =>
  withPageAuthRequired({
    getServerSideProps,
    returnTo: "/admin"
  });
