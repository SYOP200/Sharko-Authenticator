import React, { useState } from "react";

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
  overlay: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#667eea,#764ba2)"
  },
  box: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "14px",
    width: "100%",
    maxWidth: "380px",
    fontFamily: "sans-serif",
    boxShadow: "0 25px 70px rgba(0,0,0,0.4)"
  },
  title: {
    textAlign: "center",
    color: "#667eea",
    marginBottom: "0.25rem"
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "1.5rem"
  },
  label: {
    fontWeight: 600,
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "0.7rem",
    borderRadius: "8px",
    border: "2px solid #e0e0e0",
    marginTop: "0.3rem",
    marginBottom: "1rem"
  },
  check: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1rem"
  },
  button: {
    width: "100%",
    padding: "0.8rem",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  reset: {
    marginTop: "1rem",
    textAlign: "center"
  }
};
