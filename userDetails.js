
const mongoose = require("mongoose");

//setting up account details
const UserDetailsScehma = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: {type: String, unique:true},
        age: String,
        country: String,
        phonenum: String,
    },
    {
        collection: "UserInfo",
    }
);

//setting up the username and password
const usernamePass = new mongoose.Schema(
    {
        uname: {type: String, unique:true},
        password: String,
        email: {type: String, unique:true},
        verified: {type: Boolean, default: false},
    },
    {
        collection: "Users"
    }
);

//verification email
const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
        unique: true,
    },
    token: {type: String, required: true},
    createdAt: {type:Date, default:Date.now(), expires:3600} //1 hour, reduce this
})

mongoose.model("UserInfo", UserDetailsScehma);
mongoose.model("Users", usernamePass);

module.exports = mongoose.model("tokenSchema", tokenSchema);