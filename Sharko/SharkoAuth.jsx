import { SharkoThemes, resolveTheme } from "./sharkoThemes"; 
import React, { useState } from "react";

export default function SharkoAuth({
  theme = "purple",
  themeOverrides = {},
  ...existingProps
}) {

export default function SharkoAuth({
  appName = "My App",
  authType = "email", // email | username | phone
  endpoint = "/api/login",
  rememberMe = true,
  passwordReset = true,
  onSuccess = () => {},
  onError = () => {}
}) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [rem, setRem] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputType =
    authType === "email" ? "email" :
    authType === "phone" ? "tel" : "text";

  const submit = async () => {
    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user,
          pass,
          ...(rememberMe && { rem })
        })
      });

      const data = await res.json();

      if (data.success) {
        onSuccess(data);
      } else {
        onError(data);
        alert("Login failed");
      }
    } catch (err) {
      onError(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <h1 style={styles.title}>{appName}</h1>
        <p style={styles.subtitle}>Sign in to continue</p>

        <label style={styles.label}>{authType}</label>
        <input
          type={inputType}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={styles.input}
        />

        {rememberMe && (
          <div style={styles.check}>
            <input
              type="checkbox"
              checked={rem}
              onChange={(e) => setRem(e.target.checked)}
            />
            <span>Remember me</span>
          </div>
        )}

        <button onClick={submit} style={styles.button} disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {passwordReset && (
          <div style={styles.reset}>
            <a href="#">Forgot password?</a>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  const t = resolveTheme(theme, themeOverrides);

const styles = {
  overlay: {
    background: t.background,
    ...
  },
  box: {
    background: t.cardBackground,
    ...
  },
  button: {
    background: t.primaryGradient,
    ...
  }
};
