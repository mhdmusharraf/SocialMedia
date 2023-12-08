const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  const pageData = {
    title: "User Login",
  };
  res.status(200).render("login", pageData);
});

module.exports = router;
