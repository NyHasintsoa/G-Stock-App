import fastifyPlugin from "fastify-plugin";
import cors from "@fastify/cors";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const fastifyCorsPlugin = async (fastify, options) => {
  fastify.register(cors, {
    origin: [process.env.FRONTEND_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
    // allowedHeaders: ["Content-Type", "Authorization", ""]
  });
};

export default fastifyPlugin(fastifyCorsPlugin);
