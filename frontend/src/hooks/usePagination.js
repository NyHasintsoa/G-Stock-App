import { useCallback, useEffect, useState, useTransition } from "react";
import { wait } from "../utils/api.js";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const fetchDataPaginated = useCallback(() => {
    startTransition(async () => {
      try {
        await wait();
        const { data } = await apiFetch(page, itemsPerPage);
        setRows(data.rows);
        if (totalPages === 0) setTotalPages(data.page.totalPages);
      } catch (error) {
        navigate("/error/not-found");
      }
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
