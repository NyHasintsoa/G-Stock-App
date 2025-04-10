import productSchema from "../schemas/productSchema.js";
import ProductService from "../services/ProductService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const productRoutes = async (fastify, options) => {
  const productService = new ProductService();

  fastify.get("/api/products", async (req, reply) => {
    reply.status(200).send({
      message: "Get ALl Products",
      data: await productService.getAll()
    });
  });

  fastify.get("/api/products/paged", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get All Suppliers",
        data: await productService.getAndCountAll(req)
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/products/:id", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get Product By Id",
        data: await productService.getById(req.params.id)
      });
    } catch (error) {
      reply.status(404).send(error);
    }
  });

  fastify.post(
    "/api/products",
    { schema: productSchema },
    async (req, reply) => {
      try {
        const result = await productService.addProduct(req.body);
        reply.status(201).send({
          message: "Product Added Successfully",
          data: result
        });
      } catch (error) {
        reply.status(500).send(error);
      }
    }
  );

  fastify.put("/api/products/upload/:id", async (req, reply) => {
    try {
      await productService.uploadImage(req);
      reply.status(200).send({
        message: "Product Image uploaded successfully"
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.put(
    "/api/products/:id",
    { schema: productSchema },
    async (req, reply) => {
      try {
        const { id } = req.params;
        await service.updateProduct(req.body, id);
        reply.status(200).send({
          message: "Product Updated Successfully"
        });
      } catch (error) {
        reply.status(500).send(error);
      }
    }
  );
};

export default productRoutes;
