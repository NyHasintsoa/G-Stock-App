import { orderSchema } from "../schemas/orderSchema.js";
import OrderService from "../services/OrderService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const orderRoutes = async (fastify, options) => {
  const orderService = new OrderService();

  fastify.get("/api/orders", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get All Orders",
        data: await orderService.getAll()
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/orders/paged", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get All Orders",
        data: await orderService.getAndCountAll(req)
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.post("/api/orders", { schema: orderSchema }, async (req, reply) => {
    try {
      const data = await orderService.addOrder(req);
      reply.status(201).send({
        message: "Order Added Successfully",
        data
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};

export default orderRoutes;
