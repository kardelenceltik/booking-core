const mongoose = require("mongoose");
const slidersSchema = mongoose.Schema({
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  rowStatusId: {
    type: Number,
  },
});
module.exports = mongoose.model("slider", slidersSchema);
