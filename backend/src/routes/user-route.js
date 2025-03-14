import UserService from "../services/userService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const userRoutes = async (fastify, options) => {
  const service = new UserService(await fastify.mysql.getConnection());

  fastify.get("/api/users", async (req, reply) => {
    const [results] = await service.getAll();
    reply.status(200).send(results);
  });

  fastify.get("/api/users/me", async (req, reply) => {
    reply.status(200).send(req.user);
  });
};

export default userRoutes;
