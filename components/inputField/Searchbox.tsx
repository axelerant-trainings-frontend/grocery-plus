import React from 'react';
import searchboxType from '../../@types/searchbox';

function Searchbox({ icon, label, placeholder, variant }: searchboxType) {
  if (variant == 'active') {
    return (
      <>
        <div className="flex items-center">
          <span className="text-md text-red-primary absolute ml-[64px] mb-5">
            {label}
          </span>
          <img
            className="h-5 w-5 absolute ml-5 active"
            src={icon}
            alt="searchbox"
          />
          <input
            className="h-[52px] w-4xl pl-16 pt-2 text-sm rounded-t-xs bg-gray-light border-red-primary border-b-0.5"
            type="search"
            placeholder={placeholder}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex items-center">
          <img
            className="h-5 w-5 absolute ml-5 inactive"
            src={icon}
            alt="searchbox"
          />
          <input
            className="h-[52px] w-4xl pl-16 text-sm rounded-xs bg-gray-light"
            type="search"
            placeholder={placeholder}
          />
        </div>
      </>
    );
  }
}
export default Searchbox;
