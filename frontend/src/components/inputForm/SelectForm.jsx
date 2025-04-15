import { useCallback, useEffect, useState, useTransition } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { wait } from "../../utils/api.js";

function SelectForm({ control, options, errorField, fetchCb, value }) {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const [loading, startTransition] = useTransition();
  const animatedComponents = makeAnimated();

  const hydrateSelect = useCallback(() => {
    startTransition(async () => {
      await wait();
      const { data } = await fetchCb();
      setItems(
        data.map((item) => {
          return {
            value: item[options.selectOptions.id],
            label: item[options.selectOptions.value]
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    hydrateSelect();
  }, []);

  useEffect(() => {
    if (value && value.value !== undefined) setSelected(value);
  }, [value]);

  return (
    <div className="form-field mb-2">
      <label htmlFor={"select-" + options.name} className="form-label">
        {options.label}
      </label>

      {loading ? (
        <div className="skeleton border-2 h-10 w-full rounded-xl"></div>
      ) : (
        <Controller
          name={options.name}
          control={control}
          rules={options.rules}
          render={({ field }) => (
            <Select
              {...field}
              onChange={(selectOptions) => {
                field.onChange(selectOptions);
                setSelected(selectOptions);
              }}
              value={selected}
              components={animatedComponents}
              options={items}
            />
          )}
        />
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
