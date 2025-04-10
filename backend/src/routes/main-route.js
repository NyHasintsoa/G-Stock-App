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

  fastify.get("/api/stocks/products", async (req, reply) => {
    try {
      reply.status(200).send({
        message: "Get Stock Products",
        data: await productService.getStockProducts()
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/api/products/hydrate", async (req, reply) => {
    try {
      const result = await productService.findStockByProductId(
        "01eb23b1d22130ae99bb"
      );
      reply.status(200).send({
        result
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};

export default mainRoutes;
