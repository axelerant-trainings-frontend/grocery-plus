import React from 'react';
import { ButtonType } from '../../@types/button.types';
import Icon from '../Icon/Icon';

const Button = ({
  variant,
  text,
  iconPosition,
  extraClasses,
  icon,
  textClasses,
  onClick,
}: ButtonType) => {
  let textColor = '';
  const defaultClasses =
    'flex items-center px-15 py-16 rounded-xs cursor-pointer';
  let classes = defaultClasses;

  if (variant === 'primary') {
    classes += ' bg-green-primary';
    textColor = 'text-white';
  } else if (variant === 'primary-dark') {
    classes += ' bg-green-secondary';
    textColor = 'text-white';
  } else if (variant === 'secondary') {
    classes += ` bg-red-primary`;
    textColor = 'text-white';
  } else if (variant === 'tertiary') {
    classes += ` bg-light-off`;
    textColor = 'text-green-primary';
  }
  if (variant === 'primary-small') {
    classes += ` bg-green-primary`;
    textColor = 'text-white';
  } else if (variant === 'secondary-small') {
    classes += ` bg-red-primary`;
    textColor = 'text-white';
  } else if (variant === 'tertiary-small') {
    classes += ` bg-light-off`;
    textColor = 'text-green-primary';
  }
  return (
    <button className={classes + ' ' + extraClasses} onClick={onClick}>
      {iconPosition == 'left' && (
        <Icon icon={icon!} variant="white" height="20" width="20" />
      )}
      <span className={textColor + ' mx-auto ' + textClasses}>{text}</span>
      {iconPosition == 'right' && (
        <Icon icon={icon!} variant="white" height="20" width="20" />
      )}
    </button>
  );
};

export default Button;
