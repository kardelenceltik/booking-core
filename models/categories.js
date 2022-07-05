const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema({
  // _id: {
  //   type: mongoose.Types.ObjectId,
  //   require: false,
  // },
  name: {
    type: String,
  },
  rowStatusId: {
    type: Number,
  },
});
module.exports = mongoose.model("category", categoriesSchema);
