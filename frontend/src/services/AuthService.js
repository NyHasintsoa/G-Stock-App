import { ApiError } from "../utils/api.js";

class AuthService {
  /** @type {string} Prefix for all request */
  _requestPrefix;

  /** @type {string} Backend Server URL */
  _backendUrl = import.meta.env.VITE_BACKEND_URL;

  constructor(requestPrefix) {
    this._requestPrefix = requestPrefix;
  }

  async signin(data) {
    const r = await fetch(`${this._backendUrl + this._requestPrefix}/signin`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }

  async signOut() {
    const r = await fetch(`${this._backendUrl + this._requestPrefix}/signout`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }

  async signUp(data) {
    const r = await fetch(`${this._backendUrl + this._requestPrefix}/signup`, {
      method: "GET",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }

  async getCurrentUser() {
    const r = await fetch(`${this._backendUrl}/api/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }

  async sendPasswordRecoveryMail(data) {
    const r = await fetch(
      `${this._backendUrl + this._requestPrefix}/send-recovery`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }
}

const authService = new AuthService("/api/auth");

export default authService;
