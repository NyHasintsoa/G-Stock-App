import UserService from "../services/UserService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const userRoutes = async (fastify, options) => {
  const userService = new UserService();

  fastify.get("/api/users", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get All Users",
        data: await userService.getAll()
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/users/paged", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get All Paged Users",
        data: await userService.getAndCountAll(req)
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/users/me", async (req, reply) => {
    reply.status(200).send(req.user);
  });
};

export default userRoutes;
