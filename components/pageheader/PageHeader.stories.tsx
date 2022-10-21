import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageHeader from './PageHeader';
import { BackwardIcon } from '../iconLibrary';
export default {
  title: 'GROCERY/PageHeader',
  component: PageHeader,
  args: {},
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'heading',
  icon: BackwardIcon,
  textVariant: 'medium-bold',
  link: '/',
};
