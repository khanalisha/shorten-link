const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  name: String,

  Urls: [
    {
      type: schema.Types.ObjectId,
      ref: "Link",
    },
  ],
});

const userModel = mongoose.model("User", UserSchema);

module.exports = {
  userModel,
};
