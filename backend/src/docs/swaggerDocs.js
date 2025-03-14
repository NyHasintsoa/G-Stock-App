import fastifyPlugin from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const swaggerDocs = async (fastify, options) => {
  await fastify.register(swagger);
  await fastify.register(swaggerUi, {
    routePrefix: process.env.SWAGGER_URL || "/documentation",
    uiConfig: {
      docExpansion: "list",
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true
  });
};

export default fastifyPlugin(swaggerDocs);
