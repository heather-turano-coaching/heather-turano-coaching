import { AweberForm } from "@htc-website/components";
import React, { FC } from "react";

import { subscribeFormString } from "./subscribe.form";

export const SubscribeForm: FC = () => {
  return <AweberForm formScript={subscribeFormString} />;
};
