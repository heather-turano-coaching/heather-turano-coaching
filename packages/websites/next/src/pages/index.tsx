import { PageHome } from "components/feature/home/Home";
import { Meta, MetaProps } from "components/feature/meta";
import { IPageHome, contentfulClient } from "lib/contentful";
import { GetServerSideProps } from "next";

export type HomePageProps = MetaProps & {
  data: IPageHome;
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "7lfP0Xk3qXQIjAzpm9yJ8H"
  )) as IPageHome;

  return {
    props: {
      pageTitle: "Home",
      data
    }
  };
};

export default function HomePage({ pageTitle, data }: HomePageProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageHome {...data} />
    </>
  );
}
