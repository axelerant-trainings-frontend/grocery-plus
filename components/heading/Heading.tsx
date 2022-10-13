import React from 'react';
import HeadingModel from '../../@types/heading.types';

function Heading({ title, variant, extraClasses, size }: HeadingModel) {
  let classes = '';
  const Tag = `h${size}` as keyof JSX.IntrinsicElements;
  if (variant == 'small') {
    classes = 'font-normal text-3xl leading-2xl';
  }
  if (variant == 'medium') {
    classes = 'font-normal text-4xl leading-3xl';
  }
  if (variant == 'large') {
    classes = 'font-normal text-5xl leading-4xl';
  }
  if (variant == 'small-bold') {
    classes = 'font-bold text-3xl leading-2xl';
  }
  if (variant == 'medium-bold') {
    classes = 'font-bold text-4xl leading-3xl';
  }
  if (variant == 'large-bold') {
    classes = 'font-bold text-5xl leading-4xl';
  }
  return (
    <Tag data-testid="heading" className={classes + ' ' + extraClasses}>
      {title}
    </Tag>
  );
}
export default Heading;
