import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from './Tag';

export default {
  title: 'GROCERY/Tag',
  component: Tag,
  args: {
    variant: 'active',
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'active',
  start: '10AM',
  end: '12PM',
};
