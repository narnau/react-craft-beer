import React from "react";

const RoundedContainer = (props) => {
  let style = {
    backgroundColor: props.backgroundColor,
  };
  let ownClasses = " rounded-pill";
  let classNames = props.className ? props.className + ownClasses : ownClasses;
  return (
    <div className={classNames} style={style}>
      <>{props.children}</>
    </div>
  );
};

export default RoundedContainer;
