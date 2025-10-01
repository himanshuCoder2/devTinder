const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error
    res.status(500).send("something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  //try {
  // Logic of DB call and get user data
  throw new Error("dvbzhjf");
  res.send("User Data Sent");
  });

app.use("/", (err, req, res, next) => {
  if (err) {
    // error
    res.status(500).send("something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is successfully running on Port 3000..");
});
