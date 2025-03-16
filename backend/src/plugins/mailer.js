import fastifyPlugin from "fastify-plugin";
import fastifyMailer from "fastify-mailer";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const mailer = (fastify, options) => {
  fastify.register(fastifyMailer, {
    defaults: {
      from: "E-Commerce <commercial.site@domain.com>"
    },
    transport: {
      host: process.env.MAIL_HOST || "127.0.0.1",
      port: process.env.MAIL_PORT || 1025
    }
  });
};

export default fastifyPlugin(mailer);
