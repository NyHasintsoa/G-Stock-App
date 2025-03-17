function PageLoader() {
  return (
    <>
      <div className="min-h-screen max-h-screen min-w-full flex items-center justify-center">
        <div className="animate-spin inline-block size-20 border-10 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default PageLoader;
