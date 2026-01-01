# Sharko Website / Application — Documentation

This document explains how the Sharko website (marketing site + demo app) is organized, how to edit it, and how to deploy it.

---

## 1. Overview

The Sharko website has two main purposes:

1. **Explain the product** — what Sharko Auth is and why people should use it.
2. **Demonstrate the plugin** — let users try the login UI in a safe demo environment.

The site is designed to be:

* Fast
* Simple to navigate
* Developer‑friendly
* Mobile responsive

---

## 2. Structure & Pages

A typical structure looks like this:

```
root/
├── index.html            # Home / Landing page
├── docs/                 # Public docs (optional)
├── demo/                 # Demo pages that use the plugin
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
└── api/ (optional)       # Example backend endpoints (if hosted together)
```

### Core Pages

#### **Home (index.html)**

Contains:

* Hero section (what Sharko is)
* Features
* Screenshots / GIFs
* CTA buttons (GitHub / Docs / Demo)

#### **Docs Page**

Either links to GitHub or hosts documentation directly.

#### **Demo Page**

A live preview of Sharko Auth embedded into a test page.

---

## 3. Technologies Used

The website can be built with:

* **HTML / CSS / JavaScript** (recommended for simplicity)
* Optional: React, Vite, or another framework for more dynamic content

Recommended libraries (optional):

* Tailwind or plain CSS
* Highlight.js for code samples

---

## 4. Demo Integration

Example demo embed:

```html
<div id="demo-auth"></div>
<script src="/dist/sharko-auth.plugin.js"></script>
<script>
  SharkoAuth.init({
    appName: "DemoSite",
    endpoint: "/api/login",
    onSuccess: (data) => alert("Logged in!"),
  });
</script>
```


---

## 5. Styling & Branding

Guidelines:

* Keep colors consistent
* Avoid too many fonts
* Maintain accessible contrast levels

Place site styles in:

```
assets/css/style.css
```

---

## 6. SEO & Metadata

Add tags in `<head>`:

```html
<meta name="description" content="Sharko Auth — simple authentication plugin for websites and apps" />
<meta property="og:title" content="Sharko Auth" />
<meta property="og:type" content="website" />
<meta property="og:image" content="/assets/img/preview.png" />
```

---

## 7. Analytics (Optional)

If used, keep privacy‑friendly settings and always disclose in a Privacy Policy.

---

## 8. Deployment

### Static hosting options

* GitHub Pages
* Netlify
* Vercel

Basic deploy steps (example: Netlify):

1. Push to GitHub
2. Connect repo to Netlify
3. Set build as **static** (no build command needed if plain HTML)
4. Deploy

---

## 9. Security Notes

* Never store secrets in client code
* Use HTTPS
* Mock demo logins
* Validate everything server‑side

---

## 10. Roadmap Ideas

* Blog post section
* Live code playground
* Interactive setup wizard

---

## 11. Maintenance

Review checklist:

* Links working
* Docs up to date
* Screenshots match current UI
* Demo still functioning

---
