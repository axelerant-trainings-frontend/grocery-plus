import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Location from './Location';

export default {
  title: 'Grocery/Location',
  Component: Location,
} as ComponentMeta<typeof Location>;

const Template: ComponentStory<typeof Location> = (args) => (
  <Location {...args} />
);

export const AddressPrimary = Template.bind({});
AddressPrimary.args = {
  variant: 'primary',
  address: '32 Llanberis Close, Tonteg, CF38 1HR',
  labelText: 'Your location',
};
export const AddressSecondary = Template.bind({});
AddressSecondary.args = {
  variant: 'secondary',
  address: 'Floor 4, Wakil Tower,Ta 131 Gulshan Badda Link Road',
};
export const PaymentMethod = Template.bind({});
PaymentMethod.args = {
  variant: 'tertiary',
  address: 'Tap Here to select your Payment Method',
};
