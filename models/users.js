const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  password: {
    type: String,
  },
  mail: {
    type: String,
  },
  phone: {
    type: String,
  },
});
module.exports = mongoose.model("user", userSchema);
