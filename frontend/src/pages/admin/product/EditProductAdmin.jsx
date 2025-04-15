import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";
import InputForm from "../../../components/inputForm/InputForm.jsx";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn.jsx";
import { wait } from "../../../utils/api.js";
import SelectForm from "../../../components/inputForm/SelectForm.jsx";
import supplierService from "../../../services/SupplierService.js";
import categoryService from "../../../services/CategoryService.js";
import SelectMultipleForm from "../../../components/inputForm/SelectMultipleForm.jsx";
import productService from "../../../services/ProductService.js";
import typeService from "../../../services/TypeService.js";
import { ProductForm as FormFields } from "../../../forms/ProductForm.js";
import useFetchItem from "../../../hooks/useFetchItem.js";

function EditProductAdmin() {
  const { idProduct } = useParams();
  const { item, loading } = useFetchItem(
    productService.getById.bind(productService),
    idProduct
  );
  const { register, handleSubmit, formState, control, setValue } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await wait();
    data.categoriesId = Array.from(
      data.categoriesId,
      (category) => category.value
    );
    data.supplierId = productService.getIdBySelectForm(data.supplierId);
    data.typesProductId = productService.getIdBySelectForm(data.typesProductId);
    if (productService.updateProductById(idProduct, data)) {
      toast.success("Produit modifier avec succès !");
      navigate("/admin/catalogs/products");
    }
  };

  useEffect(() => {
    if (item) {
      setValue(FormFields.name.name, item.name);
      setValue(FormFields.price.name, item.price);
      setValue(FormFields.description.name, item.description);
      setValue(
        FormFields.supplier.name,
        productService.selectOption(item, "supplier")
      );
      setValue(
        FormFields.typesProduct.name,
        productService.selectOption(item, "types_product")
      );
      setValue(
        FormFields.categories.name,
        item.CategoryModels
          ? Array.from(item.CategoryModels, (category) => {
              return {
                value: category.id,
                label: category.name
              };
            })
          : []
      );
    }
  }, [item, setValue]);

  const { errors, isSubmitting } = formState;

  return (
    <div className="">
      <div className="container">
        <div className="card-header justify-center">
          <h1 className="font-semibold text-2xl">Ajout d'un nouveau produit</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="">
              <InputForm
                register={register}
                options={FormFields.name}
                errorField={errors.name}
                disabled={loading}
                value={item.name}
              />
              <InputForm
                register={register}
                options={FormFields.price}
                errorField={errors.price}
                disabled={loading}
                value={item.price}
              />
              <InputForm
                register={register}
                options={FormFields.description}
                errorField={errors[FormFields.description.name]}
                disabled={loading}
                value={item.description}
              />
            </div>
            <div className="">
              <SelectForm
                control={control}
                options={FormFields.supplier}
                errorField={errors[FormFields.supplier.name]}
                fetchCb={supplierService.getAll.bind(supplierService)}
                value={productService.selectOption(item, "supplier")}
              />
              <SelectForm
                control={control}
                options={FormFields.typesProduct}
                errorField={errors[FormFields.typesProduct.name]}
                fetchCb={typeService.getAll.bind(typeService)}
                value={productService.selectOption(item, "types_product")}
              />
              <SelectMultipleForm
                control={control}
                options={FormFields.categories}
                errorField={errors[FormFields.categories.name]}
                fetchCb={categoryService.getAll.bind(categoryService)}
                values={
                  item.CategoryModels
                    ? Array.from(item.CategoryModels, (category) => {
                        return {
                          value: category.id,
                          label: category.name
                        };
                      })
                    : []
                }
              />
              <input
                {...register("product-image")}
                type="file"
                className="input-file input-file-primary"
              />
            </div>
          </div>
          <SubmitBtn text="Ajouter produit" isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
}

export default EditProductAdmin;
