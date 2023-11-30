const express = require("express");

const app = express();
const port = "3000";

//Routes
const registerRoute = require("./routes/registerRoutes");
app.use("/register", registerRoute);

app.get(["/", "/home", "index"], (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
