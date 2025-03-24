import Fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import cors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import dotenv from "dotenv";
import swaggerDocs from "./src/docs/swaggerDocs.js";
import productRoutes from "./src/routes/product-route.js";
import dashboardRoutes from "./src/routes/dashboard-route.js";
import categoryRoutes from "./src/routes/category-route.js";
import testRoutes from "./src/routes/test-route.js";
import mailer from "./src/plugins/mailer.js";
import authRoutes from "./src/routes/auth-route.js";
import userRoutes from "./src/routes/user-route.js";
import jwtAuthToken from "./src/plugins/jwtAuthToken.js";
import typeRoutes from "./src/routes/type-route.js";
import supplierRoutes from "./src/routes/supplier-route.js";
import fastifyStatic from "./src/plugins/fastifyStatic.js";
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
fastify.register(fastifyStatic);
fastify.register(mailer);
fastify.register(swaggerDocs);
fastify.register(cors, {
  origin: [process.env.FRONTEND_URL]
});
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
