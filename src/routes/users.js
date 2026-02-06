import { createUser, listUsers } from "../store/users.js";

export default async function usersRoutes(app) {

  app.post("/users", async (req, reply) => {
    const { email } = req.body || {};
    if (!email) {
      return reply.code(400).send({ error: "email required" });
    }

    const user = createUser({ email });
    return { created: true, user };
  });

  app.get("/users", async () => {
    return listUsers();
  });

}
