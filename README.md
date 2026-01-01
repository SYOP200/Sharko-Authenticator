<img width="1395" height="320" alt="pixil-frame-0" src="https://github.com/user-attachments/assets/87c3d710-0bad-4a58-9629-47c85bd573e4" />

![GitHub top language](https://img.shields.io/github/languages/top/SYOP200/Sharko-Authenticator?style=flat-square&color=0088ff)
![GitHub Repo stars](https://img.shields.io/github/stars/SYOP200/Sharko-Authenticator%20?style=flat-square&color=0088ff)
![GitHub watchers](https://img.shields.io/github/watchers/SYOP200/Sharko-Authenticator?style=flat-square&color=0088ff)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/SYOP200/Sharko-Authenticator?style=flat-square&color=0088ff)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/SYOP200/Sharko-Authenticator?style=flat-square&label=PRs&color=0088ff)
![GitHub License](https://img.shields.io/github/license/SYOP200/Sharko-Authenticator?style=flat-square&color=0088ff)


---
## Overview 
Sharko is a simple web plugin for websites. Sharko eliminates the hassle of scripting your own authenticator into an app or website. Save login credentials easily and sign in to your application or website.

## Table of contents
- [Installation](https://github.com/SYOP200/Sharko-Authenticator/edit/dev/README.md#sharko-auth--installation-guide)
- [Features](https://github.com/SYOP200/Sharko-Authenticator/new/main?filename=README.md#features)
- [Security](https://github.com/SYOP200/Sharko-Authenticator/new/main?filename=README.md#security)
- [Use Cases](https://github.com/SYOP200/Sharko-Authenticator/new/main?filename=README.md#use-cases)
- [Roadmap](https://github.com/SYOP200/Sharko-Authenticator/new/main?filename=README.md#roadmap)
- [Contributing](https://github.com/SYOP200/Sharko-Authenticator/new/main?filename=README.md#contributing)
- [License](https://github.com/SYOP200/Sharko-Authenticator/new/main?filename=README.md#license)
---

## ⚠️ Disclaimer
Sharko is provided “as is”, without warranty of any kind, express or implied. While we aim to make Sharko reliable and secure, we do not guarantee that it will be free of bugs, vulnerabilities, interruptions, or errors. <br>
By using this plugin, you acknowledge and agree that: <br>
- You are responsible for how Sharko is implemented and used within your application or website. <br>
- Sharko is not a complete security solution and should be used in accordance with standard security best practices. <br>
- The maintainers are not liable for any data loss, security breaches, service interruptions, or damages resulting from the use or misuse of this plugin. <br>
- You should thoroughly test Sharko in a development or staging environment before deploying it to production. <br>
- Sharko may change over time, and updates may introduce breaking changes or new behavior. <br>

If your application handles sensitive, regulated, or high-risk data, you should conduct a professional security review before using Sharko in production. <br>

## Sharko Auth — Installation Guide
Sharko Auth is a lightweight, configurable authentication plugin that works on any website and modern React apps. <br>
This guide covers: <br>
✅ React plugin installation <br>
✅ Manual (copy-paste) installation <br>
✅ Theme setup <br> 
✅ Basic usage <br>
See more information in the [Documentation](https://github.com/SYOP200/Sharko-Authenticator/tree/dev/Documentation)
### Requirements
- React Plugin <br>
- Node.js 16+ <br>
- React 17 or higher
- A backend authentication endpoint (/api/login or similar)
### Web / HTML Version
Any static or dynamic website <br>
No build tools required <br>
### Installation (React) <br>
#### 1️⃣ Add Sharko to your project <br>
If published to npm (recommended future setup): <br>
`npm install sharko-auth` <br>
or with Yarn: <br>
`yarn add sharko-auth` <br> 
Until published, you can copy the files manually (see below). <br>
#### 2️⃣ Import the component <br>
`import SharkoAuth from "sharko-auth";` <br>
or (local copy): <br>
`import SharkoAuth from "./SharkoAuth";` <br>
#### 3️⃣ Use it in your app <br>
```
<SharkoAuth
  appName="My App"
  authType="email"
  endpoint="/api/login"
  rememberMe
  passwordReset
  onSuccess={(data) => {
    console.log("Logged in:", data);
    window.location.href = "/dashboard";
  }}
/>
```
#### That’s it 🎉 
You now have a working authentication UI. <br>
### Themes (Optional but Recommended)
Sharko ships with built-in themes and full customization support. <br>


#### Built-in themes: <br>
- `purple` (default) <br>
- `dark` <br>
- `neon` <br>
- `minimal` <br>
```
<SharkoAuth theme="dark" /> 
Override theme values
<SharkoAuth
  theme="purple"
  themeOverrides={{
    primary: "#22c55e",
    background: "#020617"
  }}
/>
```
#### Fully custom theme
```
<SharkoAuth
  theme={{
    background: "#000",
    cardBackground: "#111",
    primary: "#f97316",
    primaryGradient: "linear-gradient(135deg,#f97316,#ea580c)",
    text: "#fff",
    subtext: "#aaa",
    border: "#333",
    shadow: "0 0 40px rgba(249,115,22,0.4)"
  }}
/>
```
### Installation (Plain HTML / No React)
#### 1️⃣ Copy the plugin file
Download or copy:
`sharko-auth.plugin.js`
#### 2️⃣ Add it to your site
```
<script src="sharko-auth.plugin.js"></script>
<script>
  SharkoAuth.init({
    appName: "My Website",
    authType: "email",
    endpoint: "/api/login",
    onSuccess: (data) => {
      console.log("Logged in!", data);
    }
  });
</script>
```
No frameworks. No bundlers. No setup.
### Backend Requirements
Sharko expects your login endpoint to return:
```
{
  "success": true
}
```
or on failure:
```
{
  \"success": false
}
```
#### You control:
- Sessions
- JWTs
- Cookies
- OAuth
- Storage
Sharko only handles the UI.
### Manual Installation (Local Development)
If you’re not using npm yet:
```
/src
├── SharkoAuth.jsx
├── sharkoThemes.js
└── App.jsx
```
Then import normally:
`import SharkoAuth from "./SharkoAuth";`
### Development
`npm install`
`npm run dev`

## Features
-  Secure login credential handling
-  Fast and lightweight web plugin
-  Easy integration with existing apps & websites
-  No need to build an authenticator from scratch
-  Designed for modern web projects

## Security
Sharko is built with security-first principles: <br>
Encrypted credential storage <br>
Secure session handling <br>
Best practices for modern authentication <br>
> [!WARNING]
> 
> Always follow standard security guidelines and use HTTPS in production.

## Use Cases
- Personal projects
- SaaS dashboards
- Internal tools
- MVPs & prototypes
- Small to medium web apps

## Roadmap
 - [x] OAuth provider support
 - [ ] Passwordless authentication
 - [ ] Admin dashboard
 - [ ] Role-based access control
 - [ ] API key authentication
 
## Contributing
Contributions are welcome! <br>
1. Fork the repository <br>
2. Create a feature branch <br>
3. Commit your changes <br>
4. Open a pull request <br>

## License
CC0 1.0 Universal license
```
    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
    INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
    HEREUNDER.
```

**🌊 Built for Developers** <br>
Sharko is designed to save time, reduce complexity, and make authentication painless. <br>
If you like the project, give it a ⭐ on GitHub! <br>


© Sharko Contributors
