import React from "react";
import Dropdown from "./Dropdown";

const DateSelector = ({
  monthsDataSource,
  yearsDataSource,
  currentDate,
  onChange,
}) => {
  let month = currentDate ? currentDate.getMonth() + 1 : "";
  let year = currentDate ? currentDate.getFullYear() : "";

  const monthChanged = (e) => {
    onChange(createDate(currentDate.getFullYear(), e.target.value - 1));
  };

  const yearChanged = (e) => {
    onChange(createDate(e.target.value, currentDate.getMonth()));
  };

  const createDate = (year, month) => {
    return new Date(year, month);
  };

  return (
    <>
      <Dropdown
        dataSource={monthsDataSource}
        value={month}
        onChange={(e) => monthChanged(e)}
      ></Dropdown>
      <Dropdown
        dataSource={yearsDataSource}
        value={year}
        onChange={(e) => yearChanged(e)}
      ></Dropdown>
    </>
  );
};

export default DateSelector;
