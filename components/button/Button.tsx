import React from 'react';
import { ButtonType } from '../../@types/button.types';
import Icon from '../Icon/Icon';

const Button = ({
  variant,
  text,
  iconLeft,
  iconRight,
  extraClasses,
  textClasses,
  onClick,
}: ButtonType) => {
  let textColor = '';
  const defaultClasses =
    'flex items-center w-full px-15 py-16 rounded-xs cursor-pointer';
  let classes = defaultClasses;

  if (variant === 'primary') {
    classes += ' bg-green-primary h-12';
    textColor = 'text-white';
  } else if (variant === 'secondary') {
    classes += ` bg-red-primary h-12`;
    textColor = 'text-white';
  } else if (variant === 'tertiary') {
    classes += ` bg-light-off h-12`;
    textColor = 'text-green-primary';
  }
  if (variant === 'primary-small') {
    classes += ` bg-green-primary h-9`;
    textColor = 'text-white';
  } else if (variant === 'secondary-small') {
    classes += ` bg-red-primary h-9`;
    textColor = 'text-white';
  } else if (variant === 'tertiary-small') {
    classes += ` bg-light-off h-9`;
    textColor = 'text-green-primary';
  }
  return (
    <button className={classes + ' ' + extraClasses} onClick={onClick}>
      {iconLeft && (
        <Icon icon={iconLeft} variant="white" height="20" width="20" />
      )}
      <span className={textColor + ' mx-auto ' + textClasses}>{text}</span>
      {iconRight && (
        <Icon icon={iconRight} variant="white" height="20" width="20" />
      )}
    </button>
  );
};

export default Button;
