import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField from "./InputField";

export default {
  title: "GROCERY/InputField",
  component: InputField,
  args: {
    variant: "number",
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const InputFieldName = Template.bind({});
InputFieldName.args = {
  variant: "text",
  label: "Name",
  placeholder: "Search Anything",
  icon: "left",
};
export const InputFieldPassword = Template.bind({});
InputFieldPassword.args = {
  variant: "password",
  label: "Password",
  placeholder: "Enter your password",
  icon: "both",
};
export const InputFieldPhone = Template.bind({});
InputFieldPhone.args = {
  variant: "number",
  label: "Phone",
  placeholder: "Enter Mobile number",
  icon: "left",
};
export const InputFieldDate = Template.bind({});
InputFieldDate.args = {
  variant: "date",
};
