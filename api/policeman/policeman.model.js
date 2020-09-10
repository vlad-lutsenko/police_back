const mongoose = require("mongoose");
const policemanSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  rank: { type: String, required: true },
  department: { type: String, required: true },
  number: { type: String, required: true },
  birth: { type: String, required: true },
  death: { type: String, required: true },
  story: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Story" },
    // || {
    //   text: { type: String, required: true },
    //   author: { type: String },
    // }
  ],
  awards: [{ type: String }],
  ps: { type: String },
  fromAuthor: { type: String },
  photoUniform: { type: String, required: true },
  photoNoUniform: { type: String, required: true },
  photoСhevron: { type: String, required: true },
});

module.exports = mongoose.model("Policeman", policemanSchema);
