import { URL } from "node:url";

class GithubOAuthService {
  constructor() {}

  generateUrl() {
    const url = new URL("https://github.com/login/oauth/authorize");
    url.searchParams.set("client_id", process.env.GITHUB_CLIENT_ID);
    url.searchParams.set("scope", "user,user:email");
    url.searchParams.set("redirect_uri", process.env.GITHUB_CALLBACK_URI);
    return url.toString();
  }

  /**
   * Get Token from Request
   * @param {import("fastify").FastifyRequest} request
   */
  async getAccessToken(request) {
    const { code } = request.query;
    const data = {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_SECRET,
      code: code,
      redirect_uri: process.env.GITHUB_CALLBACK_URI
    };
    const r = await fetch(`https://github.com/login/oauth/access_token`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    return r.json();
  }

  /**
   * Get Informations With Token
   * @param {string} token
   * @return {Promise}
   */
  async getUserApi(token) {
    const r = await fetch(`https://api.github.com/user`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    return r.json();
  }
}

export default GithubOAuthService;
