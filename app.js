const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const validator = require("validator");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());

const limiter = rateLimit({});
app.use("/api", limiter);

app.use(mongoSanitize());

app.use(hpp());

app.use((req, res) => {
  res.status(404).json({ status: "fail", message: "Route not found" });
});

module.exports = app;
