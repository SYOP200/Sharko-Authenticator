import React, { useState } from 'react';
import { Key, Code, Copy, Check, User, Lock, Mail, Settings } from 'lucide-react';

export default function Sharko() {
  const [appName, setAppName] = useState('');
  const [authType, setAuthType] = useState('email');
  const [includeRememberMe, setIncludeRememberMe] = useState(true);
  const [includePasswordReset, setIncludePasswordReset] = useState(true);
  const [codeFramework, setCodeFramework] = useState('html');
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const generateCode = () => {
    if (codeFramework === 'html') {
      return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${appName || 'My App'} - Login</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:sans-serif;background:linear-gradient(135deg,#667eea,#764ba2);min-height:100vh;display:flex;justify-content:center;align-items:center}
.container{background:#fff;padding:2rem;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);width:100%;max-width:400px}
h1{color:#667eea;font-size:2rem;text-align:center;margin-bottom:0.5rem}
p{color:#666;text-align:center;margin-bottom:2rem}
label{display:block;margin-bottom:0.5rem;color:#333;font-weight:500}
input{width:100%;padding:0.75rem;border:2px solid #e0e0e0;border-radius:8px;font-size:1rem;margin-bottom:1rem}
input:focus{outline:none;border-color:#667eea}
button{width:100%;padding:0.875rem;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer}
button:hover{opacity:0.9}${includeRememberMe ? `
.check{display:flex;align-items:center;margin-bottom:1rem}
.check input{width:auto;margin:0 0.5rem 0 0}
.check label{margin:0;font-weight:normal}` : ''}${includePasswordReset ? `
.reset{text-align:center;margin-top:1rem}
.reset a{color:#667eea;text-decoration:none}` : ''}
</style>
</head>
<body>
<div class="container">
<h1>${appName || 'My App'}</h1>
<p>Sign in to your account</p>
<label>${authType === 'email' ? 'Email' : authType === 'username' ? 'Username' : 'Phone'}</label>
<input type="${authType === 'email' ? 'email' : authType === 'phone' ? 'tel' : 'text'}" id="user" placeholder="Enter ${authType}">
<label>Password</label>
<input type="password" id="pass" placeholder="Enter password">${includeRememberMe ? `
<div class="check"><input type="checkbox" id="rem"><label>Remember me</label></div>` : ''}
<button id="btn">Sign In</button>${includePasswordReset ? `
<div class="reset"><a href="#reset">Forgot password?</a></div>` : ''}
</div>
<script>
document.getElementById('btn').onclick=()=>{
const user=document.getElementById('user').value;
const pass=document.getElementById('pass').value;${includeRememberMe ? `
const rem=document.getElementById('rem').checked;` : ''}
console.log({user,pass${includeRememberMe ? ',rem' : ''}});
// Send to backend: fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user,pass${includeRememberMe ? ',rem' : ''}})})
alert('Login submitted!');
}
</script>
</body>
</html>`;
    } else if (codeFramework === 'react') {
      return `import React, { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');${includeRememberMe ? `
  const [rem, setRem] = useState(false);` : ''}

  const handleSubmit = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, pass${includeRememberMe ? ', rem' : ''} })
    });
    const data = await res.json();
    if (data.success) window.location.href = '/dashboard';
    else alert('Login failed');
  };

  return (
    <div style={{fontFamily:'sans-serif',background:'linear-gradient(135deg,#667eea,#764ba2)',minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'0 20px 60px rgba(0,0,0,0.3)',width:'100%',maxWidth:'400px'}}>
        <h1 style={{color:'#667eea',fontSize:'2rem',textAlign:'center',marginBottom:'0.5rem'}}>${appName || 'My App'}</h1>
        <p style={{color:'#666',textAlign:'center',marginBottom:'2rem'}}>Sign in</p>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#333',fontWeight:'500'}}>${authType === 'email' ? 'Email' : authType === 'username' ? 'Username' : 'Phone'}</label>
        <input value={user} onChange={e=>setUser(e.target.value)} style={{width:'100%',padding:'0.75rem',border:'2px solid #e0e0e0',borderRadius:'8px',fontSize:'1rem',marginBottom:'1rem'}} placeholder="Enter ${authType}" />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#333',fontWeight:'500'}}>Password</label>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} style={{width:'100%',padding:'0.75rem',border:'2px solid #e0e0e0',borderRadius:'8px',fontSize:'1rem',marginBottom:'1rem'}} placeholder="Enter password" />${includeRememberMe ? `
        <div style={{display:'flex',alignItems:'center',marginBottom:'1rem'}}>
          <input type="checkbox" checked={rem} onChange={e=>setRem(e.target.checked)} />
          <label style={{marginLeft:'0.5rem'}}>Remember me</label>
        </div>` : ''}
        <button onClick={handleSubmit} style={{width:'100%',padding:'0.875rem',background:'linear-gradient(135deg,#667eea,#764ba2)',color:'#fff',border:'none',borderRadius:'8px',fontSize:'1rem',fontWeight:'600',cursor:'pointer'}}>Sign In</button>${includePasswordReset ? `
        <div style={{textAlign:'center',marginTop:'1rem'}}><a href="#reset" style={{color:'#667eea',textDecoration:'none'}}>Forgot password?</a></div>` : ''}
      </div>
    </div>
  );
}`;
    } else {
      return `// Node.js + Express Backend
// Install: npm install express bcrypt jsonwebtoken

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = []; // Use database in production

// Register
app.post('/api/register', async (req, res) => {
  const { user, pass } = req.body;
  if (users.find(u => u.user === user)) return res.status(400).json({ success: false, msg: 'User exists' });
  users.push({ id: users.length + 1, user, pass: await bcrypt.hash(pass, 10) });
  res.json({ success: true });
});

// Login
app.post('/api/login', async (req, res) => {
  const { user, pass${includeRememberMe ? ', rem' : ''} } = req.body;
  const u = users.find(u => u.user === user);
  if (!u || !(await bcrypt.compare(pass, u.pass))) return res.status(401).json({ success: false, msg: 'Invalid' });
  const token = jwt.sign({ id: u.id, user: u.user }, 'secret', { expiresIn: ${includeRememberMe ? "rem ? '30d' : '1h'" : "'1h'"} });
  res.json({ success: true, token });
});

// Protected route
app.get('/api/profile', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false });
  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(403).json({ success: false });
    res.json({ success: true, user });
  });
});${includePasswordReset ? `

// Reset password
app.post('/api/reset', (req, res) => {
  const { user } = req.body;
  const u = users.find(u => u.user === user);
  if (u) console.log('Reset token:', jwt.sign({ id: u.id }, 'reset-secret', { expiresIn: '1h' }));
  res.json({ success: true, msg: 'If account exists, reset link sent' });
});` : ''}

app.listen(3000, () => console.log('${appName || 'Server'} running on port 3000'));`;
    }
  };

  const handleCopy = () => {
    const code = generateCode();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateCode = () => {
    if (!appName.trim()) {
      alert('Please enter an app name first!');
      return;
    }
    setShowCode(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-white p-3 rounded-2xl shadow-lg">
              <Key className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-white">Sharko</h1>
          </div>
          <p className="text-white text-lg opacity-90">
            Generate beautiful authentication code in seconds!
          </p>
        </div>

        {/* Configuration Panel */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6 text-purple-600" />
            Configure Your Login
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* App Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                App/Website Name
              </label>
              <input
                type="text"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="My Awesome App"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
              />
            </div>

            {/* Auth Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Login Method
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'email', icon: Mail, label: 'Email' },
                  { value: 'username', icon: User, label: 'Username' },
                  { value: 'phone', icon: Lock, label: 'Phone' }
                ].map(({ value, icon: Icon, label }) => (
                  <button
                    key={value}
                    onClick={() => setAuthType(value)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition ${
                      authType === value
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Framework */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Code Framework
              </label>
              <select
                value={codeFramework}
                onChange={(e) => setCodeFramework(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
              >
                <option value="html">HTML + CSS + JavaScript</option>
                <option value="react">React Component</option>
                <option value="backend">Node.js Backend</option>
              </select>
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Features
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeRememberMe}
                    onChange={(e) => setIncludeRememberMe(e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="text-gray-700">Remember Me</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includePasswordReset}
                    onChange={(e) => setIncludePasswordReset(e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="text-gray-700">Password Reset</span>
                </label>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerateCode}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Code className="w-6 h-6" />
            Generate Authentication Code
          </button>
        </div>

        {/* Code Display */}
        {showCode && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Code className="w-6 h-6 text-purple-600" />
                Your Authentication Code
              </h2>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{generateCode()}</code>
              </pre>
            </div>
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>Next Steps:</strong> Copy this code and paste it into your project. 
                {codeFramework === 'backend' && ' Remember to install the required packages with npm!'}
                {codeFramework === 'html' && ' Save it as an HTML file and open in your browser!'}
                {codeFramework === 'react' && ' Add it to your React project and customize as needed!'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}