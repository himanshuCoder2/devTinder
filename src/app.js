const express = require("express");
const connectDB = require("./config/db")
const app = express();
const User = require("./models/user")

app.use(express.json());

app.post("/signup", async (req, res) => {

  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send("User Added Successfully");
  } catch (error) {
    res.status(400).send("Error occur during user signup", error.message
    );
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    console.log(userEmail);
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }

    // const users = await User.find({ emailId: userEmail });
    // if (users.length === 0) {
    //   res.status(404).send("User not found");
    // } else {
    //   res.send(users);
    // }
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});
//getUserbyId
app.get("/getUser",async(req,res)=>{
  const id=req.body.userId
  try{
    
    const user=await User.findById(id);
    if(!id){
      res.status(404).send("User not found")
    }else{
      res.send(user);
    }
  }catch(err){
    res.status(400).send("Something Went Wrong");
  }
})


//Feed API - GET /feed - get all the users from the database
app.get('/feed', async (req, res) => {

  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong ");
  }
})

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


