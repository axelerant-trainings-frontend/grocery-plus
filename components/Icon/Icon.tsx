import React from 'react';
import iconType from '../../@types/Icon.types';

const Icon: React.FC<iconType> = ({ icon, width, height, className = '' }) => {
  return (
    <div
      className={`icon w-fit h-auto ${className}`}
      data-testid="svgIconWrapper"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="svgIcon"
      >
        <path d={icon} fill="currentcolor" data-testid="svgIconPath" />
      </svg>
    </div>
  );
};

export default Icon;
