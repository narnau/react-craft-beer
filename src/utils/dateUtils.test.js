import * as dateUtils from "./dateUtils";

test("get the highest date", () => {
  let dates = [
    new Date("2020", "02"),
    new Date("2020", "01"),
    new Date("1850", "11"),
  ];
  expect(dateUtils.getMaxDate(dates)).toBe(dates[0]);
});

test("get the lowest date", () => {
  let dates = [
    new Date("2020", "02"),
    new Date("2020", "01"),
    new Date("1850", "11"),
  ];
  expect(dateUtils.getMinDate(dates)).toBe(dates[2]);
});
