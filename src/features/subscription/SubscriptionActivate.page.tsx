import { BlockSimplePlain } from "@htc/components/content/blocks/BlockSimple";
import { PageComponent } from "@htc/lib/page";
import React from "react";

import { LayoutRoot } from "../layout";

export const SubscriptionActivate: PageComponent = () => {
  return (
    <BlockSimplePlain
      title="You're Almost Done - Activate Your Subscription!"
      type="stacked"
    >
      <div>
        You&apos;ve just been sent an email that contains a{" "}
        <strong>confirmation link.</strong>
      </div>
      <br />
      <div>
        In order to activate your subscription, check your email and click on
        the link in that email. You will not receive your subscription until you
        click that link to activate it.
      </div>
      <br />
      <div>
        If you don&apos;t see that email in your inbox within 12 hours, please
        reach out to <strong>support@heatherturanocoaching.com</strong>
      </div>
    </BlockSimplePlain>
  );
};

SubscriptionActivate.getPageLayout = function getPageLayout(page, { preview }) {
  return <LayoutRoot preview={preview}>{page}</LayoutRoot>;
};
