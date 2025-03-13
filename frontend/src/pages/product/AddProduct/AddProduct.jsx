import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import InputForm from "../../../components/Inputs/InputForm.jsx";
import { useCallback, useEffect, useState, useTransition } from "react";
import { wait } from "../../../utils/api.js";
import Spinner from "../../../components/Spinner/Spinner.jsx";
import { getAllCategories } from "../../../services/categoryService.js";
import { getAllUnites } from "../../../services/uniteService.js";
import SubmitButton from "../../../components/Buttons/SubmitButton.jsx";
import SelectForm from "../../../components/Inputs/SelectForm.jsx";
import { addProduct } from "../../../services/productService.js";
import toast from "react-hot-toast";

const productInputOptions = {
  designation: {
    name: "designation",
    type: "text",
    label: "Désignation",
    rules: {
      required: "Veuillez entrer le nom du produit",
      minLength: {
        value: 3,
        message: "Ce champ doit comporter au moins 3 caractères"
      }
    }
  },
  price: {
    name: "price",
    type: "text",
    label: "Prix Unitaire",
    rules: {
      required: "Veuillez entrer le prix du produit",
      minLength: {
        value: 1,
        message: "Ce champ doit comporter au moins 1 caractères"
      }
    }
  },
  category: {
    name: "category_id",
    label: "Catégorie",
    rules: {
      required: "Veuillez entrer la catégorie du produit"
    }
  },
  unite: {
    name: "unite_id",
    label: "Unité",
    rules: {
      required: "Veuillez entrer l'unité du produit"
    }
  }
};

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [unites, setUnites] = useState([]);
  const [loading, startTransition] = useTransition();
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const initForm = useCallback(() => {
    startTransition(async () => {
      await wait();
      await getAllCategories().then(setCategories);
      await getAllUnites().then(setUnites);
    });
  });

  useEffect(() => {
    initForm();
  }, []);

  const onSubmit = async (data) => {
    await wait();
    await toast.promise(addProduct(data), {
      loading: "Traitement",
      success: ({ message }) => message,
      error: (error) => `Erreur: ${error}`
    });
    navigate("/admin/products");
  };

  const { errors, isSubmitting } = formState;

  return (
    <>
      {/* Card Section */}
      <div className="max-w-2xl px-4 sm:px-6 mx-auto">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
          {loading ? (
            <div className="flex justify-center items-center min-h-80">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
                  Nouveau Produit
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Section */}
                <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                  <div className="mt-2 space-y-3">
                    <InputForm
                      register={register}
                      options={productInputOptions.designation}
                      errorField={errors.designation}
                    />
                    <InputForm
                      register={register}
                      options={productInputOptions.price}
                      errorField={errors.price}
                    />
                  </div>
                </div>
                {/* End Section */}

                {/* Section */}
                <div className="mt-2 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="w-full">
                        <SelectForm
                          register={register}
                          options={productInputOptions.category}
                          errorField={errors.category_id}
                          values={categories}
                        />
                      </div>
                      <div className="w-full">
                        <SelectForm
                          register={register}
                          options={productInputOptions.unite}
                          errorField={errors.unite_id}
                          values={unites}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end gap-x-2">
                  <Link
                    to={"/admin/products"}
                    className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    Cancel
                  </Link>
                  <SubmitButton
                    isSubmitting={isSubmitting}
                    submitText={"Traitement"}
                    className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Save changes
                  </SubmitButton>
                </div>
                {/* End Section */}
              </form>
            </>
          )}
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>
  );
}

export default AddProduct;
