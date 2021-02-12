import { IServiceContact } from "@htc/domain";
import { Forms } from "components/content/forms";
import { FC } from "react";

export const ServiceCardContact: FC<IServiceContact> = ({
  fields: { form }
}) => {
  return <Forms form={form} />;
};
