document.getElementById("loginBtn").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://127.0.0.1:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    localStorage.setItem("token", data.token);
    location.href = "/dashboard.html";
  } catch {
    document.getElementById("msg").textContent = "Login failed";
  }
};
