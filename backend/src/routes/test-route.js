import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import { getUploadedFile, uploadPath } from "../utils/pathConfig.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const testRoutes = async (fastify, option) => {
  fastify.get("/api/tests", async (req, reply) => {
    reply.send({
      hello: req.url
    });
  });

  fastify.get("/api/tests/upload/:folder/:filename", async (req, reply) => {
    const { folder, filename } = req.params;
    try {
      const { contentType, file } = await getUploadedFile(
        "products",
        folder,
        filename
      );
      if (contentType) reply.type(contentType).send(file);
      else reply.send(file);
    } catch (error) {
      reply.status(404).send({ error: "L'image est introuvable" });
    }
  });

  fastify.post("/api/tests/upload/file", async (req, reply) => {
    const { file, filename } = await req.file();
    if (file) {
      const { path } = await uploadPath("products", filename);
      try {
        await pipeline(file, fs.createWriteStream(path));
        reply.send({
          message: `Fichier ${filename} téléchargé avec succès!`
        });
      } catch (error) {
        reply
          .status(500)
          .send({ error: "Erreur lors de l'upload du fichier." });
      }
    }
  });

  fastify.post("/tests/form", async (req, reply) => {
    const parts = req.parts();
    /** @type {import ("@fastify/multipart").Multipart} */
    const price = (await parts.next("price")).value;
    /** @type {import ("@fastify/multipart").Multipart} */
    const designation = (await parts.next("designation")).value;
    /** @type {import ("@fastify/multipart").Multipart} */
    const category_id = (await parts.next("category_id")).value;
    console.log(
      "\n###########################################\n",
      designation.fieldname,
      "\n###########################################\n",
      price.fieldname,
      "\n###########################################\n",
      category_id.fieldname,
      "\n###########################################\n"
    );
  });
};

export default testRoutes;
