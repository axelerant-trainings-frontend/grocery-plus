import React from "react";
import searchboxType from "../../@types/Searchbox";

function Searchbox({ icon, label, placeholder, variant }: searchboxType) {
  if (variant == "active") {
    return (
      <>
        <span className="text-md text-red-primary absolute left-[86px] mt-0.5">
          {label}
        </span>
        <div className="flex items-center">
          <img
            className="h-5 w-5 absolute left-10"
            src={icon}
            alt="searchbox"
          />
          <input
            className="h-[52px] w-5xl pl-16 pt-2 text-sm rounded-t-xs bg-gray-light border-red-primary border-b-0.5"
            type="search"
            placeholder={placeholder}
          />
        </div>
      </>
    );
  } else if (variant == "inactive") {
    return (
      <>
        <div className="flex items-center">
          <img
            className="h-5 w-5 absolute left-10"
            src={icon}
            alt="searchbox"
          />
          <input
            className="h-[52px] w-5xl pl-16 text-sm rounded-xs bg-gray-light"
            type="search"
            placeholder={placeholder}
          />
        </div>
      </>
    );
  }
}
export default Searchbox;
