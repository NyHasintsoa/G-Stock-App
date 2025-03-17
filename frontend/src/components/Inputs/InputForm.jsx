function InputForm({ register, value = null, options, errorField }) {
  return (
    <>
      <label
        htmlFor={"input-" + options.name}
        className="block text-sm mb-2 dark:text-white"
      >
        {options.label}
      </label>
      <div className="relative">
        <input
          {...register(options.name, options.rules)}
          defaultValue={value}
          type={options.type}
          className={
            "py-1.5 sm:py-3 px-3 pe-11 block w-full border-[1px] " +
            (errorField === undefined ? "border-gray-200" : "border-red-600") +
            " shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          }
        />
        <div
          className={
            "absolute inset-y-0 end-0 pointer-events-none pe-3 pt-3" +
            (errorField !== undefined ? "" : " hidden")
          }
        >
          <svg
            className="size-5 text-red-500"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>
      {errorField && (
        <p className="text-xs text-red-600 mt-2">{errorField.message}</p>
      )}
    </>
  );
}

export default InputForm;
