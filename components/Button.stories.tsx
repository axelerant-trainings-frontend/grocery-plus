import React from 'react'
import Button from './button/Button'

export default {
  title: 'Button',
  Component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
}
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
}
