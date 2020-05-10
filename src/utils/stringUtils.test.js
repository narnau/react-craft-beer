import * as stringUtils from "./stringUtils";

test("count words of a string", () => {
  expect(stringUtils.getNumberOfWords("hello, how are you?")).toBe(4);
});

test("truncate a string", () => {
  expect(stringUtils.truncateString("hello, how are you?", 3)).toBe(
    "hello, how are"
  );
});
