import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error</h1>
      <p>{error.status}</p>
    </>
  );
}

export default ErrorPage;
