const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

class ApiError extends Error {
  constructor(status, data) {
    if (status === 401) {
      localStorage.removeItem(
        import.meta.env.VITE_ACCOUNT_STORAGE || "account"
      );
      window.location.reload();
    }
    super();
  }
}

export { wait, ApiError };
