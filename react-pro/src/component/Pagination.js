import React from "react";
import ReactPaginate from 'react-paginate'

const Pagination = ({ getPage, pageCount }) => {
    const handlePageClick = (data) => {
        getPage(data.selected + 1)
    }
    return (
        <div className="pagination" >
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                containerClassName={"pagination justify-content-center p-5"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}

            />
        </div>
    )
}

export default Pagination