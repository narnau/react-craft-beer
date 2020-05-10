import React from "react";

const Dropdown = ({ dataSource, onChange, value }) => {
  return (
    <select value={value} onChange={(e) => onChange(e)}>
      {dataSource.map((source, idx) => {
        return (
          <option key={idx} value={source}>
            {source}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
