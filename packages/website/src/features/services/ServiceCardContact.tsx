import { Forms } from "@htc-website/components/content";
import { IServiceContact } from "@htc-website/lib/server/contentful";
import { FC } from "react";

export const ServiceCardContact: FC<IServiceContact> = ({
  fields: { form }
}) => {
  return <Forms form={form} />;
};
