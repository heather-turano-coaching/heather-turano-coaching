import React from "react";

import { Alert } from "./Alert";

export default {
  component: Alert,
  title: "Messaging|Alert"
};

export const success = () => <Alert type="success">We did it!</Alert>;
export const successLong = () => (
  <Alert type="success">
    We did it! Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
    auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  </Alert>
);
export const error = () => <Alert type="error">We blew it!</Alert>;
export const errorLong = () => (
  <Alert type="error">
    We blew it! Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
    auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  </Alert>
);
export const warning = () => <Alert type="warning">We blew it!</Alert>;
export const warningLong = () => (
  <Alert type="warning">
    We blew it! Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
    auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  </Alert>
);
