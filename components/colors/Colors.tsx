import React from "react";

function Colors(props) {
  const { children, ...rest } = props;
  return (
    <div className={``} {...rest}>
      {children}
    </div>
  );
}

export default Colors;
