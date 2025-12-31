(function () {
  const DEFAULTS = {
    appName: "My App",
    authType: "email", // email | username | phone
    rememberMe: true,
    passwordReset: true,
    endpoint: "/api/login",
    theme: "purple",
    onSuccess: () => {},
    onError: () => {}
  };

  function createStyles(theme) {
    return `
      .sharko-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      .sharko-box {
        background: #fff;
        padding: 2rem;
        border-radius: 14px;
        width: 100%;
        max-width: 380px;
        font-family: sans-serif;
        box-shadow: 0 25px 70px rgba(0,0,0,0.4);
      }
      .sharko-box h1 {
        text-align: center;
        color: #667eea;
        margin-bottom: 0.5rem;
      }
      .sharko-box p {
        text-align: center;
        color: #666;
        margin-bottom: 1.5rem;
      }
      .sharko-box label {
        font-weight: 500;
        color: #333;
        display: block;
        margin-bottom: 0.25rem;
      }
      .sharko-box input {
        width: 100%;
        padding: 0.7rem;
        border-radius: 8px;
        border: 2px solid #e0e0e0;
        margin-bottom: 1rem;
      }
      .sharko-box button {
        width: 100%;
        padding: 0.8rem;
        border: none;
        border-radius: 8px;
        background: linear-gradient(135deg,#667eea,#764ba2);
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
      .sharko-check {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        gap: 0.5rem;
      }
      .sharko-reset {
        margin-top: 1rem;
        text-align: center;
      }
      .sharko-reset a {
        color: #667eea;
        text-decoration: none;
      }
    `;
  }

  function renderUI(opts) {
    const overlay = document.createElement("div");
    overlay.className = "sharko-overlay";

    const box = document.createElement("div");
    box.className = "sharko-box";

    box.innerHTML = `
      <h1>${opts.appName}</h1>
      <p>Sign in to continue</p>

      <label>${opts.authType}</label>
      <input id="sharko-user" type="${
        opts.authType === "email" ? "email" :
        opts.authType === "phone" ? "tel" : "text"
      }" />

      <label>Password</label>
      <input id="sharko-pass" type="password" />

      ${
        opts.rememberMe
          ? `<div class="sharko-check">
              <input type="checkbox" id="sharko-rem" />
              <label>Remember me</label>
            </div>`
          : ""
      }

      <button id="sharko-submit">Sign In</button>

      ${
        opts.passwordReset
          ? `<div class="sharko-reset">
              <a href="#">Forgot password?</a>
            </div>`
          : ""
      }
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    document.getElementById("sharko-submit").onclick = async () => {
      const payload = {
        user: document.getElementById("sharko-user").value,
        pass: document.getElementById("sharko-pass").value,
        rem: opts.rememberMe
          ? document.getElementById("sharko-rem").checked
          : false
      };

      try {
        const res = await fetch(opts.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (data.success) {
          opts.onSuccess(data);
          overlay.remove();
        } else {
          opts.onError(data);
          alert("Login failed");
        }
      } catch (err) {
        opts.onError(err);
        alert("Network error");
      }
    };
  }

  window.SharkoAuth = {
    init(options = {}) {
      const opts = { ...DEFAULTS, ...options };

      const style = document.createElement("style");
      style.innerHTML = createStyles(opts.theme);
      document.head.appendChild(style);

      renderUI(opts);
    }
  };
})();
