import React from "react";

import ReactPaginate from "react-paginate";

import "./pagination.styles.scss";

const Pagination = ({ initialPage, pageCount, onPageChange }) => (
  <ReactPaginate
    containerClassName='pagination'
    pageClassName='pageItem'
    activeClassName='active'
    pageLinkClassName='pageLink'
    previousLabel={<div>ᐸ</div>}
    nextLabel={<div>ᐳ</div>}
    pageCount={pageCount}
    onPageChange={onPageChange}
    initialPage={initialPage}
    disableInitialCallback
  />
);

export default Pagination;
