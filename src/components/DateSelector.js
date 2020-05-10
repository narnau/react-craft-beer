import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import RoundedContainer from "./RoundedContainer";
import { createDate } from "../utils/dateUtils";

const DateSelector = ({
  monthsDataSource,
  yearsDataSource,
  currentDate,
  onChange,
  backgroundColor,
}) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (currentDate !== null) {
      setMonth(currentDate.getMonth() + 1);
      setYear(currentDate.getFullYear());
    }
  }, [currentDate]);

  const monthChanged = (e) => {
    onChange(createDate(currentDate.getFullYear(), e.target.value - 1));
  };

  const yearChanged = (e) => {
    onChange(createDate(e.target.value, currentDate.getMonth()));
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
