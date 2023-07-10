const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://konark:konark@cluster0.m3plh1e.mongodb.net/food?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
