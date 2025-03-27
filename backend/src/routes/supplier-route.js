import { supplierSchema } from "../schemas/supplierSchema.js";
import SupplierService from "../services/SupplierService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const supplierRoutes = async (fastify, options) => {
  const supplierService = new SupplierService();

  fastify.get("/api/suppliers", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get All Suppliers",
        data: await supplierService.getAll()
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/suppliers/paged", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get All Suppliers",
        data: await supplierService.getAndCountAll(req)
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/suppliers/:id/products", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get Product Associed To Supplier",
        data: await supplierService.getProductToSupplierById(req.params.id)
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.post(
    "/api/suppliers",
    { schema: supplierSchema },
    async (req, reply) => {
      try {
        await supplierService.addSupplier(req.body);
        reply.status(201).send({
          message: "Supplier Added Successfully"
        });
      } catch (error) {
        reply.status(500).send(error);
      }
    }
  );
};

export default supplierRoutes;
