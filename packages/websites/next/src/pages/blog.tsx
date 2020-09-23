import { PageBlog } from "components/feature/blog";
import { Meta, MetaProps } from "components/feature/meta";
import { GetStaticProps } from "next";

export type AboutPageProps = MetaProps & {};

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  return {
    props: {
      pageTitle: "Events"
    }
  };
};

export default function EventsPage({ pageTitle }: AboutPageProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageBlog />
    </>
  );
}
