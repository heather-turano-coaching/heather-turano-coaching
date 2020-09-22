import { PageHome } from "components/feature/home/Home";
import { Meta, MetaProps } from "components/feature/meta";
import { ContentType, Entry } from "contentful";
import { contentfulClient } from "lib/contentful";
import { IPageHome } from "models/contentful";
import { GetStaticProps } from "next";

export type HomePageProps = MetaProps & {
  data: IPageHome;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
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

export default function IndexPage({ pageTitle, data }: HomePageProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageHome {...data} />
    </>
  );
}