<div align="center">

# 🛡️ HeaderGuard

### Scan HTTP Security Headers & Analyze Website Security

A modern full-stack web application that scans a website's HTTP security headers, calculates a security score, and helps developers identify missing security best practices.

![GitHub stars](https://img.shields.io/github/stars/Vamp-X/HeaderGuard?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Vamp-X/HeaderGuard?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/Vamp-X/HeaderGuard?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Express](https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express)

</div>

---

## 📖 Overview

HeaderGuard analyzes a website's HTTP response headers and checks for important security headers such as:

- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

It then generates a security score and displays which headers are present or missing.

---

# 📸 Screenshots

> Replace these placeholders after taking screenshots.

### 🏠 Home Page

```
assets/home.png
```

### 📊 Scan Result

```
assets/scan-result.png
```

---

# ✨ Features

- 🔍 Scan any website
- 🛡️ Detect important HTTP security headers
- 📊 Security score calculation
- 🏆 Security grade (A+ to D)
- 🌐 Website favicon display
- 📈 Dashboard summary
- ✅ Pass / Fail indicators
- 🌙 Modern dark UI
- 📱 Responsive design

---

# 🛠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Icons
- React Circular Progressbar

### Backend

- Node.js
- Express.js
- Axios
- Helmet
- CORS

---

# 📂 Project Structure

```text
HeaderGuard/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/Vamp-X/HeaderGuard.git
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📊 Security Headers Checked

| Header | Purpose |
|---------|---------|
| Content-Security-Policy | Helps prevent Cross-Site Scripting (XSS) attacks |
| Strict-Transport-Security | Forces browsers to use HTTPS |
| X-Frame-Options | Protects against clickjacking |
| X-Content-Type-Options | Prevents MIME-type sniffing |
| Referrer-Policy | Controls how referrer information is shared |
| Permissions-Policy | Restricts browser features and APIs |

---

# 💡 Future Improvements

- 📄 Export scan reports as PDF
- 🌍 Scan history
- ⭐ Bookmark favorite websites
- 🌐 Deploy online
- 🔐 User authentication
- 📈 Additional security header analysis

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add my feature"
```

4. Push the branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

---

<div align="center">

Made with ❤️ using React & Express

⭐ If you found this project useful, consider giving it a star!

</div>