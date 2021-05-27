import React from "react";

function Pagination({ postPerPage, totalPosts, currentPage }) {
  const pageNumbers = [];
  const paginationLength = Math.ceil(totalPosts / postPerPage);

  for (let i = 1; i <= paginationLength; i++) pageNumbers.push(i);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => currentPage(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
