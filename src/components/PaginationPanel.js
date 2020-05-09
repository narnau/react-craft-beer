import React from "react";
import RoundedContainer from "./RoundedContainer";
import { connect } from "react-redux";
import { loadNewPage } from "../actions/actions";

const PaginationPanel = ({ currentPage, totalPages, loadNewPage }) => {
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handleClick = (event, newPageNumber) => {
    loadNewPage(newPageNumber);
  };

  const isCurrentPage = (number) => {
    return number === currentPage;
  };

  const handleArrowBackClick = () => {
    loadNewPage(currentPage - 1);
  };
  const handleArrowNextClick = () => {
    loadNewPage(currentPage + 1);
  };

  const isFirstPage = () => {
    return currentPage === 1;
  };

  const isLastPage = () => {
    return currentPage === totalPages;
  };

  return (
    <RoundedContainer
      backgroundColor="#DFDFDF"
      className="d-flex pagination-panel"
    >
      <div className="d-flex justify-content-start">
        <button
          className="paginationButton"
          onClick={() => handleArrowBackClick()}
          disabled={isFirstPage()}
        >
          <svg
            className="bi bi-caret-left-fill"
            width="4em"
            height="3em"
            viewBox="0 0 16 16"
            fill="#818181"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z" />
          </svg>
        </button>
      </div>
      <div className="d-flex justify-content-center w-100">
        {pageNumbers.map((number) => {
          return (
            <button
              key={number}
              id={number}
              onClick={(e) => handleClick(e, number)}
              className={
                isCurrentPage(number) ? "current-page circle m-1" : "circle m-1"
              }
            >
              {number}
            </button>
          );
        })}
      </div>
      <div className="d-flex justify-content-end">
        <button
          className="paginationButton"
          disabled={isLastPage()}
          onClick={() => handleArrowNextClick()}
        >
          <svg
            className="bi bi-caret-right-fill"
            width="4em"
            height="3em"
            viewBox="0 0 16 16"
            fill="#818181"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z" />
          </svg>
        </button>
      </div>
    </RoundedContainer>
  );
};

function mapStateToProps(appState) {
  return {
    currentPage: appState.beers.currentPage,
    totalPages: appState.beers.totalPages,
  };
}

export default connect(mapStateToProps, {
  loadNewPage,
})(PaginationPanel);
