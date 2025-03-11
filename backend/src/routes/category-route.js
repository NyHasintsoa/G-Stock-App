import { categorySchema } from "../schemas/categorySchema.js";
import CategoryService from "../services/categoryService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const categoryRoutes = async (fastify, options) => {
  const service = new CategoryService(await fastify.mysql.getConnection());

  fastify.get("/categories", async (req, reply) => {
    const [results] = await service.getAll();
    reply.status(200).send(results);
  });

  fastify.get("/api/categories/:id", async (req, reply) => {
    try {
      reply.status(200).send(await service.getById(req.params.id));
    } catch (error) {
      reply.status(404).send(error);
    }
  });

  fastify.post(
    "/api/categories",
    { schema: categorySchema },
    async (req, reply) => {
      try {
        await service.addCategory(req.body);
        reply.status(201).send({
          message: "Category Added"
        });
      } catch (error) {}
    }
  );

  fastify.put(
    "/api/categories/:id",
    { schema: categorySchema },
    async (req, reply) => {
      try {
        await service.updateCategoryById(req.params.id, req.body);
        reply.status(200).send({
          message: "Category updated successfully"
        });
      } catch (error) {}
    }
  );
};

export default categoryRoutes;
