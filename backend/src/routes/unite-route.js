import { uniteSchema } from "../schemas/uniteSchema.js";
import UniteService from "../services/uniteService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const uniteRoutes = async (fastify, options) => {
  const service = new UniteService(await fastify.mysql.getConnection());

  fastify.get("/api/unites", async (req, reply) => {
    const [results] = await service.getAll();
    reply.status(200).send(results);
  });

  fastify.get("/api/unites/:id", async (req, reply) => {
    try {
      reply.status(200).send(await service.getById(req.params.id));
    } catch (error) {
      reply.status(404).send(error);
    }
  });

  fastify.post("/api/unites", { schema: uniteSchema }, async (req, reply) => {
    try {
      await service.addUnite(req.body);
      reply.status(201).send({
        message: "Unite Added Successfully"
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.put(
    "/api/unites/:id",
    { schema: uniteSchema },
    async (req, reply) => {
      try {
        await service.updateUniteById(req.params.id, req.body);
        reply.status(200).send({
          message: "Unite updated successfully"
        });
      } catch (error) {}
    }
  );
};

export default uniteRoutes;
