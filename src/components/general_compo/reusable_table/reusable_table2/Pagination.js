import React from "react";
import { useEffect } from "react";

export const Pagination = ({
  pageCount,
  currentPage,
  setCurrentPage,
  listOfPages,
  data,
}) => {
  const pageRange = 2;


  return (
    <>
      <div className="d-flex justify-content-center ">
        {pageCount > 1 ? (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {/* ===================================================== */}
              <li className="page-item">
                <a
                  className={`page-link ${
                    currentPage == 1 ? "disabled_pagination" : ""
                  }`}
                  href="#"
                  aria-label="Previous"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {/* ===================================================== */}
              {currentPage > pageRange ? (
                <>
                  <li className="page-item me-2">
                    <span
                      className="page-link pointer"
                      onClick={() => setCurrentPage(1)}
                    >
                      1
                    </span>
                  </li>
                </>
              ) : null}

              {listOfPages.map((pageNum) => {
                return pageNum < currentPage + pageRange &&
                  pageNum > currentPage - pageRange ? (
                  <li className="page-item" key={Math.random()}>
                    <a
                      className={`page-link ${
                        currentPage == pageNum ? "bg_grey_50" : null
                      }`}
                      href="#"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </a>
                  </li>
                ) : null;
              })}
              {currentPage < pageCount - pageRange ? (
                <>
                  <li className="page-item ms-2">
                    <span
                      className="page-link pointer"
                      onClick={() => setCurrentPage(pageCount)}
                    >
                      {pageCount}
                    </span>
                  </li>
                </>
              ) : null}

              {/* ===================================================== */}
              <li className="page-item">
                <a
                  className={`page-link ${
                    currentPage == pageCount ? "disabled_pagination" : null
                  } `}
                  href="#"
                  aria-label="Next"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
              {/* ===👇 برای وقتی که تمام محصولات یک صفحه حذف شده === */}
              {data.length == 0 ? setCurrentPage(pageCount - 1) : null}
              {/* ====== 👆با این شماره صفحه اش هم حذف میشه ========= */}
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
};
