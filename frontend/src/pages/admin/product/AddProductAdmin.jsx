import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
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

function AddProductAdmin() {
  const { register, handleSubmit, formState, control } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await wait();
    data.categoriesId = Array.from(
      data.categoriesId,
      (category) => category.value
    );
    data.supplierId = productService.getIdBySelectForm(data.supplierId);
    data.typesProductId = productService.getIdBySelectForm(data.typesProductId);
    if (productService.addProduct(data)) {
      toast.success("Produit ajouter avec succès !");
      navigate("/admin/catalogs/products");
    }
  };

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
              />
              <InputForm
                register={register}
                options={FormFields.price}
                errorField={errors.price}
              />
              <InputForm
                register={register}
                options={FormFields.description}
                errorField={errors[FormFields.description.name]}
              />
            </div>
            <div className="">
              <SelectForm
                control={control}
                options={FormFields.supplier}
                errorField={errors[FormFields.supplier.name]}
                fetchCb={supplierService.getAll.bind(supplierService)}
              />
              <SelectForm
                control={control}
                options={FormFields.typesProduct}
                errorField={errors[FormFields.typesProduct.name]}
                fetchCb={typeService.getAll.bind(typeService)}
              />
              <SelectMultipleForm
                control={control}
                options={FormFields.categories}
                errorField={errors[FormFields.categories.name]}
                fetchCb={categoryService.getAll.bind(categoryService)}
                multiple
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

export default AddProductAdmin;
