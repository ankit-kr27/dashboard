
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/api/v1/comparision_data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM assignment_data_2");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/api/v1/sales_data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM assignment_data_4");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/api/v1/top_products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM assignment_data_6");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.use(
  "/proxy",
  createProxyMiddleware({
    target: process.env.TARGET_API_URL || "http://13.201.49.61:8020",
    changeOrigin: true,
    pathRewrite: {
      "^/proxy": "", 
    },
    secure: false, 
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
