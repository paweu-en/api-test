const express = require("express");
const webhook = require("../controllers/webhook");
const router = express.Router();

router.post("/api/rebuild/", webhook);

router.use("*", (req, res) =>
  res.status(404).json({ message: "Not found", status: 404 })
);

module.exports = router;
