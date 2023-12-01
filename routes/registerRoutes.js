const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  const pageData = {
    title: "Registration",
    message: "Welcome to my page",
  };
  res.status(200).render("register", pageData);
});

router.get("/test", (req, res) => {
  res.send("Register Test Page");
});

module.exports = router;
