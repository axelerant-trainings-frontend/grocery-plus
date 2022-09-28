import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Colors from "./Colors";

export default {
  title: " Colors",
  component: Colors,

} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

export const green_primary = Template.bind({});
export const green_secondary = Template.bind({});
export const red_primary = Template.bind({});
export const red_secondary = Template.bind({});
export const orange_light = Template.bind({})
export const gray_light = Template.bind({})
export const gray_darkish = Template.bind({})
export const light_regular = Template.bind({})
export const light_off = Template.bind({})
export const silver_light = Template.bind({})
export const flashWhite = Template.bind({})
export const charcoal = Template.bind({})
export const blackOlive = Template.bind({})

green_primary.args = {
  class: "bg-green-primary w-20 h-12",
  children: ""
};

green_secondary.args = {
  class: "bg-green-secondary w-20 h-12",
  children: ""
};

red_primary.args = {
  class: "bg-red-primary w-20 h-12",
  children: ""
};

red_secondary.args = {
  class: "bg-red-secondary w-20 h-12",
  children: ""
};

orange_light.args = {
  class: "bg-orange-light w-20 h-12",
  children: ""
};

gray_light.args = {
  class: "bg-gray-light w-20 h-12",
  children: ""
};

gray_darkish.args = {
  class: "bg-gray-darkish w-20 h-12",
  children: ""
};

light_regular.args = {
  class: "bg-light-regular w-20 h-12 border-solid border-2 border-black-500",
  children: ""
};

light_off.args = {
  class: "bg-light-off w-20 h-12",
  children: ""
};

silver_light.args = {
  class: "bg-silver-light w-20 h-12",
  children: ""
};

flashWhite.args = {
  class: "bg-flashWhite w-20 h-12",
  children: ""
};

charcoal.args = {
  class: "bg-charcoal w-20 h-12",
  children: ""
};

blackOlive.args = {
  class: "bg-blackOlive w-20 h-12",
  children: ""
};





