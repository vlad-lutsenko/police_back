const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String },
  policeman: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Policeman",
  },
});

module.exports = mongoose.model("Story", storySchema);
