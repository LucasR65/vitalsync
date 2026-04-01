const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date(), version: "1.0.0" });
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});

// AJOUT : endpoint stats
app.get("/api/stats", (req, res) => {
  res.json({ totalUsers: 0, totalActivities: 0 });
});

app.listen(3000, () => console.log("VitalSync API on :3000"));