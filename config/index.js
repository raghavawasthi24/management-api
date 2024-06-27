const mongoose = require("mongoose");
require("dotenv").config();


const DB_URL =
  process.env.MONGO_URI ||
  "mongodb+srv://raghav:Raghav@24@cluster0.3hgrnqr.mongodb.net/";

mongoose
  .connect(DB_URL, { useNewUrlParser: true } )
  .then(() => {
    console.log("Databse connected successfully!");
  })
  .catch((err) => {
    console.log(err.message);
  });