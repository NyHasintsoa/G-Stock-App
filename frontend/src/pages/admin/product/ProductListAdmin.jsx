import { FaPlusCircle, FaSearch } from "react-icons/fa";
import usePagination from "../../../hooks/usePagination.js";
import productService from "../../../services/ProductService.js";
import ProductListItems from "./ProductListItems.jsx";
import Pagination from "../../../components/pagination/Pagination.jsx";
import Spinner from "../../../components/spinner/Spinner.jsx";
import { Link } from "react-router";
import ShowProductModal from "../../../components/product/ShowProductModal.jsx";

function ProductListAdmin() {
  const {
    rows: products,
    page,
    totalPages,
    loading,
    onPageChange
  } = usePagination(productService.getAllPaginated.bind(productService), 10);

  return (
    <>
      <div className="border-[1px] rounded-xl p-5 border-gray-700">
        <div className="px-5 pb-3">
          <h1>Liste des produits</h1>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <input
                type="text"
                placeholder="Recherche"
                className="input focus:border-blue-500 focus:ring-blue-500"
              />
              <button type="button" className="btn bg-blue-400 text-white">
                <FaSearch />
              </button>
            </div>
            <Link
              to={"/admin/catalogs/products/new"}
              className="btn btn-primary"
            >
              <FaPlusCircle className="me-3" size={18} />
              Nouveau Produit
            </Link>
          </div>
        </div>
        <div className="flex w-full overflow-x-auto">
          <table className="table-hover table-compact table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix (Ar)</th>
                <th>Fournisseur</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {!loading ? (
                <ProductListItems products={products} />
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
      <ShowProductModal />
    </>
  );
}

export default ProductListAdmin;
