import { BlockSimplePlain } from "@htc/components/content/blocks/BlockSimple";
import { PageComponent } from "@htc/lib/page";
import { Button } from "@material-ui/core";
import Link from "next/link";
import React from "react";

import { LayoutRoot } from "../layout";

export const SubscriptionSuccessful: PageComponent = () => {
  return (
    <BlockSimplePlain
      title="Yassss! You're all signed up!"
      type="plain"
      footer={
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Back to Home Page
          </Button>
        </Link>
      }
    >
      <div>
        Congrats! You&apos;re now signed up to recieve email updates from
        Heather Turano Coaching!
      </div>
    </BlockSimplePlain>
  );
};

SubscriptionSuccessful.getPageLayout = function getPageLayout(
  page,
  { preview }
) {
  return <LayoutRoot preview={preview}>{page}</LayoutRoot>;
};
