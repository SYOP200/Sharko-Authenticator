(function (window) {
  function init(opts) {
    const { appName, endpoint, onSuccess } = opts;
    const container = document.createElement("div");
    container.innerHTML = `
      <h2>Login to ${appName}</h2>
      <input id="sharko-email" placeholder="Email" />
      <input id="sharko-password" type="password" placeholder="Password" />
      <button id="sharko-login-btn">Sign In</button>
      <p id="sharko-msg"></p>
    `;
    document.body.appendChild(container);

    document.getElementById("sharko-login-btn").onclick = async () => {
      const email = document.getElementById("sharko-email").value;
      const password = document.getElementById("sharko-password").value;
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (data.success) {
          onSuccess(data);
        } else {
          document.getElementById("sharko-msg").textContent =
            "Login failed";
        }
      } catch (err) {
        document.getElementById("sharko-msg").textContent =
          "Network error";
      }
    };
  }

  window.SharkoAuth = { init };
})(window);
