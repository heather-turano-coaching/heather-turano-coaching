import { PageHome } from "components/feature/home/Home";
import { Meta, MetaProps } from "components/feature/meta";
import { ContentType, Entry } from "contentful";
import { contentfulClient } from "lib/contentful";
import { GetStaticProps } from "next";

export type HomePageProps = MetaProps & {
  data: Entry<{}>;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const data = await contentfulClient.getEntry("7lfP0Xk3qXQIjAzpm9yJ8H");

  return {
    props: {
      pageTitle: "Test",
      data
    }
  };
};

export default function IndexPage({ pageTitle, data }: HomePageProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />;
      <PageHome {...data} />
    </>
  );
}
