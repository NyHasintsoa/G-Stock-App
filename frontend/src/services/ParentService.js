class ParentService {
  /** @type {string} Prefix for all request */
  _requestPrefix;

  /** @type {string} Backend Server URL */
  _backendUrl = import.meta.env.VITE_BACKEND_URL;

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
