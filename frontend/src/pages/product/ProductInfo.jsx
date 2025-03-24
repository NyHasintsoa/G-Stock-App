import { Link } from "react-router";
import { FaCartPlus } from "react-icons/fa6";
import productImg from "../../assets/product.jpg";

function ProductInfo() {
  return (
    <>
      <div class="breadcrumbs text-lg">
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/category"}>Catégorie</Link>
          </li>
          <li>
            <Link to={"/category/123/products"}>Nom du catégorie</Link>
          </li>
          <li>Nom du Produit</li>
        </ul>
      </div>
      <div className="px-20 my-5 flex justify-between w-full gap-16">
        <div className="w-full">
          <img src={productImg} alt="" />
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <h1 className="text-2xl font-bold">Nom du produit</h1>
          <p className="text-gray-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus
            temporibus quae illo doloribus reprehenderit non nemo repellendus
            optio nostrum.
          </p>

          <div className="text-lg font-bold text-blue-700">255 000 Ar</div>

          <div className="form-control">
            <input class="input input-solid-primary" placeholder="Primary" />
            <button class="btn btn-outline-primary">
              <FaCartPlus size={20} />
              &nbsp;Commander
            </button>
          </div>
          <div className="border-[1px] border-gray-400 border-solid rounded-lg p-5">
            <h3 className="text-lg">Nom du fournisseur</h3>
            <div className="text-gray-500">
              <div className="">Adresse du fournisseur</div>
              <div className="">255 Produits en stock</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
