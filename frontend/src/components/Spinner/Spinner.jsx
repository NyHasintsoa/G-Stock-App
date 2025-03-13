function Spinner() {
  return (
    <>
      <div className="animate-spin inline-block size-10 border-8 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default Spinner;
