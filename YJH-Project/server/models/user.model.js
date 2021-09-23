const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname : {
        type : String,
        // minlength : [2, "First name should be at least 2 characters!"]
    },
    lastname : {
        type : String,
        // minlength : [2, "Last name should be at least 2 characters!"]
    },
	username : {type : String
    },
    password : {
        type : String,
        // minlength:[8,"Password should be at least 8 characters!"]
    },
    hourMoney : {
        type : Number
    },
}, {timestamps : true});

module.exports.User = mongoose.model('User', UserSchema);