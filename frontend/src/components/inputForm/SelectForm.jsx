import { useCallback, useEffect, useState, useTransition } from "react";
import { wait } from "../../utils/api.js";

function SelectForm({ register, options, errorField, fetchCb, value = null }) {
  const [items, setItems] = useState([]);
  const [loading, startTransition] = useTransition();

  const hydrateSelect = useCallback(() => {
    startTransition(async () => {
      await wait();
      const { data } = await fetchCb();
      setItems(data);
    });
  }, []);

  useEffect(() => {
    hydrateSelect();
  }, []);

  return (
    <div className="form-field mb-2">
      <label htmlFor={"select-" + options.name} className="form-label">
        {options.label}
      </label>

      {loading ? (
        <div className="skeleton border-2 h-10 w-full rounded-xl"></div>
      ) : (
        <select
          {...register(options.name, options.rules)}
          id={"select-" + options.name}
          className={
            `select max-w-full focus:border-blue-500 focus:ring-blue-500` +
            (errorField && " border-red-600")
          }
        >
          {items.map((item, index) => (
            <option key={index} value={item[options.selectOptions.id]}>
              {item[options.selectOptions.value]}
            </option>
          ))}
        </select>
      )}

      {errorField && (
        <label htmlFor={"input-" + options.name} className="form-label">
          <span className="form-label-alt text-red-600">
            {errorField.message}
          </span>
        </label>
      )}
    </div>
  );
}

export default SelectForm;
