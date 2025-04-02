import { ApiError } from "../utils/api.js";

class ParentService {
  /** @type {string} Prefix for all request */
  _requestPrefix;

  /** @type {string} Backend Server URL */
  _backendUrl = import.meta.env.VITE_BACKEND_URL;

  constructor(requestPrefix) {
    this._requestPrefix = requestPrefix;
  }

  async getAll() {
    const r = await fetch(`${this._backendUr + this._requestPrefix}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }

  async getAllPaginated(page, size = 10) {
    const url = new URL(`${this._backendUrl + this._requestPrefix}/paged`);
    url.searchParams.set("page", page);
    url.searchParams.set("size", size);
    const r = await fetch(url.toString(), {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }

  async getById(id) {
    const r = await fetch(`${this._backendUrl + this._requestPrefix}/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }

  async addNew(data) {
    const r = await fetch(`${this._backendUrl + this._requestPrefix}`, {
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
}

export default ParentService;
