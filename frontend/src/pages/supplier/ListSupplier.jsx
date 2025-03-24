import { Link } from "react-router";
import { useCallback, useEffect, useState, useTransition } from "react";
import supplierService from "../../services/SupplierService.js";
import SupplierItems from "./SupplierItems.jsx";
import { wait } from "../../utils/api.js";
import Spinner from "../../components/spinner/Spinner.jsx";
import PreviousBtn from "../../components/pagination/PreviousBtn.jsx";
import NextBtn from "../../components/pagination/NextBtn.jsx";

function ListSupplier() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, startTransition] = useTransition();

  const getAllSuppliers = useCallback(() => {
    startTransition(async () => {
      await wait();
      await supplierService.getAll().then((res) => {
        setSuppliers(res.data);
      });
    });
  }, []);

  useEffect(() => {
    getAllSuppliers();
  }, []);

  return (
    <>
      <div className="breadcrumbs text-lg">
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>Fournisseur</li>
        </ul>
      </div>
      <div className="my-5">
        <h1 className="font-semibold text-xl">Liste des Foutnisseur</h1>
        <p className="mt-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi
          iure dicta provident exercitationem quaerat fuga autem, laborum magni,
          possimus ex voluptates reprehenderit amet, tenetur rerum quo
          consequatur perferendis blanditiis?
        </p>
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
          <SupplierItems suppliers={suppliers} />
        </div>
      ) : (
        <Spinner />
      )}

      <div className="flex justify-center items-center">
        <div>
          <div className="pagination">
            <PreviousBtn />
            <button className="btn btn-active">1</button>
            <button className="btn">2</button>
            <button disabled className="btn">
              ...
            </button>
            <button className="btn">3</button>
            <NextBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListSupplier;
