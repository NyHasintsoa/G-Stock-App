import Fastify from "fastify";
import fastifyMysql from "@fastify/mysql";
import fastifyMultipart from "@fastify/multipart";
import cors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import dotenv from "dotenv";
import swaggerDocs from "./src/docs/swaggerDocs.js";
import productRoutes from "./src/routes/product-route.js";
import dashboardRoutes from "./src/routes/dashboard-route.js";
import categoryRoutes from "./src/routes/category-route.js";
import testRoutes from "./src/routes/test-route.js";
import uniteRoutes from "./src/routes/unite-route.js";
import mailer from "./src/plugins/mailer.js";
import authRoutes from "./src/routes/auth-route.js";
import googleOAauth from "./src/plugins/googleOAauth.js";
import userRoutes from "./src/routes/user-route.js";
import jwtAuthToken from "./src/plugins/jwtAuthToken.js";

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
 * Fastify Database
 */
fastify.register(fastifyMysql, {
  promise: true,
  connectionString: process.env.DATABASE_URL
});

fastify.register(mailer);
fastify.register(googleOAauth);
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
fastify.register(uniteRoutes);
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
