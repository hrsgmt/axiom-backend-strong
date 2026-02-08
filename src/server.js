import cors from "cors";
import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";

import loginRoute from "./routes/auth/login.js";
import refreshRoute from "./routes/auth/refresh.js";
import logoutRoute from "./routes/auth/logout.js";
import meRoute from "./routes/me.js";

const app = Fastify({ logger: true });
app.use(cors({ origin: "https://axiom-frontend-l53b.onrender.com", credentials: true }));

await app.register(cors, {
  origin: true,
  credentials: true
});

await app.register(cookie);

await app.register(loginRoute, { prefix: "/api/auth" });
await app.register(refreshRoute, { prefix: "/api/auth" });
await app.register(logoutRoute, { prefix: "/api/auth" });
await app.register(meRoute, { prefix: "/api" });

app.get("/", () => ({ ok: true }));

await app.listen({ port: 4000, host: "0.0.0.0" });
