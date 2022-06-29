const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const usersRoute = require("./routers/users");
app.use(bodyParser.json());

app.use("/user", usersRoute);

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
