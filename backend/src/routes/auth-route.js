import { authSchema } from "../schemas/authSchema.js";
import AuthService from "../services/authService.js";
import GithubOAuthService from "../services/githubOAuthService.js";
import GoogleOAuthService from "../services/googleOAuthService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const authRoutes = async (fastify, options) => {
  const googleOAuthService = new GoogleOAuthService();
  const githubOAuthService = new GithubOAuthService();

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
        const response = await service.signIn(req.body);
        reply.status(200).send(response);
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

  fastify.get("/auth/google/login", async (request, reply) => {
    try {
      reply.redirect(googleOAuthService.generateUrl());
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/auth/google/callback", async (request, reply) => {
    try {
      const userInfo = await googleOAuthService.getUserInfo(request);
      const token = await service.authGoogleUser(userInfo);
      reply.status(200).send({ token });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/auth/github/login", async (request, reply) => {
    try {
      reply.redirect(githubOAuthService.generateUrl());
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.get("/auth/github/callback", async (request, reply) => {
    try {
      const { access_token } = await githubOAuthService.getAccessToken(request);
      const response = await githubOAuthService.getUserApi(access_token);
      reply.status(200).send(response);
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};

export default authRoutes;
