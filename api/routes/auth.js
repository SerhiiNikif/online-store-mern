const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const ApiError = require('../exceptions/api-error.js');

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

//LOGIN
router.post("/login", async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});

        if (!user) {
            throw ApiError.BadRequest('Wrong credentials!');
        }

        const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const OriginalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

        if (OriginalPassword !== req.body.password) {
            throw ApiError.BadRequest('Wrong credentials!');
        }

        const accessToken = jwt.sign(
            {
                id: user._id, 
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SEC, 
            {expiresIn: "3d"}
        );

        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});


    } catch (err) {
        next(err);
    }
});

router.post("/logout", (req, res) => {
    res.status(200).json("Logged out successfully.");
});

module.exports = router;