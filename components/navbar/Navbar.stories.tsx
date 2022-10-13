import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from './Navbar';
export default {
  title: 'GROCERY/Navbar',
  component: Navbar,
  args: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const primary = Template.bind({});
primary.args = {};
