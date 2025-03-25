import { uniteSchema } from "../schemas/uniteSchema.js";
import TypeService from "../services/TypeService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const typeRoutes = async (fastify, options) => {
  const typeService = new TypeService();

  fastify.get("/api/types", async (req, reply) => {
    reply.status(200).send({
      message: "Get All Types Product",
      data: await typeService.getAll()
    });
  });

  fastify.get("/api/types/paged", async (req, reply) => {
    reply.status(200).send({
      message: "Get All Types Product",
      data: await typeService.getAndCountAll(req)
    });
  });

  fastify.get("/api/types/:id", async (req, reply) => {
    try {
      const { id } = req.params;
      reply.status(200).send({
        message: "Get Unite By Id",
        data: await typeService.getById(id)
      });
    } catch (error) {
      reply.status(404).send(error);
    }
  });

  fastify.post("/api/types", { schema: uniteSchema }, async (req, reply) => {
    try {
      await typeService.addType(req.body);
      reply.status(201).send({
        message: "Type Product Added Successfully"
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.put("/api/types/:id", { schema: uniteSchema }, async (req, reply) => {
    try {
      const { id } = req.params;
      await typeService.updateTypeById(id, req.body);
      reply.status(200).send({
        message: "Type Product updated successfully"
      });
    } catch (error) {}
  });
};

export default typeRoutes;
