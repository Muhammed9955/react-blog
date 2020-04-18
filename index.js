const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://muhammed:medo1995@cluster0-b6pz5.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("helooooooooooo");
});

app.listen(5000);
