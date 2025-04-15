function InputForm({
  register,
  value = "",
  options,
  errorField,
  disabled = false
}) {
  return (
    <div className="form-field mb-2">
      <label htmlFor={"input-" + options.name} className="form-label">
        {options.label}
      </label>

      {options.type == "textarea" ? (
        <textarea
          {...register(options.name, options.rules)}
          defaultValue={value}
          className={
            `textarea max-w-full focus:border-blue-500 focus:ring-blue-500` +
            (errorField && " border-red-600")
          }
          id={"input-" + options.name}
          disabled={disabled}
        ></textarea>
      ) : (
        <input
          {...register(options.name, options.rules)}
          defaultValue={value}
          type={options.type ?? "text"}
          placeholder={options.placeholder ?? ""}
          className={
            `input max-w-full focus:border-blue-500 focus:ring-blue-500` +
            (errorField && " border-red-600")
          }
          id={"input-" + options.name}
          disabled={disabled}
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

export default InputForm;
