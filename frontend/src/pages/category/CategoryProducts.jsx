import { Link, useNavigate, useParams } from "react-router";
import { useCallback, useEffect, useState, useTransition } from "react";
import { wait } from "../../utils/api.js";
import categoryService from "../../services/CategoryService.js";
import Spinner from "../../components/spinner/Spinner.jsx";
import ProductItems from "../../components/productItems/ProductItems.jsx";

function CategoryProducts() {
  const [item, setItem] = useState({});
  const { idcategory } = useParams();
  const [loading, startTransition] = useTransition();
  const navigate = useNavigate();

  const getAllProductsToByCategoryId = useCallback(() => {
    startTransition(async () => {
      try {
        await wait();
        const { data } = await categoryService.getProductByCategoryId(
          idcategory
        );
        setItem(data);
      } catch (error) {
        navigate("/error/not-found");
      }
    });
  }, []);

  useEffect(() => {
    getAllProductsToByCategoryId();
  }, []);

  return (
    <>
      <div className="breadcrumbs text-lg">
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/category"}>Catégorie</Link>
          </li>
          <li>{item.name}</li>
        </ul>
      </div>
      <div className="my-5">
        <h1 className="font-semibold text-xl">
          Liste des produits pour une catégorie spécifique
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-gray-500">
          Il y a {item.products !== undefined ? item.products.length : "0"}
          &nbsp;produit(s)
        </div>
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

      {!loading && item.products !== undefined ? (
        <>
          {item.products.length !== 0 ? (
            <div className="grid grid-cols-4 gap-4 my-10">
              <ProductItems products={item.products} />
            </div>
          ) : (
            <div className="my-20">
              <h1 className="text-center font-semibold text-2xl">
                Cette catégorie n'est associée à aucun produit
              </h1>
            </div>
          )}
        </>
      ) : (
        <Spinner />
      )}

      <div className="flex justify-center items-center">
        <div>
          <div className="pagination">
            <button className="btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4167C11.4074 14.7417 11.9324 14.7417 12.2574 14.4167C12.5824 14.0917 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z"
                  fill="#969696"
                />
              </svg>
            </button>
            <button className="btn btn-active">1</button>
            <button className="btn">2</button>
            <button disabled className="btn">
              ...
            </button>
            <button className="btn">3</button>
            <button className="btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.74375 5.2448C7.41875 5.5698 7.41875 6.0948 7.74375 6.4198L10.9771 9.65314L7.74375 12.8865C7.41875 13.2115 7.41875 13.7365 7.74375 14.0615C8.06875 14.3865 8.59375 14.3865 8.91875 14.0615L12.7437 10.2365C13.0687 9.91147 13.0687 9.38647 12.7437 9.06147L8.91875 5.23647C8.60208 4.9198 8.06875 4.9198 7.74375 5.2448Z"
                  fill="#969696"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryProducts;
