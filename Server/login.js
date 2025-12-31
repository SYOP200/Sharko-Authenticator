// server/login.js
import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

const users = [
  { id: 1, email: "test@example.com", password: "password123" },
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.json({ success: false });

  const token = jwt.sign({ sub: user.id }, "YOUR_SECRET", {
    expiresIn: "1h",
  });

  res.json({ success: true, token });
});

app.listen(3000, () => console.log("Auth API running"));
