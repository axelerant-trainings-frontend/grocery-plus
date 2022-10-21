import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './Layout';
export default {
  title: 'GROCERY/Layout',
  component: Layout,
  args: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  hasNavbar: false,
  pageTitle: 'Hello',
  link: '/',
};
