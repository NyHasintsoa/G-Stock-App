/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const homeRoutes = async (fastify, options) => {
  fastify.get("/", async (req, reply) => {
    try {
      await reply.render("home/index");
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};

export default homeRoutes;
