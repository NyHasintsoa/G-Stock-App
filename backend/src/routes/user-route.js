import UserService from "../services/userService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const userRoutes = async (fastify, options) => {
  fastify.get("/api/users", async (req, reply) => {
    reply.status(200).send({
      message: "Get ALl Users"
    });
  });

  fastify.get("/api/users/me", async (req, reply) => {
    reply.status(200).send(req.user);
  });
};

export default userRoutes;
