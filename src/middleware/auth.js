import jwt from "jsonwebtoken";

export async function authGuard(req, reply) {
  const auth = req.headers.authorization;
  if (!auth) return reply.code(401).send({ error: "No token" });

  try {
    const token = auth.split(" ")[1];
    req.user = jwt.verify(token, "ACCESS_SECRET");
  } catch {
    return reply.code(401).send({ error: "Invalid token" });
  }
}
