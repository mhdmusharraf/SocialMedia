const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");

const app = express();
const port = "3000";

app.set("view engine", "pug");
app.set("views", "views");
const staticUri = path.join(__dirname, "public");
app.use(express.static(staticUri));
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
const registerRoute = require("./routes/registerRoutes");
const loginRoute = require("./routes/loginRoutes");
app.use("/register", registerRoute);
app.use("/login", loginRoute);

app.get(["/", "/home", "index"], (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
