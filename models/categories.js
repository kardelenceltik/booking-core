const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  rowStatusId: {
    type: Number,
  },
});
module.exports = mongoose.model("category", categoriesSchema);
