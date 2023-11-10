const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(
  "mongodb+srv://alishakhan:alisha123@cluster0.q2qnde3.mongodb.net/AllLinks?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
