const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const usersRoute = require("./routers/users");
const categoriesRoute = require("./routers/categories");
const sliderRoute = require("./routers/sliders");
var cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.use("/user", usersRoute);
app.use("/categories", categoriesRoute);
app.use("/slider", sliderRoute);
mongoose.connect(
  "mongodb://localhost:27017/booking-management",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected db");
  }
);
app.listen(9292);
