import React from "react";

function Colors({ colors }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-around ">
        <span>Class Name</span>
        <span>Color</span>
      </div>
      {colors?.map((color) => {
        return (
          <div className="flex justify-around px-20 ">
            <span>{color.className}</span>
            <div className={"w-48 h-12 text-center justify-items-center bg-" + color.className}>
              {" "}
              {color.value}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Colors;
