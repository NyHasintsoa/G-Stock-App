import productSchema from "../schemas/productSchema.js";
import ProductService from "../services/productService.js";
import { getUploadedFile } from "../utils/pathConfig.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const productRoutes = async (fastify, options) => {
  const service = new ProductService(await fastify.mysql.getConnection());

  fastify.get("/api/products", async (req, reply) => {
    const [results] = await service.getAll();
    reply.status(200).send(results);
  });

  fastify.get("/api/products/:id", async (req, reply) => {
    try {
      reply.status(200).send(await service.getById(req.params.id));
    } catch (error) {
      reply.status(404).send(error);
    }
  });

  fastify.get("/api/products/images/:folder/:filename", async (req, reply) => {
    const { folder, filename } = req.params;
    try {
      const { contentType, file } = await getUploadedFile(
        "products",
        folder,
        filename
      );
      if (contentType) reply.type(contentType).send(file);
      else reply.send(file);
    } catch (error) {
      reply.status(404).send(error);
    }
  });

  fastify.post(
    "/api/products",
    { schema: productSchema },
    async (req, reply) => {
      reply.statusCode = 201;
      await service.addProduct(req.body);
      reply.status(201).send({
        message: "Product Added Successfully"
      });
    }
  );

  fastify.put("/api/products/upload/:id", async (req, reply) => {
    try {
      await service.uploadImage(req, req.params.id);
      reply.status(200).send({
        message: "Product Image uploaded successfully"
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};

export default productRoutes;
