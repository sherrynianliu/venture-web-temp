'use client';

import ReactPaginate from 'react-paginate';

// prop type
type IProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};

const Pagination = ({ handlePageClick, pageCount }: IProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      activeClassName="current"
      nextLabel={<i className="fa-light fa-angle-right"></i>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<i className="fa-light fa-angle-left"></i>}
      renderOnZeroPageCount={null}
    />
  );
};
export default Pagination;
