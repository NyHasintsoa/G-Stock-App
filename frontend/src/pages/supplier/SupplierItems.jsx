import SupplierCard from "../../components/supplierCard/SupplierCard.jsx";

function SupplierItems({ suppliers }) {
  return (
    <>
      {Array.from(suppliers, (supplier, index) => (
        <SupplierCard key={index} supplier={supplier} />
      ))}
    </>
  );
}

export default SupplierItems;
