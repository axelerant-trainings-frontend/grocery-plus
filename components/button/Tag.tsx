import React from "react";
import tagType from "../../@types/tag.type";

function Tag({ start, end, variant }: tagType) {
  const extraClasses =
    "bg-gray-light h-[52px] w-[103px] m-1 rounded-sm p-2 cursor-pointer";

  if (variant == "active") {
    return (
      <button
        className={
          "text-red-primary text-md leading-xs border-red-primary border-2" +
          " " +
          extraClasses
        }
      >
        {start} - {end}
      </button>
    );
  } else if (variant == "inactive") {
    return (
      <button className={"text-charcoal text-md" + " " + extraClasses}>
        {start} - {end}
      </button>
    );
  }
}

export default Tag;
