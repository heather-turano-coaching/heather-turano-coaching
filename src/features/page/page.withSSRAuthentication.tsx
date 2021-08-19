import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const getFullReturnTo = (ctx: GetServerSidePropsContext) => {
  return ctx.resolvedUrl;
};

export const withSSRAuthentication = async ({
  context,
  getServerSideProps = undefined
}: {
  context: GetServerSidePropsContext;
  getServerSideProps?: GetServerSideProps;
}) => {
  return withPageAuthRequired({
    getServerSideProps,
    returnTo: getFullReturnTo(context)
  })(context);
};
