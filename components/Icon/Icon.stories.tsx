import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';
import { HomeIcon } from '../iconLibrary';

export default {
  title: 'Icon',
  Component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const CharcolIcon = Template.bind({});
CharcolIcon.args = {
  icon: HomeIcon,
  width: '50',
  height: '50',
  className: 'text-charcoal',
};

export const WhiteIcon = Template.bind({});
WhiteIcon.args = {
  icon: HomeIcon,
  width: '50',
  height: '50',
  className: 'text-white',
};
