import React from 'react';
import { ButtonType } from '../../@types/button.types';

const Button = ({
  variant,
  text,
  iconLeft,
  iconRight,
  iconName,
  extraClasses,
  textClasses,
  onClick,
}: ButtonType) => {
  let classes = '';
  let textColor = '';

  const defaultClasses =
    'flex items-center w-full px-4 py-3 rounded-xs cursor-pointer';
  if (variant === 'primary') {
    classes = `${defaultClasses} bg-green-primary h-12`;
    textColor = 'text-white';
  } else if (variant === 'secondary') {
    classes = `${defaultClasses} bg-red-primary h-12`;
    textColor = 'text-white';
  } else if (variant === 'tertiary') {
    classes = `${defaultClasses} bg-light-off h-12`;
    textColor = 'text-green-primary';
  }
  if (variant === 'primary-small') {
    classes = `${defaultClasses} bg-green-primary h-9`;
    textColor = 'text-white';
  } else if (variant === 'secondary-small') {
    classes = `${defaultClasses} bg-red-primary h-9`;
    textColor = 'text-white';
  } else if (variant === 'tertiary-small') {
    classes = `${defaultClasses} bg-light-off h-9`;
    textColor = 'text-green-primary';
  }
  return (
    <button
      className={classes + ' ' + extraClasses}
      onClick={() => (onClick != null ? onClick : null)}
    >
      {iconLeft && <img className="w-7" src={iconName} />}
      <span className={textColor + ' mx-auto ' + textClasses}>{text}</span>
      {iconRight && <img className="w-7" src={iconName} />}
    </button>
  );
};

export default Button;
