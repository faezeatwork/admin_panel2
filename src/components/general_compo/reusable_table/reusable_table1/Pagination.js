import React from "react";

export const Pagination = (props) => {
  const { countPage, currentPage, pageArr, setCurrentPage } = props;
  return (
    <div>
      {/*🏮🏮🏮 agar tedad safahat 1 bood 
      Pagination namayesh dade nashe 👇*/}

      {countPage > 1 ? (
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center"
        >
          <ul className="pagination dir_ltr">
            <li className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == 1 ? "disabled_pagination" : ""
                }`}
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
            {pageArr.map((i) => (
              <li className="page-item" key={Math.random()}>
                <span
                  className="page-link pointer
              "
                  onClick={() => setCurrentPage(i)}
                >
                  {i}
                </span>
              </li>
            ))}

            <li className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == countPage ? "disabled_pagination" : ""
                }`}
                aria-label="Next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};
