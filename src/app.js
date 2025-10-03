const express = require("express");
const connectDB = require("./config/db")
const app = express();
const User = require("./models/user")

app.post('/signup', async (req, res) => {

  const user = new User({
    firstName: "Kishan ",
    lastName: "Kumar",
    email: "Ravi@gamil.com",
    passsword: "John@342241#",
    age: 20,
    gender: "Male",
    about: "User",
    photoUrl: "localhot://5000/dev",
    skills: "Learning"
  }); try {
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


