import { useCallback, useEffect, useState, useTransition } from "react";
import { wait } from "../utils/api.js";

/**
 * Create Pagination Hook
 * @param {CallableFunction} apiFetch
 * @param {Number} itemsPerPage
 * @return {{
 *  rows: [],
 *  page: number,
 *  totalPages: number,
 *  loading: boolean,
 *  onPageChange: CallableFunction
 * }}
 */
const usePagination = (apiFetch, itemsPerPage = 10) => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, startTransition] = useTransition();

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const fetchDataPaginated = useCallback(() => {
    startTransition(async () => {
      await wait();
      const { data } = await apiFetch(page, 8);
      setRows(data.rows);
      if (totalPages === 0) setTotalPages(data.page.totalPages);
    });
  }, [page, itemsPerPage]);

  useEffect(() => {
    fetchDataPaginated();
  }, [page, itemsPerPage]);

  return {
    rows,
    page,
    totalPages,
    loading,
    onPageChange
  };
};

export default usePagination;
