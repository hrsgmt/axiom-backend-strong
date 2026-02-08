import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";

const users = [];

export function createUser(email, password) {
  const user = {
    id: uuid(),
    email,
    password: bcrypt.hashSync(password, 10)
  };
  users.push(user);
  return user;
}

export function findUserByEmail(email) {
  return users.find(u => u.email === email);
}
