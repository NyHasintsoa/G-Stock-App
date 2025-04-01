import fastifyPlugin from "fastify-plugin";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import { templateDir } from "../utils/pathConfig.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const fastifyViewPlugin = async (fastify, options) => {
  fastify.register(fastifyView, {
    engine: {
      ejs
    },
    root: templateDir,
    viewExt: "ejs",
    templates: "templates",
    propertyName: "render"
  });
};

export default fastifyPlugin(fastifyViewPlugin);
