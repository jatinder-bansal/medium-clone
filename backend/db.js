const mongoose = require("mongoose");
var mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  // useFindAndModify: false,
});

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB connection Failed");
});

connection.on("uconnected", () => {
  console.log("Mongo DB connection Successfull");
});