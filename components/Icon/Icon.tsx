import React from 'react';
import iconType from '../../@types/Icon.types';

const Icon: React.FC<iconType> = ({ icon, width, height, className = '' }) => {
  return (
    <div className={`icon w-fit h-auto ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon} fill="currentcolor" />
      </svg>
    </div>
  );
};

export default Icon;
