/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const dashboardRoutes = async (fastify, options) => {
  fastify.get("/dashboard", async (req, reply) => {
    return {
      hello: "dashboard"
    };
  });
};

export default dashboardRoutes;
