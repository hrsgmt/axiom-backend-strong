import jwt from "jsonwebtoken";

export default async function (app) {
  app.post("/login", async (req, reply) => {
    const { email, password } = req.body;

    if (email !== "auth@axiom.ai" || password !== "123456") {
      return reply.code(401).send({ error: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { id: "user-1", email },
      "ACCESS_SECRET",
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: "user-1", email },
      "REFRESH_SECRET",
      { expiresIn: "7d" }
    );

    reply.setCookie("refreshToken", refreshToken, {
      path: "/api/auth/refresh",
      httpOnly: true,
      sameSite: "lax"
    });

    return { login: true, token: accessToken };
  });
}
