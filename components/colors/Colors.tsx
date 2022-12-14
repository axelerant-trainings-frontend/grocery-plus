import React from 'react';

interface ColorProps {
  colors: { [key: string]: string };
}

const Colors: React.FC<ColorProps> = ({ colors }) => {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-around"></div>
      {Object.entries(colors).map(([colorName, colorValue]) => {
        return (
          <div className="flex justify-around px-40">
            <span className="font-bold ">{colorName}</span>
            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: colorValue }}
                className={
                  'h-12 w-48 justify-items-center rounded-lg py-3 text-center'
                }
              ></div>
              <span>{colorValue}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Colors;
