import { authSchema } from "../schemas/authSchema.js";
import AuthService from "../services/authService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const authRoutes = async (fastify, options) => {
  const service = new AuthService(await fastify.mysql.getConnection(), fastify);

  fastify.get("/api/auth/send", (req, reply) => {
    const { mailer } = fastify;
    mailer.sendMail({
      to: "someone@example.tld",
      text: "hello world !"
    });

    reply.status(200);
    return {
      status: "ok",
      message: "Email successfully sent"
    };
  });

  fastify.post(
    "/api/auth/signin",
    { schema: authSchema },
    async (req, reply) => {
      try {
        const token = await service.signIn(req.body);
        reply.status(200).send({
          token
        });
      } catch (error) {
        reply.status(403).send(error);
      }
    }
  );

  fastify.post(
    "/api/auth/signup",
    { schema: authSchema },
    async (req, reply) => {
      try {
        const r = await service.signUp(req.body);
        reply.status(200).send({
          message: "User added successfully"
        });
      } catch (error) {
        reply.status(500).send(error);
      }
    }
  );
};

export default authRoutes;
