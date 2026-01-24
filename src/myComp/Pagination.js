import React from "react";
import "../styles/Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const maxPageButtons = 5; // Number of page buttons to display at once
    const halfRange = Math.floor(maxPageButtons / 2);

    const getPageRange = () => {
        let start = Math.max(1, currentPage - halfRange);
        let end = Math.min(totalPages, currentPage + halfRange);

        // Adjust range if near the beginning or end
        if (currentPage <= halfRange) {
            end = Math.min(totalPages, maxPageButtons);
        } else if (currentPage > totalPages - halfRange) {
            start = Math.max(1, totalPages - maxPageButtons + 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            {/* Prev Button */}
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="prev-btn"
            >
                {"<<"}
            </button>

            {/* Page Numbers */}
            {getPageRange().map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? "active" : ""}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="next-btn"
            >
                {">>"}
            </button>
        </div>
    );
};

export default Pagination;
