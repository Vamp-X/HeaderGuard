import { useState } from "react";
import axios from "axios";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function scan() {
    if (!url) {
      alert("Enter a website URL");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/scan", {
        url,
      });

      setResult(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Scan failed");
    }

    setLoading(false);
  }

  const grade = result
    ? result.score >= 90
      ? "A+"
      : result.score >= 80
      ? "A"
      : result.score >= 70
      ? "B"
      : result.score >= 50
      ? "C"
      : "D"
    : "-";

  const descriptions = {
    "Content-Security-Policy": "Protects against XSS attacks.",
    "Strict-Transport-Security": "Forces HTTPS connections.",
    "X-Frame-Options": "Prevents clickjacking.",
    "X-Content-Type-Options": "Stops MIME-type sniffing.",
    "Referrer-Policy": "Controls referrer information.",
    "Permissions-Policy": "Restricts browser features.",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-slate-900 rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <FaShieldAlt className="text-blue-500" size={40} />
          <h1 className="text-5xl font-bold">HeaderGuard</h1>
        </div>

        {/* Search */}
        <div className="flex gap-3">
          <input
            className="flex-1 bg-slate-800 rounded-xl p-4 outline-none"
            placeholder="example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            onClick={scan}
            className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 font-semibold"
          >
            {loading ? "Scanning..." : "Scan"}
          </button>
        </div>

        {/* Website */}
        {url && (
          <div className="flex justify-center items-center gap-3 mt-8">
            <img
              src={`https://www.google.com/s2/favicons?domain=${url}&sz=64`}
              width={40}
              alt="favicon"
              className="rounded"
            />

            <h2 className="text-2xl font-semibold">{url}</h2>
          </div>
        )}

        {result && (
          <>
            {/* Score */}
            <div className="w-56 h-56 mx-auto mt-10">
              <CircularProgressbar
                value={result.score}
                text={`${result.score}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  trailColor: "#1e293b",
                  pathColor:
                    result.score >= 80
                      ? "#22c55e"
                      : result.score >= 50
                      ? "#facc15"
                      : "#ef4444",
                })}
              />
            </div>

            <p className="text-center text-xl mt-4 text-gray-400">
              Security Score
            </p>

            {/* Grade */}
            <div className="text-center mt-4">
              <span className="bg-blue-600 px-5 py-2 rounded-full text-lg font-bold">
                Grade {grade}
              </span>
            </div>

            {/* Summary */}
            <div className="grid md:grid-cols-3 gap-4 mt-10">

              <div className="bg-slate-800 rounded-xl p-5 text-center">
                <h2 className="text-4xl font-bold text-blue-400">
                  {Object.keys(result.checks).length}
                </h2>

                <p className="text-gray-400 mt-2">
                  Headers Checked
                </p>
              </div>

              <div className="bg-green-900 rounded-xl p-5 text-center">
                <h2 className="text-4xl font-bold">
                  {Object.values(result.checks).filter(Boolean).length}
                </h2>

                <p className="mt-2">
                  Passed
                </p>
              </div>

              <div className="bg-red-900 rounded-xl p-5 text-center">
                <h2 className="text-4xl font-bold">
                  {Object.values(result.checks).filter((v) => !v).length}
                </h2>

                <p className="mt-2">
                  Missing
                </p>
              </div>

            </div>

            {/* Header Cards */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {Object.entries(result.checks).map(([key, value]) => (

                <div
                  key={key}
                  className={`rounded-xl border p-5 transition-all ${
                    value
                      ? "bg-green-950 border-green-500"
                      : "bg-red-950 border-red-500"
                  }`}
                >

                  <div className="flex justify-between items-center">

                    <h3 className="font-semibold text-lg">
                      {key}
                    </h3>

                    {value ? (
                      <FaCheckCircle
                        className="text-green-400"
                        size={22}
                      />
                    ) : (
                      <FaTimesCircle
                        className="text-red-400"
                        size={22}
                      />
                    )}

                  </div>

                  <p className="text-sm text-gray-400 mt-3">
                    {descriptions[key]}
                  </p>

                </div>

              ))}

            </div>
          </>
        )}
      </div>
    </div>
  );
}