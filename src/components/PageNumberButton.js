import React from "react";

const PageNumberButton = ({ number, className, onClick }) => {
  return (
    <button
      key={number}
      id={number}
      onClick={(e) => onClick(e, number)}
      className={"circle m-1 " + className}
    >
      {number}
    </button>
  );
};

export default PageNumberButton;
