import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<Record<string, unknown>> =
  async () => {
    return {
      redirect: {
        destination: "/admin/sign-in",
        permanent: false
      }
    };
  };

export default function AccountVerified() {
  return <div />;
}
