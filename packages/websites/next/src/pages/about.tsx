import { PageAbout } from "components/feature/about";
import { Meta, MetaProps } from "components/feature/meta";
import { contentfulClient } from "lib/contentful";
import { IPageAbout } from "lib/contentful";
import { GetServerSideProps } from "next";

export type AboutPageProps = MetaProps & {
  data: IPageAbout;
};

export const getServerSideProps: GetServerSideProps<AboutPageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "1d8Op07qxu9UPPUEYdDcbE"
  )) as IPageAbout;

  return {
    props: {
      pageTitle: "About",
      data
    }
  };
};

export default function AboutPage({ pageTitle, data }: AboutPageProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageAbout {...data} />
    </>
  );
}
