const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../schemas/UserSchema");

router.get("/", (req, res) => {
  const pageData = {
    title: "Registration",
  };
  res.status(200).render("register", pageData);
});

router.post("/", async (req, res) => {
  //console.log(req.body);
  const pageData = req.body;
  pageData.title = "Registration";

  const name = req.body.name.trim();
  const email = req.body.email.trim();
  const username = req.body.username.trim();
  const password = req.body.password.trim();

  if (name && email && username && password) {
    const user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    }).catch((err) => {
      console.log(err);
      pageData.errorMessage = "Something Went Wrong...!";
      return res.status(400).render("register", pageData);
    });
    if (user == null) {
      //store database
      const data = req.body;
      data.password = await bcrypt.hash(data.password, 10);
      User.create(data).then((user) => {
        return res.status(201).json(user);
      });
    } else {
      //check username
      pageData.errorMessage = "Username or Email already Taken...!";
      return res.status(400).render("register", pageData);
    }
  } else {
    pageData.errorMessage = "Make sure each field as valid value";
  }

  res.status(200).render("register", pageData);
});

module.exports = router;
