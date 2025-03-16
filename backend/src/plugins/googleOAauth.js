import fastifyOAuth from "@fastify/oauth2";
import fastifyPlugin from "fastify-plugin";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const googleOAauth = (fastify, options) => {
  fastify.register(fastifyOAuth, {
    name: "googleOAuth2",
    credentials: {
      auth: fastifyOAuth.GOOGLE_CONFIGURATION,
      client: {
        id: process.env.GOOGLE_CLIENT_ID,
        secret: process.env.GOOGLE_SECRET
      }
    },
    scope: ["profil", "email"],
    callbackUri: process.env.GOOGLE_CALLBACK_URI,
    callbackUriParams: {
      access_type: "online"
    }
  });
};

export default fastifyPlugin(googleOAauth);
