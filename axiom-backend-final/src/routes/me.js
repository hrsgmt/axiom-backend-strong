import { authGuard } from "../middleware/auth.js";

export default async function me(app) {
  app.get("/me", { preHandler: authGuard }, async (req) => {
    return { user: req.user };
  });
}
