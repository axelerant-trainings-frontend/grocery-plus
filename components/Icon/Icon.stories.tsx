import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';
import { MenuIcon } from '../iconLibrary';

export default {
  title: 'Icon',
  Component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const CharcolIcon = Template.bind({});
CharcolIcon.args = {
  icon: MenuIcon,
  height: '50',
  width: '50',
  viewBoxWidth: '20',
  viewBoxHeight: '14',
  variant: 'charcoal',
};

export const WhiteIcon = Template.bind({});
WhiteIcon.args = {
  icon: MenuIcon,
  height: '50',
  width: '50',
  viewBoxWidth: '20',
  viewBoxHeight: '14',
  variant: 'white',
};

export const OrangeLightIcon = Template.bind({});
OrangeLightIcon.args = {
  icon: MenuIcon,
  height: '50',
  width: '50',
  viewBoxWidth: '20',
  viewBoxHeight: '14',
  variant: 'orange-light',
};

export const GreenSecondaryIcon = Template.bind({});
GreenSecondaryIcon.args = {
  icon: MenuIcon,
  height: '50',
  width: '50',
  viewBoxWidth: '20',
  viewBoxHeight: '14',
  variant: 'green-secondary',
};

export const RedPrimaryIcon = Template.bind({});
RedPrimaryIcon.args = {
  icon: MenuIcon,
  height: '50',
  width: '50',
  viewBoxWidth: '20',
  viewBoxHeight: '14',
  variant: 'red-primary',
};

export const BluePrimaryIcon = Template.bind({});
BluePrimaryIcon.args = {
  icon: MenuIcon,
  height: '50',
  width: '50',
  viewBoxWidth: '20',
  viewBoxHeight: '14',
  variant: 'blue-primary',
};
