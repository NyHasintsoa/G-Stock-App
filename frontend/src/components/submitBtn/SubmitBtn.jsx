function SubmitBtn({
  text = "Some text Here",
  isSubmitting,
  className = "btn btn-primary"
}) {
  return (
    <button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <div className="flex items-center justify-between w-full">
          Traitement
          <svg
            className="spinner-ring size-8 [--spinner-color:var(--slate-5)]"
            viewBox="25 25 50 50"
            strokeWidth="5"
          >
            <circle cx="50" cy="50" r="20" />
          </svg>
        </div>
      ) : (
        text
      )}
    </button>
  );
}

export default SubmitBtn;
