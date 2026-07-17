const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "HeaderGuard API",
    status: "Running 🚀"
  });
});

app.post("/api/scan", async (req, res) => {
  try {
    let { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required"
      });
    }

    // Add https:// if missing
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    const response = await axios.get(url);

    const headers = response.headers;

    const checks = {
      "Content-Security-Policy": !!headers["content-security-policy"],
      "Strict-Transport-Security": !!headers["strict-transport-security"],
      "X-Frame-Options": !!headers["x-frame-options"],
      "X-Content-Type-Options": !!headers["x-content-type-options"],
      "Referrer-Policy": !!headers["referrer-policy"],
      "Permissions-Policy": !!headers["permissions-policy"]
    };

    const passed = Object.values(checks).filter(Boolean).length;

    const score = Math.round((passed / Object.keys(checks).length) * 100);

    res.json({
      success: true,
      score,
      checks,
      headers
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Website could not be scanned."
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});