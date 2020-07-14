import React from "react";

import { Textarea } from "./Textarea";

export default {
  component: Textarea,
  title: "Inputs|Textarea",
};

export const base = () => <Textarea name="default" />;
export const withPlaceholder = () => (
  <Textarea name="with-placeholder" placeholder="Textarea placeholder" />
);
export const withValue = () => (
  <Textarea name="with-value" value="Textarea value" />
);
export const withLabel = () => (
  <Textarea name="with-label" label="Textarea label" />
);
export const withLabelAndPlacenolder = () => (
  <Textarea
    name="with-label-and-placeholder"
    label="Textarea label and placeholder"
    placeholder="placeholder"
  />
);
export const invalidWithLabel = () => (
  <Textarea
    name="error-with-label"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
  />
);
export const invalidWithLabelAndErrorMessage = () => (
  <Textarea
    name="error-with-label-and-error-message"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
    errorMessage="Ohz noz! This isn't where I parked my car"
  />
);
