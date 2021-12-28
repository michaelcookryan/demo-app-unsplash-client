import React from "react";

import ReactPaginate from "react-paginate";

import "./pagination.styles.scss";

// interface Props {
//   initialPage: number;
//   pageCount: number;
//   onPageChange: (e: any) => void;
// }

// const Pagination = ({ initialPage, pageCount, onPageChange }: Props) => (
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
