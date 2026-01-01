# Sharko Auth Plugin — Documentation

## Overview

Sharko Auth is a lightweight, embeddable authentication UI plugin for websites and web applications. It helps developers add login functionality quickly without building custom authentication interfaces from scratch.

Use it with React or plain JavaScript, and connect it to any backend authentication API.

---

## Key Features

* **Quick integration** with just a few lines of code
* **Customizable UI** to match your brand
* **Works with any backend** (REST-friendly)
* **Mobile‑friendly, responsive design**
* **Lightweight** and easy to maintain

---

## Installation

### Option 1 — React / npm

```bash
npm install sharko-auth-plugin
```

### Option 2 — Script Tag (Plain JavaScript)

Add the compiled script to your HTML page:

```html
<script src="/dist/sharko-auth.plugin.js"></script>
```

> Make sure the file path matches where the plugin is hosted on your site.

---

## Basic Usage

### React Example

```jsx
import SharkoAuth from "sharko-auth-plugin";

function App() {
  const handleLoginSuccess = (data) => {
    console.log("User logged in", data);
  };

  return (
    <SharkoAuth
      appName="MyApp"
      endpoint="/api/login"
      onSuccess={handleLoginSuccess}
    />
  );
}
```

### Plain JavaScript Example

```html
<div id="auth"></div>
<script>
  SharkoAuth.init({
    appName: "MyApp",
    endpoint: "/api/login",
    onSuccess: (data) => console.log("Logged in", data),
  });
</script>
```

---

## API Options

| Option       | Type       | Required | Description                                     |
| ------------ | ---------- | :------: | ----------------------------------------------- |
| `appName`    | `string`   |     ✓    | Name displayed in the login header.             |
| `endpoint`   | `string`   |     ✓    | API route that processes login requests.        |
| `onSuccess`  | `function` |     ✓    | Callback fired after successful login.          |
| `authType`   | `string`   |     ✗    | Default: `email`. Future support for others.    |
| `rememberMe` | `boolean`  |     ✗    | Shows a "Remember Me" checkbox (default: true). |

---

## Expected Backend Response

The plugin expects your API to return JSON like this:

```json
{
  "success": true,
  "token": "optional-jwt-token",
  "user": { "id": 1, "email": "user@example.com" }
}
```

If `success` is false, the plugin will show an error.

---

## Customization

### Styling

You can override default styles with your own CSS.

```css
.sharko-auth-card button {
  border-radius: 8px;
}
```

### Text Labels

Future versions will support customizable text strings.

---

## Security Notes

* Always use **HTTPS** in production
* Never log raw passwords
* Prefer **HTTP‑only cookies** or secure token storage
* Validate authentication on the server — not only in the UI

---

## Troubleshooting

| Problem            | Possible Fix                                     |
| ------------------ | ------------------------------------------------ |
| Login always fails | Check backend response format and endpoint URL   |
| Network error      | Confirm server is running and CORS is configured |
| Styles look broken | Verify CSS conflicts and load order              |

---

## Roadmap

* OAuth / Social login
* Passwordless options
* Theme builder
* Translations support

---

## Contributing

Pull requests and issues are welcome! Open one on the project GitHub page.

---

Thanks for using **Sharko Auth**! ✨
