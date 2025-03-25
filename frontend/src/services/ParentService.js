class ParentService {
  /** @type {string} Prefix for all request */
  _requestPrefix;

  /** @type {string} Backend Server URL */
  _backendUrl = import.meta.env.VITE_BACKEND_URL;

  constructor(requestPrefix) {
    this._requestPrefix = requestPrefix;
  }

  async getAll() {
    const r = await fetch(`${this._backendUrl}${this._requestPrefix}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new Error("Error");
  }

  async getAllPaginated(page, size = 10) {
    const url = new URL(`${this._backendUrl}${this._requestPrefix}/paged`);
    url.searchParams.set("page", page);
    url.searchParams.set("size", size);
    const r = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new Error("Error");
  }

  async getById(id) {
    const r = await fetch(`${this._backendUrl}${this._requestPrefix}/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (r.ok) return r.json();
    throw new Error("Error");
  }
}

export default ParentService;
