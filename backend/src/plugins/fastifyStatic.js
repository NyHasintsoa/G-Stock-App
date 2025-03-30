import fastifyStatic from "@fastify/static";
import fastifyPlugin from "fastify-plugin";
import { pathDir } from "../utils/pathConfig.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const fastifyStaticPlugin = async (fastify, options) => {
  fastify.register(fastifyStatic, {
    root: pathDir,
    prefix: "/uploaded/images"
  });
};

export default fastifyPlugin(fastifyStaticPlugin);
