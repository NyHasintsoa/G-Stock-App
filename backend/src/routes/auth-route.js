import { accountRecoverySchema, authSchema } from "../schemas/authSchema.js";
import AuthService from "../services/AuthService.js";

/**
 * Encapsulates the routes
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options plugin options
 */
const authRoutes = async (fastify, options) => {
  const authService = new AuthService(fastify);
  const JWT_COOKIE_NAME = process.env.JWT_COOKIE_NAME || "token";
  const cookieOptions = {
    domain: new URL(process.env.FRONTEND_URL).hostname,
    path: "/",
    httpOnly: true,
    secure: "true",
    sameSite: "none"
  };

  fastify.post(
    "/api/auth/send-recovery",
    { schema: accountRecoverySchema },
    async (req, reply) => {
      await authService.sendMailAccountRecovery(req.body);
      reply.status(200).send({
        status: "ok",
        message: "Email successfully sent"
      });
    }
  );

  fastify.post(
    "/api/auth/signin",
    { schema: authSchema },
    async (req, reply) => {
      try {
        const response = await authService.signIn(req.body);
        const { rememberMe } = req.body;
        if (rememberMe)
          cookieOptions.expires = new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
          );
        reply
          .setCookie(JWT_COOKIE_NAME, response.token, cookieOptions)
          .status(200)
          .send(response);
      } catch (error) {
        reply.status(403).send(error);
      }
    }
  );

  fastify.delete("/api/auth/signout", async (req, reply) => {
    try {
      reply.clearCookie(JWT_COOKIE_NAME, cookieOptions).status(201).send({
        message: "User logout successfully"
      });
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  fastify.post(
    "/api/auth/signup",
    { schema: authSchema },
    async (req, reply) => {
      try {
        await authService.signUp(req.body);
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
