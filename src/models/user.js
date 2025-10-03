const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
type:String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    passsword: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    about: {
        type: String
    },
    photoUrl: {
        type: String
    },
     skills: {
        type: String
    }
})

module.exports=mongoose.model('User', userSchema);