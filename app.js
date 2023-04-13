
const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const JWT_SECRET  = "sdf$%HY$HNEF23d1E(_+fghdsgfvQDSAD#@#DF@#~SCERG%()DASD!@E!@edda493485gwbgjgfj7-=";
const Token = require("./userDetails");
const sendEmail = require("./utils/sendEmail");
const crypto = require("crypto");

const mongoUrl = "mongodb+srv://admin:sAn8hGfBx8500uGp@usersignin.r2o0fzx.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => {console.log("Connected to database");})
.catch(e=>console.log(e))

require("./userDetails");

const User = mongoose.model("UserInfo");
app.post("/register", async(req, res) => {
    const {fname,lname,email, age, country, phonenum} = req.body;
    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.send({ error: "User Exists" })
        }
        await User.create({
            fname,
            lname,
            email,
            age,
            country,
            phonenum,
        });
        res.send({status: "ok"});
    }catch (error) {
        res.send({status: "error"});
    }
});

const UserPassword = mongoose.model("Users");
app.post("/userpass", async(req, res) => {
    const {uname, password, email} = req.body;
    console.log("Received in userpass")

    const encryptPassword = await bcrypt.hash(password, 10);
    try {
        const userAccount = await UserPassword.findOne({ uname });
        let useremail = await UserPassword.findOne({ email: req.body.email});
        
        if (userAccount) {
            return res.send({ error: "User Exists" })
        }
        const newUserAccount = await UserPassword.create({
            uname,
            password: encryptPassword,
            email,
            verified: false,

        });
        console.log("Created URL");
        const salt = await bcrypt.genSalt(Number(10));
;
        const hashPassword = await bcrypt.hash(req.body.password, salt);


        console.log(useremail);
        const tokenPromise = new Token({
            userId: newUserAccount._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save();
        
        tokenPromise.then((token) => {
            console.log(token);
            const url = `http://localhost:3000/users/${newUserAccount._id}/verify/${token.token}`;
            const subject = "Verify your email address";
            sendEmail(email, subject, url);
        }).catch((err) => {
            console.error(err);
        });

    } catch (error) {
        res.send({ status: "error" });
    }
});

router.get("/:id/verify/:token", async(req, res) => {
    try {
        console.log("Router");
        const user = await UserPassword.findOne({_id: req.params.id});
        if(!user) return res.status(400).send({message: "Invalid Link"});

        const token = await Token.findOne({
            userId: user._id,
            token:req.params.token
        });
            
        if(!token) return res.status(400).send({message: "Invalid Link"});

        await UserPassword.updateOne({_id:user._id, verified:true});
        await token.remove();

        res.status(200).send({message: "Email verified"})

    }catch (error) {

        res.status(500).send({message: "Internal Server Error"})
    }
})


app.post("/userData", async(req, res) => {
    const {token} = req.body;

    try {
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;
        UserPassword.findOne({ email: useremail})
        .then((data) => {
            res.send({ status: "ok", data:data});
        })
        .catch((error) => {
            res.send({status: "error", data: error});
        })
    } catch (error) {}
})

app.listen(5000, () => {
    console.log("Server Started");
});

