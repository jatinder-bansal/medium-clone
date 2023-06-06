if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");
const path = require("path");
const app = express();
const router = require("./routers");
const bodyParser = require("body-parser");
dotenv.config({ path: "./config.env" });
app.use(cors());
const PORT = process.env.PORT || 8080;

const db = require("./db");

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Request-Method", "*");
  next();
});

const usersRoute = require("./routers/User");
const storiesRoute = require("./routers/Stories");

console.log(process.env.MONGO_URL);

app.use("/api/user", usersRoute);
app.use("/api/stories", storiesRoute);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.listen(PORT, () => {
  console.log(`Medium Clone 3.0 API is running on PORT No- ${PORT}`);
});