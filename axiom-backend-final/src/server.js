import "dotenv/config";
import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";

import registerRoute from "./routes/auth/register.js";
import loginRoute from "./routes/auth/login.js";
import logoutRoute from "./routes/auth/logout.js";
import meRoute from "./routes/me.js";

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: true
});

/* AUTH ROUTES */
await app.register(registerRoute, { prefix: "/api/auth" });
await app.register(loginRoute,    { prefix: "/api/auth" });
await app.register(logoutRoute,   { prefix: "/api/auth" });

/* ME ROUTE */
await app.register(meRoute, { prefix: "/api" });

app.get("/", async () => {
  return { ok: true, service: "axiom-backend-final" };
});

await app.listen({
  port: 4000,
  host: "0.0.0.0"
});
