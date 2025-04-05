import { FaSearch } from "react-icons/fa";
import usePagination from "../../../hooks/usePagination.js";
import SupplierListItems from "./SupplierListItems.jsx";
import Pagination from "../../../components/pagination/Pagination.jsx";
import Spinner from "../../../components/spinner/Spinner.jsx";
import supplierService from "../../../services/SupplierService.js";

function SupplierListAdmin() {
  const {
    rows: suppliers,
    page,
    totalPages,
    loading,
    onPageChange
  } = usePagination(supplierService.getAllPaginated.bind(supplierService), 10);

  return (
    <>
      <div className="border-[1px] rounded-xl p-5 border-gray-700">
        <div className="px-5 pb-3 flex justify-between items-center">
          <h1>Liste des fournisseurs</h1>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Recherche"
              className="input focus:border-blue-500 focus:ring-blue-500"
            />
            <button type="button" className="btn">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex w-full overflow-x-auto">
          <table className="table-hover table-compact table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {!loading ? (
                <SupplierListItems suppliers={suppliers} />
              ) : (
                <tr>
                  <td colSpan={5}>
                    <Spinner />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="border-t-2 border-gray-600 flex justify-center items-center mt-5 pt-5">
          {totalPages !== 1 && (
            <div className="flex justify-center items-center">
              <div>
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SupplierListAdmin;
