import { categorySchema } from "../schemas/categorySchema.js";
import CategoryService from "../services/categoryService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const categoryRoutes = async (fastify, options) => {
  const categoryService = new CategoryService();

  fastify.get("/api/categories", async (req, reply) => {
    reply.status(200).send({
      message: "Get ALl Categories",
      data: await categoryService.getAll()
    });
  });

  fastify.get("/api/categories/paged", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get Paged Categories",
        data: await categoryService.getAndCountAll(req)
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/categories/:id", async (req, reply) => {
    try {
      const { id } = req.params;
      reply.status(200).send({
        message: "Get Category By Id",
        data: await categoryService.getById(id)
      });
    } catch (error) {
      reply.status(404).send(error);
    }
  });

  fastify.post(
    "/api/categories",
    { schema: categorySchema },
    async (req, reply) => {
      try {
        await categoryService.addCategory(req.body);
        reply.status(201).send({
          message: "Category Added Successfully"
        });
      } catch (error) {
        reply.status(500).send(error);
      }
    }
  );

  fastify.put(
    "/api/categories/:id",
    { schema: categorySchema },
    async (req, reply) => {
      try {
        const { id } = req.params;
        await categoryService.updateCategoryById(id, req.body);
        reply.status(200).send({
          message: "Category updated successfully"
        });
      } catch (error) {
        reply.status(500).send(error);
      }
    }
  );
};

export default categoryRoutes;
