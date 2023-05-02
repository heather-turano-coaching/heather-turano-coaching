import { withPage } from "@htc/features/page";
import { PromotionPage, PromotionPageProps } from "@htc/features/promotion";
import {
  IPromotion,
  IPromotionFields,
  getContentfulEntriesById,
  getContentfulEntryByField
} from "@htc/lib/server/contentful";
import { GetStaticPaths, GetStaticProps } from "next";

export type PromotionPaths = { slug: string | undefined };

export const getStaticPaths: GetStaticPaths<PromotionPaths> = async () => {
  const promotions = await getContentfulEntriesById<IPromotion>("promotion", {
    preview: false
  });

  const paths = promotions.items.reduce<{ params: PromotionPaths }[]>(
    (accum, promotion) => {
      return [
        ...accum,
        {
          params: {
            slug: promotion.fields.url
          }
        }
      ];
    },
    []
  );

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<PromotionPageProps> = async ({
  params,
  preview = false
}) => {
  const path = (params as PromotionPaths).slug as string;
  const promotion = await getContentfulEntryByField<
    IPromotion,
    IPromotionFields,
    "url"
  >({
    content_type: "promotion",
    field: "url",
    fieldValue: path,
    preview
  });

  const promotionData = promotion.items[0];

  return {
    props: {
      preview,
      promotion: promotionData as unknown as IPromotion
    },
    revalidate: 1
  };
};

export default withPage(PromotionPage);
