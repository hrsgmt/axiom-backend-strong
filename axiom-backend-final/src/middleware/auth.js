import jwt from "jsonwebtoken";

export function authGuard(req, reply, done) {
  const auth = req.headers.authorization;
  if (!auth) return reply.code(401).send({ error: "No token" });

  const token = auth.split(" ")[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    done();
  } catch {
    reply.code(401).send({ error: "Invalid token" });
  }
}
