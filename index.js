require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;
// console.log(process.env);
app.get("/home", (req, res) => {
  res.send("get request send successfully");
});

app.listen(process.env.PORT, () => {
  console.log(`resquest is successfully listen on port ${process.env.PORT}`);
});
