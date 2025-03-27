import { Link, useNavigate } from "react-router";
import { useCallback, useEffect, useState, useTransition } from "react";
import { wait } from "../../utils/api.js";
import categoryService from "../../services/CategoryService.js";
import CategoryItems from "./CategoryItems.jsx";
import Spinner from "../../components/spinner/Spinner.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";

function ListCategory() {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, startTransition] = useTransition();
  const navigate = useNavigate();

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const getAllCategories = useCallback(() => {
    startTransition(async () => {
      try {
        await wait();
        const { data } = await categoryService.getAllPaginated(page, 8);
        setCategories(data.rows);
        if (totalPages === 0) setTotalPages(data.page.totalPages);
      } catch (error) {
        navigate("/error/not-found");
      }
    });
  }, [page]);

  useEffect(() => {
    getAllCategories();
  }, [page]);

  return (
    <>
      <div className="breadcrumbs text-lg">
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>Catégorie</li>
        </ul>
      </div>
      <div className="my-5">
        <h1 className="font-semibold text-xl">Liste des Catégorie</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-gray-500">Il y a 25 fournisseur</div>
        <div className="flex items-center gap-3">
          <span className="w-full text-gray-600">Trier par :</span>
          <select className="select min-w-72">
            <option value="">Select 1</option>
            <option value="">Select 2</option>
            <option value="">Select 3</option>
            <option value="">Select 4</option>
            <option value="">Select 5</option>
          </select>
        </div>
      </div>

      {!loading ? (
        <div className="grid grid-cols-4 gap-4 my-10">
          <CategoryItems categories={categories} />
        </div>
      ) : (
        <Spinner />
      )}

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
    </>
  );
}

export default ListCategory;
