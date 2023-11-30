const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Register Page");
});

router.get("/test", (req, res) => {
  res.send("Register Test Page");
});

module.exports = router;
