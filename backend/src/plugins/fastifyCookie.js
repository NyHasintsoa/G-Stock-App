import fastifyPlugin from "fastify-plugin";
import fastifyCookie from "@fastify/cookie";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const fastifyCookiePlugin = async (fastify, options) => {
  fastify.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
    hook: "preHandler"
  });
};

export default fastifyPlugin(fastifyCookiePlugin);
