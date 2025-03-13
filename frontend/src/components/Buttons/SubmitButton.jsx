function SubmitButton({ isSubmitting, children, submitText, className }) {
  return (
    <button className={className} type="submit" disabled={isSubmitting}>
      {!isSubmitting ? (
        children
      ) : (
        <div className={"flex items-center gap-x-4"}>
          <span className={"fw-bold"}>{submitText}</span>
          <div className="animate-spin inline-block size-5 border-2 border-current border-t-transparent text-white rounded-full">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </button>
  );
}

export default SubmitButton;
