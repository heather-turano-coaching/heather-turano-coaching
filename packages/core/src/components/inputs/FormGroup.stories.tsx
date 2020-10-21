import React from "react";

import { FormGroup } from "./FormGroup";
import { Input } from "./Input";

export default {
  component: FormGroup,
  title: "Inputs|Form Group"
};

export const base = () => (
  <FormGroup>
    <Input name="firstName" placeholder="First name" />
    <Input name="lastName" placeholder="Last name" />
    <Input name="address" placeholder="Address" />
  </FormGroup>
);
export const stacked = () => (
  <FormGroup layout="stacked">
    <Input name="firstName" placeholder="First name" />
    <Input name="lastName" placeholder="Last name" />
    <Input name="address" placeholder="Address" />
  </FormGroup>
);
export const inline = () => (
  <FormGroup layout="inline">
    <Input name="firstName" placeholder="First name" />
    <Input name="lastName" placeholder="Last name" />
    <Input name="address" placeholder="Address" />
  </FormGroup>
);
