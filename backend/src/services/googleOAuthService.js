import { google } from "googleapis";

class GoogleOAuthService {
  #oauth2Client;

  constructor() {
    this.#oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_SECRET,
      process.env.GOOGLE_CALLBACK_URI
    );
    google.user;
  }

  generateUrl() {
    return this.#oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["email", "profile"],
      include_granted_scopes: true
    });
  }

  /**
   * Set Credentials from Code in the request
   * @param {import("fastify").FastifyRequest} request
   * @return {Promise}
   */
  async getUserInfo(request) {
    const { code } = request.query;
    let { tokens } = await this.#oauth2Client.getToken(code);
    this.#oauth2Client.setCredentials(tokens);
    const response = await fetch(
      `https://openidconnect.googleapis.com/v1/userinfo`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.access_token}`
        }
      }
    );
    return response.json();
  }
}

export default GoogleOAuthService;
