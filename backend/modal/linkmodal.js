const mongoose = require("mongoose");
const schema = mongoose.Schema;
const linkSchema = new schema({
  link: String,
  shortURL: String,
  expiresAt: Date,
});

const linkModel = mongoose.model("Link", linkSchema);

module.exports = {
  linkModel,
};
