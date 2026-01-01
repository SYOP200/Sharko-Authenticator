# Customizing Sharko — Personal & Company Branding Guide

This guide explains how to customize Sharko so it fits:

✔ your personal projects
✔ your company branding
✔ different authentication needs

Use this as a checklist while you build.

---

## 1️⃣ Branding Basics

Sharko should feel like **part of your product**, not a separate widget.

You can customize:

* Colors
* Fonts
* Button styles
* Logo or app name
* Text/labels

### Example brand tokens (recommended)

Create a CSS variables file:

```css
:root {
  --sharko-primary: #3b82f6;
  --sharko-accent: #0ea5e9;
  --sharko-bg: #ffffff;
  --sharko-text: #0f172a;
}
```

Then style Sharko elements using those variables.

---

## 2️⃣ Adding Your Logo & Name

Use the `appName` prop / option:

```js
SharkoAuth.init({
  appName: "Acme Dashboard",
  ...
})
```

For logos, place an image above the card in your page or wrap the component in a header container.

> Keep logos small and accessible (alt text required).

---

## 3️⃣ Custom Text & Language

You may want different wording, for example:

* "Sign in to continue"
* "Welcome back"
* Translated messages

Create a configuration object for future multi‑language support:

```js
const messages = {
  title: "Sign in to your account",
  error: "Invalid login details",
};
```

Then use them inside your integration.

---

## 4️⃣ Company Security Policies

Companies often need:

* Minimum password rules
* Session timeout
* 2‑factor support (future)

These rules should live in **your backend**, not Sharko UI.

Sharko = interface
Backend = rules + enforcement

---

## 5️⃣ White‑Label Mode (Best Practices)

To make Sharko invisible as a third‑party product:

✔ Remove Sharko mentions in UI
✔ Match your fonts and spacing
✔ Align with your design system

Example:

```css
.sharko-auth-card {
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0,0,0,.08);
  font-family: Inter, system-ui, sans-serif;
}
```

---

## 6️⃣ Custom Layouts

You can embed Sharko:

* in modals
* inside side panels
* on full login pages

Example container:

```html
<div class="login-wrapper">
  <!-- Sharko renders inside here -->
</div>
```

---

## 7️⃣ Accessibility Checklist

Make sure:

* Text contrast is readable
* Inputs have labels
* Tab navigation works
* Error messages are clear

Accessibility improves usability for everyone.

---

## 8️⃣ Personal Use Tips

For portfolios, hobby apps, or school projects:

* Keep branding simple
* Use playful colors if you want
* Avoid complicated backend rules

Focus on learning and usability.

---

## 9️⃣ Company Use Tips

For startups or production teams:

* Follow brand guidelines
* Use secure backend storage
* Add audit logs + rate limits (server side)
* Add legal pages (Privacy / Terms)

Consistency builds trust.

---

## 🔟 Roadmap for Customization

Future planned ideas:

* Full theme editor
* Translation packs
* Company templates
* Admin panel for settings

---

## Final Reminder

Sharko should stay **simple, secure, and on‑brand**.

Customize visually — but always keep security logic on the server.
