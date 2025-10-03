const express = require("express");
const connectDB = require("./config/db")
const app = express();
const User = require("./models/user")

app.use(express.json());

app.post('/signup', async (req, res) => {

  const user = new User(req.body); 
  try {
    await user.save();
    res.status(201).send("User Added Successfully");
  } catch (error) {
    res.status(400).send("Error occur during user signup", error.message
    );
  }


});
connectDB().then(() => {
  console.log("Database connection established");
  app.listen(5000, () => {
    console.log("Server is successfully running on Port 5000..");
  });
})
  .catch((err) => {
    console.error("Database cannnot be connected");

  }
  );


