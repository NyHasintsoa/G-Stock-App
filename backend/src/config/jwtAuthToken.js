import fastifyJwt from "@fastify/jwt";
import fastifyPlugin from "fastify-plugin";
import { matchSecuredUrl } from "../utils/matchUrl.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const jwtAuthToken = (fastify, options) => {
  const SECURED_URLS = ["/api/users", "/api/users/**", "/api/products/**"];

  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET
  });

  fastify.addHook("preHandler", async (request, reply) => {
    if (matchSecuredUrl(request.url, SECURED_URLS)) {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.status(401).send(err);
      }
    }
  });
};

export default fastifyPlugin(jwtAuthToken);
