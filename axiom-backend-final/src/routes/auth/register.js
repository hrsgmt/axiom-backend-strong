import { createUser, findUserByEmail } from "../../store/users.js";

export default async function register(app) {
  app.post("/register", async (req, reply) => {
    const { email, password } = req.body;

    if (findUserByEmail(email)) {
      return reply.code(400).send({ error: "User exists" });
    }

    const user = createUser(email, password);
    reply.send({ registered: true, email: user.email });
  });
}
