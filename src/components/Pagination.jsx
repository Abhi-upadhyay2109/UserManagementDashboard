import React from "react";

const Pagination = ({ page, setPage, limit, setLimit }) => {
  return (
    <div className="flex justify-center items-center mt-6 gap-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="bg-blue-500 text-white px-3 py-1 rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Next
      </button>
      <select
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        className="border rounded px-2 py-1"
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
};

export default Pagination;