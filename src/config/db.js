const mongoose = require('mongoose');

const connectDB =async()=>{
    await mongoose.connect("mongodb+srv://nodeuser:p1TbtzhQ0M8eGBbg@node.anqg4ri.mongodb.net/devTinder");

}

module.exports=connectDB;
