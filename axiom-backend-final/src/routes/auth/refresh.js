import jwt from "jsonwebtoken";

export default async function refreshRoute(app) {
  app.post("/refresh", async (req, reply) => {
    const token = req.cookies?.refreshToken;

    if (!token) {
      return reply.code(401).send({ error: "No refresh token" });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);

      const newAccessToken = jwt.sign(
        { id: payload.id, email: payload.email },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );

      reply.send({ token: newAccessToken });
    } catch {
      reply.code(401).send({ error: "Invalid refresh token" });
    }
  });
}
