const API = "http://127.0.0.1:4000";

export async function api(path, options = {}) {
  const res = await fetch(API + path, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    credentials: "include",
    ...options
  });

  if (!res.ok) throw new Error("API error");
  return res.json();
}
