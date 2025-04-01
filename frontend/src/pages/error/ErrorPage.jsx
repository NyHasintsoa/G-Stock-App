import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error</h1>
      <p>{error.status}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut pariatur
        doloribus consequatur ullam, autem facilis. Quo doloremque accusantium,
        dolore ea est necessitatibus qui excepturi molestiae nisi voluptates
        eaque adipisci quae!
      </p>
    </>
  );
}

export default ErrorPage;
