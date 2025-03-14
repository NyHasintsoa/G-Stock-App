import fastifyOAuth from "@fastify/oauth2";
import fastifyPlugin from "fastify-plugin";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const githubOAauth = (fastify, options) => {
  fastify.register(fastifyOAuth, {
    name: "Github OAuth2 G Stock App",
    credentials: {
      auth: fastifyOAuth.GITHUB_CONFIGURATION,
      client: {
        id: process.env.GITHUB_CLIENT_ID,
        secret: process.env.GITHUB_SECRET
      }
    },
    scope: ["profile", "email"],
    callbackUri: process.env.GITHUB_CALLBACK_URI
  });
};

export default fastifyPlugin(githubOAauth);
