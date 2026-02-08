localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMSIsImVtYWlsIjoiYXV0aEBheGlvbS5haSIsImlhdCI6MTc3MDM3ODUwNywiZXhwIjoxNzcwMzc5NDA3fQ.RXUQAgmHANQ3MeRqqy-9xP-TzSM9aLdRjZK-bqxGBpI");

fetch("http://127.0.0.1:4000/api/me", {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
.then(r => r.json())
.then(console.log);
