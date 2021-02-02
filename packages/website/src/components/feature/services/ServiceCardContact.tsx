import { IServiceContact } from "@heather-turano-coaching/domain";
import { Forms } from "components/content/forms";
import { FC } from "react";

export const ServiceCardContact: FC<IServiceContact> = ({
  fields: { form }
}) => {
  return <Forms form={form} />;
};
