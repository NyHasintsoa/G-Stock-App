import { useForm } from "react-hook-form";
import InputForm from "../../../components/inputForm/InputForm.jsx";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn.jsx";
import { wait } from "../../../utils/api.js";
import SelectForm from "../../../components/inputForm/SelectForm.jsx";
import supplierService from "../../../services/SupplierService.js";
import categoryService from "../../../services/CategoryService.js";
import SelectMultipleForm from "../../../components/inputForm/SelectMultipleForm.jsx";
import productService from "../../../services/ProductService.js";
import typeService from "../../../services/TypeService.js";

function AddProductAdmin() {
  const { register, handleSubmit, formState, control } = useForm();

  const onSubmit = async (data) => {
    await wait();
    data.categoriesId = Array.from(
      data.categoriesId,
      (category) => category.value
    );
    productService.addProduct(data);
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
                register={register}
                options={FormFields.supplier}
                errorField={errors[FormFields.supplier.name]}
                fetchCb={supplierService.getAll.bind(supplierService)}
              />
              <SelectForm
                register={register}
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

const FormFields = {
  name: {
    name: "name",
    type: "text",
    label: "Désignation du produit",
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
    type: "number",
    label: "Prix Unitaire",
    rules: {
      required: "Veuillez entrer le prix du produit",
      minLength: {
        value: 1,
        message: "Ce champ doit comporter au moins 1 caractères"
      }
    }
  },
  description: {
    name: "description",
    type: "textarea",
    label: "Description"
  },
  productImage: {
    name: "product-image",
    type: "file",
    label: "Photo du produit"
  },
  supplier: {
    name: "supplierId",
    type: "select",
    label: "Fournisseur",
    rules: {
      required: "Veuillez choisir le fournisseur du produit"
    },
    selectOptions: {
      id: "id",
      value: "name"
    }
  },
  typesProduct: {
    name: "typesProductId",
    type: "select",
    label: "Type du produit",
    rules: {
      required: "Veuillez choisir le type du produit"
    },
    selectOptions: {
      id: "id",
      value: "name"
    }
  },
  categories: {
    name: "categoriesId",
    type: "select",
    label: "Catégories du produit",
    rules: {
      required: "Veuillez choisir les catégories du produit"
    },
    selectOptions: {
      id: "id",
      value: "name"
    }
  }
};

export default AddProductAdmin;
