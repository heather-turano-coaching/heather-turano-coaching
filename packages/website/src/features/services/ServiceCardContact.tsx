import { Forms } from "@htc-website/components";
import { IServiceContact } from "@htc/contentful";
import { FC } from "react";

export const ServiceCardContact: FC<IServiceContact> = ({
  fields: { form }
}) => {
  return <Forms form={form} />;
};
