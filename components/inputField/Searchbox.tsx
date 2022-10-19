import React from 'react';
import SearchboxModel from '../../@types/searchbox.types';
import { SearchIcon } from '../iconLibrary';
import Icon from '../Icon/Icon';
function Searchbox({ label, placeholder, variant }: SearchboxModel) {
  const classes = 'text-2xl w-343 h-52 rounded-xs bg-gray-light pl-60';
  return (
    <>
      {variant == 'active' ? (
        <label className="absolute mt-7 pl-60 text-md leading-xs text-red-primary">
          {label}
        </label>
      ) : (
        ''
      )}
      <div
        data-testid="searchbox"
        className={
          variant == 'active'
            ? 'active flex items-center'
            : 'inactive flex items-center'
        }
      >
        <Icon
          icon={SearchIcon}
          variant="charcoal"
          height="20"
          width="20"
          extraClasses="ml-20 absolute"
        />
        <input
          className={
            variant == 'active'
              ? `${classes}` +
                ' ' +
                'active border-b-2 border-red-primary pt-18'
              : `${classes}` + ' ' + 'inactive'
          }
          type="search"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
export default Searchbox;
