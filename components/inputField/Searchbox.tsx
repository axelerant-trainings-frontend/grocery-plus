import React from 'react';
import SearchboxModel from '../../@types/searchbox.types';
import { SearchIcon } from '../iconLibrary';
import Icon from '../Icon/Icon';
function Searchbox({ label, placeholder, variant }: SearchboxModel) {
  const classes = 'text-2xl w-343 h-52 rounded-xs bg-gray-light pl-60';
  return (
    <>
      {variant == 'active' ? (
        <label className="text-md text-red-primary pl-60 absolute mt-7 leading-xs">
          {label}
        </label>
      ) : (
        ''
      )}
      <div
        data-testid="searchbox"
        className={
          variant == 'active'
            ? 'flex items-center active'
            : 'flex items-center inactive'
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
                'pt-18 border-red-primary border-b-2 active'
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
