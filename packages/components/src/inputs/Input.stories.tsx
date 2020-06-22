import React from "react";

import { Input } from "./Input";

export default {
  component: Input,
  title: "Inputs|Input",
};

export const base = () => <Input name="default" />;
export const text = () => <Input name="text" type="text" />;
export const number = () => <Input name="number" type="number" />;
export const email = () => <Input name="email" type="email" />;
export const search = () => <Input name="search" type="search" />;
export const password = () => <Input name="password" type="password" />;
export const WithPlaceholder = () => (
  <Input name="with-placeholder" placeholder="Text placeholder" />
);
export const WithValue = () => <Input name="with-value" value="Text value" />;
export const WithLabel = () => <Input name="with-label" label="Text label" />;
export const WithLabelAndPlacenolder = () => (
  <Input
    name="with-label-and-placeholder"
    label="Text label and placeholder"
    placeholder="placeholder"
  />
);
export const InvalidWithLabel = () => (
  <Input
    name="error-with-label"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
  />
);
export const InvalidWithLabelAndErrorMessage = () => (
  <Input
    name="error-with-label-and-error-message"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
    errorMessage="Ohz noz! This isn't where I parked my car"
  />
);
