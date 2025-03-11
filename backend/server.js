import Fastify from "fastify";
import productRoutes from "./src/routes/product-route.js";
import fastifyMysql from "@fastify/mysql";
import fastifyMultipart from "@fastify/multipart";
import dashboardRoutes from "./src/routes/dashboard-route.js";
import categoryRoutes from "./src/routes/category-route.js";
import testRoutes from "./src/routes/test-route.js";
import dotenv from "dotenv";

dotenv.config();

const fastify = Fastify({
  logger: true
});

/**
 * Fastify Database
 */
fastify.register(fastifyMysql, {
  promise: true,
  connectionString: process.env.DATABASE_URL
});

fastify.register(fastifyMultipart, {
  limits: 1048576
});

/**
 * Fastify Router
 */
fastify.register(productRoutes);
fastify.register(categoryRoutes);
fastify.register(dashboardRoutes);
fastify.register(testRoutes);

/**
 * Fastify Server Configuration
 */
fastify.listen(
  {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 8080
  },
  (err, address) => {
    if (err) fastify.log.error(err);
    console.log(`Listening on address => ${address}`);
  }
);
