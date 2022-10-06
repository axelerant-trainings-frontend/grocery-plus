import React from 'react';
import textType from '../../@types/text.types';

function Text({ title, variant, extraClasses }: textType) {
  let classes = '';
  if (variant == 'small') {
    classes = 'font-normal text-md leading-xs small';
  }
  if (variant == 'medium') {
    classes = 'font-normal text-lg leading-sm medium';
  }
  if (variant == 'large') {
    classes = 'font-normal text-xl leading-lg large';
  }
  if (variant == 'xlarge') {
    classes = 'font-normal text-2xl leading-xl xlarge';
  }
  if (variant == 'small-bold') {
    classes = 'font-bold text-md leading-xs small-bold';
  }
  if (variant == 'medium-bold') {
    classes = 'font-bold text-lg leading-sm medium-bold';
  }
  if (variant == 'large-bold') {
    classes = 'font-bold text-xl leading-lg large-bold';
  }
  if (variant == 'xlarge-bold') {
    classes = 'font-bold text-2xl leading-xl xlarge-bold';
  }
  return <h2 className={classes + ' ' + extraClasses}>{title}</h2>;
}

export default Text;
