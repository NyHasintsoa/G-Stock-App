import Cookies from "js-cookie";

const TOKEN_COOKIE = import.meta.env.VITE_TOKEN_COOKIE;
const handleGoogleOAuth = () => {
  window.location.href = `${
    import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8080"
  }/auth/google/login`;
};

const loginRequest = async (data) => {
  const r = await fetch(`/api/auth/signin`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  if (r.ok) return r.json();
  const { message } = await r.json();
  throw new Error(message);
};

const getCurrentUser = async () => {
  const r = await fetch(`/api/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get(TOKEN_COOKIE)}`
    }
  });
  if (r.ok) return r.json();
  const { message } = await r.json();
  throw new Error(message);
};

export { handleGoogleOAuth, loginRequest, getCurrentUser };
