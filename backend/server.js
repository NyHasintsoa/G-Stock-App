import Fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import fastifyEnv from "@fastify/env";
import dotenv from "dotenv";
import jwtAuthToken from "./src/plugins/jwtAuthToken.js";
import fastifyMailer from "./src/plugins/fastifyMailer.js";
import fastifyStatic from "./src/plugins/fastifyStatic.js";
import fastifyCookie from "./src/plugins/fastifyCookie.js";
import fastifyCors from "./src/plugins/fastifyCors.js";
import fastifyView from "./src/plugins/fastifyView.js";
import swaggerDocs from "./src/docs/swaggerDocs.js";
import productRoutes from "./src/routes/product-route.js";
import dashboardRoutes from "./src/routes/dashboard-route.js";
import categoryRoutes from "./src/routes/category-route.js";
import testRoutes from "./src/routes/test-route.js";
import authRoutes from "./src/routes/auth-route.js";
import userRoutes from "./src/routes/user-route.js";
import typeRoutes from "./src/routes/type-route.js";
import supplierRoutes from "./src/routes/supplier-route.js";
import homeRoutes from "./src/routes/home-route.js";
import orderRoutes from "./src/routes/order-route.js";
import "./src/models/Migration.js";

dotenv.config();

const fastify = Fastify({
  logger: true
});

fastify.register(fastifyEnv, {
  dotenv: true,
  schema: {
    type: "object"
  }
});

/**
 * Fastify Plugin
 */
fastify.register(fastifyView);
fastify.register(fastifyStatic);
fastify.register(fastifyCookie);
fastify.register(fastifyMailer);
fastify.register(swaggerDocs);
fastify.register(fastifyCors);
fastify.register(fastifyMultipart, {
  limits: 1048576
});
fastify.register(jwtAuthToken);

/**
 * Fastify Router
 */
fastify.register(authRoutes);
fastify.register(userRoutes);
fastify.register(productRoutes);
fastify.register(categoryRoutes);
fastify.register(typeRoutes);
fastify.register(dashboardRoutes);
fastify.register(testRoutes);
fastify.register(supplierRoutes);
fastify.register(homeRoutes);
fastify.register(orderRoutes);

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
