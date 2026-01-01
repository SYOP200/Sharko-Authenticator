# Sharko — Full Installation & Setup Guide

This guide walks you step‑by‑step through installing Sharko, connecting it to a backend, and running a working demo.

It is written for beginners and experienced developers — follow it from top to bottom.

---

## 1️⃣ Prerequisites

Before installing Sharko, make sure you have:

✔ A computer with Windows, macOS, or Linux
✔ A web browser (Chrome, Firefox, etc.)
✔ Basic knowledge of HTML/JS (helpful but not required)

If you plan to use Sharko with React or Node:

✔ Node.js (v16+) installed — [https://nodejs.org](https://nodejs.org)
✔ npm (comes with Node)

To check, run:

```bash
node -v
npm -v
```

If both return versions, you're good.

---

## 2️⃣ Download or Install Sharko

### Option A — Install through npm (React / JS projects)

```bash
npm install sharko-auth-plugin
```

This is best if you're building an app or site using a modern build system.

### Option B — Use Script Tag (Plain HTML sites)

Download or include the compiled plugin file:

```html
<script src="/dist/sharko-auth.plugin.js"></script>
```

> Place it **before the closing `</body>` tag** for best performance.

---

## 3️⃣ Add Sharko to Your Page

### React Example

```jsx
import SharkoAuth from "sharko-auth-plugin";

export default function Login() {
  const handleSuccess = (data) => console.log("Logged in:", data);

  return (
    <SharkoAuth
      appName="MyApp"
      endpoint="/api/login"
      onSuccess={handleSuccess}
    />
  );
}
```

### Plain JavaScript Example

```html
<div id="auth"></div>

<script>
  SharkoAuth.init({
    appName: "My Website",
    endpoint: "/api/login",
    onSuccess: (data) => console.log("Success!", data)
  });
</script>
```

If you see the login box — Sharko is installed correctly 🎉

---

## 4️⃣ Connect to a Backend API

Sharko **does not store users**. It sends requests to your server.

Your backend should accept:

```json
{
  "email": "user@example.com",
  "password": "secret"
}
```

and respond like:

```json
{
  "success": true,
  "token": "optional-jwt",
  "user": { "id": 1, "email": "user@example.com" }
}
```

If `success` is false, Sharko shows an error message.

---

## 5️⃣ Example Development Server (Optional)

Use this only for testing.

```bash
npm init -y
npm install express cors jsonwebtoken body-parser
```

Create `server.js` and add a simple route returning mock data.

> Do not use test credentials in production.

---

## 6️⃣ File Structure Recommendation

```
project/
├── dist/
├── src/
├── public/
├── server/ (optional)
└── index.html
```

Keeping things separated avoids confusion later.

---

## 7️⃣ Common Problems & Fixes

| Issue              | Fix                                           |
| ------------------ | --------------------------------------------- |
| Blank screen       | Check console errors + file paths             |
| CORS errors        | Allow requests from frontend domain           |
| Login always fails | Ensure backend returns `success: true` format |
| "Script not found" | Verify plugin file path in `<script>` tag     |

---

## 8️⃣ Production Tips

🔒 Always use HTTPS
🔒 Never expose secrets in client code
🔒 Validate authentication **on server only**

Minify your assets and host on:

* Netlify
* Vercel
* GitHub Pages

---

## 9️⃣ Updating Sharko

```bash
npm update sharko-auth-plugin
```

Then rebuild your project.

---

## 10️⃣ Need Help?

Check:

* Documentation
* GitHub issues
* Example demos

You can also keep improving this guide as Sharko grows.

---

Thanks for installing **Sharko Auth** 🚀

---

## 11️⃣ Visual Walkthrough (Screenshots)

Below are sample screenshots you can show in your docs, README, or website.

### Login UI Example

![Sharko Login Demo](sandbox:/mnt/data/A_set_of_three_digital_screenshots_demonstrates_th.png)

### Product Promo Layout

![Sharko Promo](sandbox:/mnt/data/A_promotional_series_of_digital_screenshots_showca.png)

> Replace or add your own screenshots as your UI evolves.

---

## 12️⃣ Architecture Diagram (How Sharko Fits In)

```
         (1) User clicks Login
                 |
                 v
+-------------+        (2) Sends credentials        +-----------------+
|  User       | ----------------------------------> |  Sharko UI      |
|  Browser    |                                     |  (Frontend)     |
+-------------+                                     +-----------------+
                                                           |
                          (3) Secure API request           v
                                                    +-------------------+
                                                    |  Your API Server  |
                                                    |  Auth / Sessions  |
                                                    +-------------------+
                                                              |
                               (4) Validate + return result   v
                                                        +------------+
                                                        | Database   |
                                                        | (Users)    |
                                                        +------------+
```

**Flow summary**
1️⃣ User enters email + password
2️⃣ Sharko sends request to your backend
3️⃣ Backend validates and checks database
4️⃣ Backend returns success/error + optional token

Sharko handles only the UI — your backend controls the authentication logic securely.

---

## 13️⃣ Environment Variables

Environment variables help keep secrets **out of the code**.

Create a file named `.env` (never commit to Git):

```
API_URL=https://your-domain.com/api
JWT_SECRET=your-secret-key
NODE_ENV=development
```

Then load variables in your backend (example Node/Express):

```js
require("dotenv").config();
const api = process.env.API_URL;
```

> Never expose sensitive secrets in browser JavaScript.

---

## 14️⃣ Docker Support (Optional)

Run Sharko + backend inside containers for consistent environments.

### Example `Dockerfile`

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Example `docker-compose.yml`

```yaml
version: "3"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - API_URL=http://backend:4000
  backend:
    build: ./server
    ports:
      - "4000:4000"
```

Run:

```bash
docker compose up --build
```

---

## 15️⃣ Hosting Options

### Static hosting (frontend only)

* Netlify
* Vercel
* GitHub Pages

### Full‑stack hosting

* Render
* Railway
* Fly.io

General deployment flow:

1. Build project
2. Upload build folder or connect repo
3. Set environment variables in host dashboard
4. Deploy

---

## 16️⃣ Debugging Guide

### 🔍 Sharko not showing up

* Check browser console for errors
* Confirm script path is correct
* Ensure plugin loads after DOM renders

### ❌ Login keeps failing

* Inspect Network tab → verify JSON response
* Ensure response contains `{ success: true }`
* Check CORS configuration on backend

### 🌐 CORS errors

* Allow your frontend domain in server CORS settings

### 🏁 Last resort checklist

* Clear cache
* Restart dev server
* Reinstall dependencies

---
