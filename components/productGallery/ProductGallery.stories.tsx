import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductGallery from './ProductGallery';

const productImages = [
  'https://dummyimage.com/1000x400/070be6/fff.png',
  'https://dummyimage.com/900x900/bd09e6/fff.png',
  'https://dummyimage.com/600x600/070be6/fff.png',
  'https://dummyimage.com/1600x1400/ffaadd/fff.png',
  'https://dummyimage.com/500x1000/ff0000/fff.png',
];

export default {
  title: 'ProductGallery',
  Component: ProductGallery,
  argTypes: {},
} as ComponentMeta<typeof ProductGallery>;

const Template: ComponentStory<typeof ProductGallery> = (args) => (
  <ProductGallery {...args} />
);

export const GalleryWithThumbnails = Template.bind({});
GalleryWithThumbnails.args = {
  productImages: productImages,
};
