require("dotenv").config();
const express = require("express");
const PORT = 5000;
const app = express();
const cors = require("cors");
require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//app.use(`/${process.env.VERSION}`, require("./routes/index"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, Welcome To This Page",
  });
});

app.listen(PORT, () => {
  console.log(`Server is live at PORT: ${PORT}`);
});
