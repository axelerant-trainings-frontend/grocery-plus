import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Text from "./Text"

export default {
  title: "GROCERY/Text",
  component: Text,
  args: {
    title: "Text",
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Text1 = Template.bind({})
Text1.args = {
  variant: "small",
}

export const Text2 = Template.bind({})
Text2.args = {
  variant: "small-bold",
}
