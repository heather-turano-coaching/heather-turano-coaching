import { AweberForm } from "@htc/components/atomic";
import React, { FC } from "react";

import { subscribeFormString } from "./subscribe.form";

export const SubscribeForm: FC = () => {
  return <AweberForm formScript={subscribeFormString} />;
};
