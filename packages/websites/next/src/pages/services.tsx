import { Meta, MetaProps } from "components/feature/meta";
import { PageServices } from "components/feature/services";
import { contentfulClient } from "lib/contentful";
import { IPageService } from "lib/contentful";
import { GetStaticProps } from "next";

export type ServicePageProps = MetaProps & {
  data: IPageService;
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "4E3pUa1xi3PTgVN5JocekM"
  )) as IPageService;

  return {
    props: {
      pageTitle: "Services",
      data
    }
  };
};

export default function ServicesPage({ pageTitle, data }: ServicePageProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageServices {...data} />
    </>
  );
}
