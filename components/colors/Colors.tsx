import React from "react";

function Colors({ colors }) {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-around "></div>
      {colors?.map((color) => {
        return (
          <div className="flex justify-around px-40">
            <span className="font-bold ">{color.className}</span>
            <div className="flex flex-col items-center">
              <div
                className={
                  "w-48 py-3 h-12 text-center rounded-lg justify-items-center bg-" +
                  color.className
                }
              ></div>
              <span>{color.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Colors;
