const mongoose = require("mongoose");

const ConnectDb = () => {
  mongoose.connect(
    "mongodb+srv://admin:Password1@devconnector.rcxhefg.mongodb.net/deerEcommerce?retryWrites=true&w=majority",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("db connected");
      }
    }
  );
};

module.exports = ConnectDb;
