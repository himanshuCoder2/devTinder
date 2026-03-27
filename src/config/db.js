const mongoose = require('mongoose');

const connectDB =async()=>{
    await mongoose.connect("mongodb+srv://nodeuser:q4fHmlAfz3GNGMR3@node.anqg4ri.mongodb.net/devTinder");

}

module.exports=connectDB;
