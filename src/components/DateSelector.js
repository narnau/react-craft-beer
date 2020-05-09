import React from "react";
import Dropdown from "./Dropdown";
import RoundedContainer from "./RoundedContainer";

const DateSelector = ({
  monthsDataSource,
  yearsDataSource,
  currentDate,
  onChange,
  backgroundColor,
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
    <div className="row">
      <RoundedContainer
        backgroundColor={backgroundColor}
        className="col-6 py-1"
      >
        <Dropdown
          dataSource={monthsDataSource}
          value={month}
          onChange={(e) => monthChanged(e)}
        ></Dropdown>
      </RoundedContainer>
      <RoundedContainer
        backgroundColor={backgroundColor}
        className="col-6 py-1"
      >
        <Dropdown
          dataSource={yearsDataSource}
          value={year}
          onChange={(e) => yearChanged(e)}
        ></Dropdown>
      </RoundedContainer>
    </div>
  );
};

export default DateSelector;
