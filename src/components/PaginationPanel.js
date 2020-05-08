import React from "react";

const PaginationPanel = ({
  currentPage,
  totalBeers,
  countPerPage,
  totalPages,
  onClick,
}) => {
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handleClick = (event, newPageNumber) => {
    console.log("handleClick", newPageNumber);
    onClick(newPageNumber);
  };

  const isCurrentPage = (number) => {
    return number === currentPage;
  };

  return (
    <>
      {pageNumbers.map((number) => {
        return (
          <div
            key={number}
            id={number}
            onClick={(e) => handleClick(e, number)}
            className={isCurrentPage(number) ? "current-page" : ""}
          >
            {number}
          </div>
        );
      })}
    </>
  );
};

export default PaginationPanel;
