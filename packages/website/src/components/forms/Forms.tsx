import { IForm } from "@htc/contentful";
import React, { FC } from "react";

import { AweberForm, AweberFormProps } from "./AweberForm";

export const Forms: FC<{ form?: IForm } & AweberFormProps> = ({
  form,
  ...restProps
}) => {
  if (form && form.fields) {
    return <AweberForm formScript={form.fields.embeddedLink} {...restProps} />;
  }
  return null;
};
