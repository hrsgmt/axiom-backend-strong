import { authGuard } from "../middleware/auth.js";

export default async function profileRoute(app) {
  app.get("/profile", { preHandler: authGuard }, async (req) => {
    return {
      profile: {
        email: req.user.email,
        id: req.user.id
      }
    };
  });
}
