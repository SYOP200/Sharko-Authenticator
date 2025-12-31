import React, { useState } from "react";

export default function SharkoAuth({
  appName = "App",
  endpoint,
  onSuccess,
  authType = "email",
  rememberMe = true
}) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        onSuccess(data);
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="sharko-auth-card">
      <h2>Login to {appName}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
