const divideStringInWords = (str) => {
  return str.split(" ");
};

export const getNumberOfWords = (str) => {
  return divideStringInWords(str).length;
};

export const truncateString = (description, numberOfWords) => {
  let splitString = divideStringInWords(description);
  return splitString.splice(0, numberOfWords).join(" ");
};
