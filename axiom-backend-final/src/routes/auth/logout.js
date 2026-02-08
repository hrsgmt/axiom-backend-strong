export default async function logout(app) {
  app.post("/logout", async () => {
    return { logout: true, message: "Client should delete token" };
  });
}
