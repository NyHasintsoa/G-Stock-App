import OrderService from "../services/OrderService.js";
import ProductService from "../services/ProductService.js";
import UserService from "../services/UserService.js";
import ClientService from "../services/ClientService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const mainRoutes = async (fastify, options) => {
  const productService = new ProductService();
  const orderService = new OrderService();
  const userService = new UserService();
  const clientService = new ClientService();

  fastify.get("/", async (req, reply) => {
    try {
      await reply.render("home/index");
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/dashboard/counter", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get Dashboard Counter",
        data: {
          productCount: await productService.count(),
          orderCount: await orderService.count(),
          annualIncomes: await orderService.annualIncomes(),
          userCount: await userService.count()
        }
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};

export default mainRoutes;
