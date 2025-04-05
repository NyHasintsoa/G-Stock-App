import { ApiError } from "../utils/api.js";

class DashboardService {
  /** @type {string} Prefix for all request */
  #requestPrefix;

  /** @type {string} Backend Server URL */
  #backendUrl;

  constructor(requestPrefix) {
    this.#requestPrefix = requestPrefix;
    this.#backendUrl = import.meta.env.VITE_BACKEND_URL;
  }

  async getCounter() {
    const r = await fetch(`${this.#backendUrl + this.#requestPrefix}/counter`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }
}

const dashboardService = new DashboardService("/api/dashboard");

export default dashboardService;
