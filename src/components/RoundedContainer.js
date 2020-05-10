import React from "react";

const RoundedContainer = (props) => {
  let style = {
    backgroundColor: props.backgroundColor,
  };
  let className = "rounded-pill " + props.className;
  return (
    <div className={className} style={style}>
      <>{props.children}</>
    </div>
  );
};

export default RoundedContainer;
