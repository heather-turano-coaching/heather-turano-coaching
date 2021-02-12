import { Typography, TypographyProps } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React, { FC } from "react";

export default {
  title: "Material (Atoms) / Typography",
  component: Typography,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>
    Donec ullamcorper nulla non metus auctor fringilla.
  </Typography>
);

export const All: FC = () => {
  return (
    <>
      <Typography variant="h1">
        h1 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="h2">
        h2 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="h3">
        h3 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="h4">
        h4 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="h5">
        h5 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="subtitle1">
        subtitle 1 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="subtitle2">
        subtitle 2 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="body1">
        body 1 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="body2">
        body 2 - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Typography variant="button">
        button - Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <div>
        <Typography variant="overline">
          overline - Donec ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </div>
    </>
  );
};

export const h1 = Template.bind({});
h1.args = {
  variant: "h1"
};

export const h2 = Template.bind({});
h2.args = {
  variant: "h2"
};
