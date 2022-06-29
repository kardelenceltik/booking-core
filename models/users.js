const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
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
  rowStatusId: {
    type: Number,
  },
});
module.exports = mongoose.model("user", userSchema);
