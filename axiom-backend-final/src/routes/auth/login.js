import jwt from "jsonwebtoken";

export default async function loginRoute(app) {
  app.post("/login", async (req, reply) => {
    const { email, password } = req.body;

    if (email !== "auth@axiom.ai" || password !== "123456") {
      return reply.code(401).send({ error: "Invalid credentials" });
    }

    const payload = {
      id: "user-1",
      email
    };

    const accessToken = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    reply.setCookie("refreshToken", refreshToken, {
      path: "/api/auth/refresh",
      httpOnly: true,
      sameSite: "lax"
    });

    reply.send({ login: true, token: accessToken });
  });
}
