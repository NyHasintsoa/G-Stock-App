import fastifyPlugin from "fastify-plugin";
import fastifyMailer from "fastify-mailer";
import ejs from "ejs";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const fastifyMailerPlugin = (fastify, options) => {
  fastify.register(fastifyMailer, {
    defaults: {
      from: "E-Commerce <commercial.site@domain.com>"
    },
    transport: {
      host: process.env.MAIL_HOST || "127.0.0.1",
      port: process.env.MAIL_PORT || 1025,
      secure: process.env.NODE_ENV === "production",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      }
    },
    view: {
      engine: {
        ejs
      },
      templates: "templates"
    }
  });
};

export default fastifyPlugin(fastifyMailerPlugin);
