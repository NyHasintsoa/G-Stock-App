import { Link, useParams } from "react-router";
import { FaAngleDown, FaAngleUp, FaCartPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import productImg from "../../assets/product.jpg";
import useFetchItem from "../../hooks/useFetchItem.js";
import productService from "../../services/ProductService.js";
import Spinner from "../../components/spinner/Spinner.jsx";
import { useEffect } from "react";

function ProductInfo() {
  const { idProduct } = useParams();
  const { item, loading } = useFetchItem(
    productService.getById.bind(productService),
    idProduct
  );
  const { register, handleSubmit, formState, getValues, setValue } = useForm();

  useEffect(() => {
    setValue("id", idProduct);
    setValue("price", item.price);
    setValue("description", item.description);
    setValue("path_img", item.path_img);
    setValue("name", item.name);
  }, [item]);

  const onSubmit = async (data) => {
    console.log(
      "\n###########################################\n",
      data,
      "\n###########################################\n"
    );
  };

  const updateNumber = (actionState) => {
    const { qte } = getValues();
    if (actionState === "up") setValue("qte", qte + 1);
    else if (actionState === "down") {
      setValue("qte", qte - 1);
      if (qte <= 0) setValue("qte", 0);
    }
  };

  const { errors, isSubmitting } = formState;

  return (
    <>
      <div className="breadcrumbs text-lg">
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/product"}>Produits</Link>
          </li>
          <li>{item.name}</li>
        </ul>
      </div>
      {!loading ? (
        <div className="px-20 my-5 flex justify-between w-full gap-16">
          <div className="w-full rounded-lg overflow-hidden">
            <img src={productImg} alt="" />
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p className="text-gray-500 text-justify">{item.description}</p>

            <div className="text-lg font-bold text-blue-700">
              {item.price} Ar
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form-control">
              <input
                {...register("qte", {
                  required:
                    "Veuillez entrer la quantité que vous voulez obtenir",
                  valueAsNumber: "La valeur doit être un nombre"
                })}
                type="text"
                className="input input-solid-primary h-full text-2xl"
                placeholder="Quantité"
                defaultValue={0}
              />
              <div className="flex flex-col">
                <button
                  className="btn btn-sm border-[1px] border-blue-600"
                  type="button"
                  onClick={() => updateNumber("up")}
                >
                  <FaAngleUp size={12} />
                </button>
                <button
                  className="btn btn-sm border-[1px] border-blue-600"
                  type="button"
                  onClick={() => updateNumber("down")}
                >
                  <FaAngleDown size={12} />
                </button>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary h-full text-xl"
              >
                <FaCartPlus size={20} />
                &nbsp;Commander
              </button>
            </form>
            {item.supplier !== undefined ? (
              <div className="border-[1px] border-gray-400 border-solid rounded-lg p-5">
                <h3 className="text-lg">{item.supplier.name}</h3>
                <div className="text-gray-500">
                  <div className="">{item.supplier.address}</div>
                  <div className="">255 Produits en stock</div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ProductInfo;
