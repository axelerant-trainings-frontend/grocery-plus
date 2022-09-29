import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Heading from "./Heading"

export default {
  title: "GROCERY/Heading",
  component: Heading,
  args: {
    title: "Heading",
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: "small",
}
export const Heading2 = Template.bind({})
Heading2.args = {
  variant: "small-bold",
}
