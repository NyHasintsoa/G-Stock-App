import fastifyJwt from "@fastify/jwt";
import fastifyPlugin from "fastify-plugin";
import { transformToRegex } from "../utils/matchUrl.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const jwtAuthToken = (fastify, options) => {
  const SECURED_URLS = [
    "/api/users",
    "/api/users/",
    "/api/orders",
    "/api/dashboard/counter"
  ];

  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET,
    cookie: {
      cookieName: process.env.JWT_COOKIE_NAME || "token",
      signed: process.env.NODE_ENV === "production"
    },
    sign: {
      expiresIn: process.env.JWT_EXPIRATION || "7d"
    }
  });

  fastify.addHook("preHandler", async (request, reply) => {
    if (SECURED_URLS.some((url) => transformToRegex(url).test(request.url))) {
      try {
        await request.jwtVerify({
          onlyCookie: true
        });
      } catch (err) {
        reply.status(401).send(err);
      }
    }
  });
};

export default fastifyPlugin(jwtAuthToken);
